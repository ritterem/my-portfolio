import streamlit as st
import pandas as pd
import plotly.express as px
import numpy as np

# Page Config
st.set_page_config(page_title="Uni Student Finance Simulator", layout="wide")
st.title("🚀 Uni Student Finance Simulator")

# --- SIDEBAR INPUTS ---
st.sidebar.header("Your Monthly Cashflow")
income = st.sidebar.number_input("Monthly Income ($)", value=1500)
rent = st.sidebar.number_input("Rent ($)", value=0)
food = st.sidebar.number_input("Food ($)", value=350)
transport = st.sidebar.number_input("Transport ($)", value=120)
investments = st.sidebar.number_input("Investments ($)", value=250)
emergency_fund = st.sidebar.number_input("Current Emergency Fund ($)", value=5000)

# --- CALCULATIONS ---
expenses = rent + food + transport
savings = income - expenses - investments
savings_rate = (savings / income) * 100 if income > 0 else 0

# CPF Calculation (Simplified SG context: 20% employee if income >= $750)
cpf_contrib = income * 0.20 if income >= 750 else 0
take_home = income - cpf_contrib

# --- AI INSIGHT WIDGET ---
st.markdown("### 🤖 AI Financial Advisor")
st.info(
    "**Insight:** If you reduced eating out by $50/month and invested it instead, "
    "your investment portfolio could grow by approximately **$10,000** over 10 years "
    "(assuming a 7% annual return)."
)

# --- DASHBOARD LAYOUT ---
col1, col2 = st.columns(2)

with col1:
    st.subheader("📈 10-Year Investment Growth")
    # Simulate 10 years of compounding at 7%
    years = np.arange(1, 11)
    growth = [investments * 12 * (((1 + 0.07)**y - 1) / 0.07) for y in years]
    df_growth = pd.DataFrame({"Year": years, "Portfolio Value": growth})
    fig1 = px.line(df_growth, x="Year", y="Portfolio Value", markers=True)
    st.plotly_chart(fig1, use_container_width=True)

with col2:
    st.subheader("📊 CPF vs Take-Home Pay")
    df_cpf = pd.DataFrame({
        "Category": ["CPF Contribution", "Take-Home Pay"],
        "Amount": [cpf_contrib, take_home]
    })
    fig2 = px.pie(df_cpf, values="Amount", names="Category", hole=0.4)
    st.plotly_chart(fig2, use_container_width=True)

st.divider()

col3, col4 = st.columns(2)

with col3:
    st.subheader("💰 Savings Rate")
    st.metric(label="Monthly Savings", value=f"${savings:.2f}")
    st.progress(min(savings_rate / 100, 1.0))
    st.caption(f"You are saving {savings_rate:.1f}% of your gross income.")

with col4:
    st.subheader("🏦 Net Worth Snapshot")
    current_nw = emergency_fund + (investments * 12) # simplified year 1 snapshot
    st.metric(label="Estimated Year 1 Net Worth", value=f"${current_nw:,.2f}")
