import streamlit as st
import pandas as pd
import plotly.express as px
import numpy as np

# Page Config
st.set_page_config(page_title="Personal Finance Simulator", layout="wide")
st.title("🚀 Personal Finance Simulator")

# --- SIDEBAR INPUTS ---
st.sidebar.header("Your Monthly Cashflow")
income = st.sidebar.number_input("Monthly Income (\$)", value=1500)
rent = st.sidebar.number_input("Rent (\$)", value=0)
food = st.sidebar.number_input("Food (\$)", value=350)
transport = st.sidebar.number_input("Transport (\$)", value=120)
investments = st.sidebar.number_input("Investments (\$)", value=250)
emergency_fund = st.sidebar.number_input("Current Emergency Fund (\$)", value=5000)

# --- CALCULATIONS ---
expenses = rent + food + transport
savings = income - expenses - investments
savings_rate = (savings / income) * 100 if income > 0 else 0

# CPF Calculation (Simplified SG context)
if income >= 750:
    employee_cpf = income * 0.20
    employer_cpf = income * 0.17
elif income > 500:
    # Simplified phased employee contribution
    employee_cpf = (income - 500) * 0.60
    employer_cpf = income * 0.17
else:
    employee_cpf = 0
    employer_cpf = income * 0.17 if income > 50 else 0

take_home = income - employee_cpf
total_cpf = employee_cpf + employer_cpf

# --- DYNAMIC AI ADVISOR LOGIC ---
st.markdown("### 🤖 AI Financial Advisor")

# 50-30-20 Analysis
needs = expenses
needs_pct = (needs / income) * 100 if income > 0 else 0

expense_dict = {"Rent": rent, "Food": food, "Transport": transport}
highest_expense_name = max(expense_dict, key=expense_dict.get)
highest_expense_val = expense_dict[highest_expense_name]

if highest_expense_val > 0:
    reduction_saving = highest_expense_val * 0.15
    # Compounding reduction savings over 10 years at 7%
    y = 10
    future_value_additional = (reduction_saving * 12) * (((1 + 0.07)**y - 1) / 0.07)
    
    insight_msg = (
        f"**Insight:** Your highest expense is {highest_expense_name} at \${highest_expense_val:,.2f}/month. "
        f"If you reduced this by 15% (saving \${reduction_saving:,.2f}) and invested it, "
        f"your portfolio could grow by an additional **\${future_value_additional:,.2f}** over 10 years "
        f"(assuming a 7% annual return)."
    )
else:
    insight_msg = "**Insight:** Your expenses are very low! Keep focusing on growing your income and investments."

if needs_pct > 50:
    insight_msg += f" Note: Your 'Needs' make up {needs_pct:.1f}% of your income, which is above the 50% rule of thumb."

st.info(insight_msg)
st.divider()

# --- CPF BREAKDOWN SECTION ---
st.subheader("🏛️ CPF Breakdown")
if income < 750 and income > 500:
    st.caption("Note: Your income falls below the standard full-contribution CPF threshold.")
col_cpf1, col_cpf2, col_cpf3 = st.columns(3)
col_cpf1.metric("Take-Home Pay", f"\${take_home:,.2f}")
col_cpf2.metric("Employee CPF Deduction", f"\${employee_cpf:,.2f}")
col_cpf3.metric("Total CPF Monthly Contribution", f"\${total_cpf:,.2f}")
st.divider()

# --- DASHBOARD LAYOUT ---
col1, col2 = st.columns(2)

with col1:
    st.subheader("📈 10-Year Total Net Worth Growth")
    # Simulate 10 years of compounding at 7% + cash savings
    years = np.arange(1, 11)
    
    cash_savings_growth = [savings * 12 * y for y in years]
    investment_growth = [investments * 12 * (((1 + 0.07)**y - 1) / 0.07) for y in years]
    
    df_cash = pd.DataFrame({"Year": years, "Value": cash_savings_growth, "Type": "Cumulative Cash Savings"})
    df_invest = pd.DataFrame({"Year": years, "Value": investment_growth, "Type": "Investment Growth"})
    df_combined = pd.concat([df_cash, df_invest])
    
    fig1 = px.bar(df_combined, x="Year", y="Value", color="Type",
                  color_discrete_sequence=["#3A6D8C", "#001F3F"], barmode="stack")
    st.plotly_chart(fig1, use_container_width=True)

with col2:
    st.subheader("📊 Income Distribution")
    df_cpf = pd.DataFrame({
        "Category": ["Employee CPF", "Employer CPF", "Take-Home Pay"],
        "Amount": [employee_cpf, employer_cpf, take_home]
    })
    # Remove 0 amounts for cleaner chart
    df_cpf = df_cpf[df_cpf["Amount"] > 0]
    
    fig2 = px.pie(df_cpf, values="Amount", names="Category", hole=0.4, 
                  color_discrete_sequence=["#001F3F", "#3A6D8C", "#89A8B2"]) 
    st.plotly_chart(fig2, use_container_width=True)

st.divider()

col3, col4 = st.columns(2)

with col3:
    st.subheader("💰 Savings Rate")
    st.metric(label="Monthly Savings", value=f"\${savings:,.2f}")
    if savings < 0:
        st.warning(f"You are currently running a deficit of \${abs(savings):,.2f} per month.")
    else:
        st.progress(min(savings_rate / 100, 1.0))
        st.caption(f"You are saving {savings_rate:.1f}% of your gross income.")

with col4:
    st.subheader("🏦 Net Worth Snapshot")
    current_nw = emergency_fund + (investments * 12) + (savings * 12)
    st.metric(label="Estimated Year 1 Net Worth", value=f"\${current_nw:,.2f}")

st.divider()

# --- Watermark ---
st.markdown(
    """
    <div style='text-align: center; margin-top: 50px;'>
        <hr style='border: 1px solid #f0f4f8; margin-bottom: 10px;' />
        <span style='color: grey; font-size: 0.8em;'>made by Ngai Jia Xuan</span>
    </div>
    """, 
    unsafe_allow_html=True
)
