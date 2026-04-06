import React, { useState, useEffect, useMemo } from "react";
import { LineChart, Line } from "recharts";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

const defaultData = [
  { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-04-02", amount: 1200, category: "Food", type: "expense" },
  { id: 3, date: "2026-04-03", amount: 800, category: "Shopping", type: "expense" },
  { id: 4, date: "2026-04-04", amount: 2000, category: "Freelance", type: "income" },
];

export default function FinanceDashboard() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : defaultData;
  });

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const totalIncome = useMemo(() =>
    transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0),
    [transactions]
  );

  const totalExpense = useMemo(() =>
    transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0),
    [transactions]
  );

  const balance = totalIncome - totalExpense;

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

 const addTransaction = () => {
  if (!form.amount || !form.category) {
    alert("Please fill all fields");
    return;
  }

  const newTx = {
    id: Date.now(),
    date: form.date,
    amount: Number(form.amount),
    category: form.category,
    type: form.type,
  };

  setTransactions(prev => [...prev, newTx]);

  // Reset form
  setForm({
    amount: "",
    category: "",
    type: "expense",
    date: new Date().toISOString().slice(0, 10),
  });
};


  //add transactions manually
  const [form, setForm] = useState({
  amount: "",
  category: "",
  type: "expense",
  date: new Date().toISOString().slice(0, 10),
});
const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};



  // 🔹 Highest Spending Category
const highestCategory = useMemo(() => {
  const map = {};

  transactions
    .filter(t => t.type === "expense")
    .forEach(t => {
      map[t.category] = (map[t.category] || 0) + t.amount;
    });

  const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
  return sorted[0]?.[0] || "N/A";
}, [transactions]);

const avgExpense =
  totalExpense /
  (transactions.filter(t => t.type === "expense").length || 1);

// 🔹 Monthly Comparison
const monthlyData = useMemo(() => {
  const months = {};

  transactions.forEach(t => {
    const month = t.date.slice(0, 7); // YYYY-MM
    months[month] =
      (months[month] || 0) +
      (t.type === "income" ? t.amount : -t.amount);
  });

  return Object.entries(months);
}, [transactions]);

const lastMonth = monthlyData[monthlyData.length - 2];
const currentMonth = monthlyData[monthlyData.length - 1];

const comparison =
  lastMonth && currentMonth
    ? currentMonth[1] - lastMonth[1]
    : 0;

// 🔹 Useful Observation
const observation =
  totalExpense > totalIncome
    ? "⚠️ You are spending more than you earn"
    : "✅ Your finances are healthy";



  // Income vs Expense Chart Data
const barData = [
  { name: "Income", value: totalIncome },
  { name: "Expense", value: totalExpense },
];

const trendData = transactions.map(t => ({
  date: t.date,
  amount: t.type === "income" ? t.amount : -t.amount,
}));

// Category-wise Expense Data
const categoryData = useMemo(() => {
  const map = {};
  transactions
    .filter(t => t.type === "expense")
    .forEach(t => {
      map[t.category] = (map[t.category] || 0) + t.amount;
    });

  return Object.keys(map).map(key => ({
    name: key,
    value: map[key],
  }));
}, [transactions]);

const COLORS = ["#4ade80", "#f87171", "#60a5fa", "#facc15", "#c084fc"];


  return (
    <div className={dark ? "container dark" : "container"}>
      {/* Sidebar */}
      <div className="sidebar">
  <h1 className="logo">💰 Finance Pro</h1>

  <div className="section">
    <label className="label">User Role</label>
    <select
      className="select"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="viewer">👀 Viewer</option>
      <option value="admin">⚡ Admin</option>
    </select>
  </div>

 <div className="section">
  <label className="label">Theme</label>
  <select
    className="select"
    value={dark ? "dark" : "light"}
    onChange={(e) => setDark(e.target.value === "dark")}
  >
    <option value="light">🌞 Light Mode</option>
    <option value="dark">🌙 Dark Mode</option>
  </select>
</div>



  <div className="footer">
    <p>© 2026 Finance App</p>
  </div>
</div>

      {/* Main */}
      <div className="main">
        <h2 style={{ marginBottom: "20px" }}>📊 Dashboard Overview</h2>

        {/* Summary Cards */}
        <div className="grid">
          <div className="card">
            <h3>Balance</h3>
            <p className="amount">₹{balance}</p>
          </div>
          <div className="card">
            <h3>Income</h3>
            <p className="amount">₹{totalIncome}</p>
          </div>
          <div className="card">
            <h3>Expenses</h3>
            <p className="amount">₹{totalExpense}</p>
          </div>
          {/* Insights */}
        {/* Insights */}
<div className="card">
  <h3>📊 Insights</h3>

  <p>
    <strong>Highest Spending Category:</strong> {highestCategory}
  </p>

  <p>
    <strong>Monthly Change:</strong> ₹{comparison}{" "}
    {comparison > 0 ? "📈" : comparison < 0 ? "📉" : ""}
  </p>
  <p>
    <strong>Total Transactions:</strong> {transactions.length}
  </p>

  <p>
    <strong>Net Savings:</strong> ₹{balance}
  </p>
  <p><strong>Average Expense:</strong> ₹{Math.round(avgExpense)}</p>
   <p>
    <strong>Observation:</strong> {observation}
  </p>
</div>
  
        </div>

  {/* Balance Trend */}
  <div className="card md:col-span-3">
    <h3>Balance Trend</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={trendData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="amount" />
      </LineChart>
    </ResponsiveContainer>
  </div>

         {/* Charts Section */}
<div className="grid">
  {/* Bar Chart */}
  <div className="card">
    <h3>Income vs Expense</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={barData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* Pie Chart */}
  <div className="card">
    <h3>Expenses by Category</h3>
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          outerRadius={70}
          label
        >
          {categoryData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
</div> 

        {/* Transactions */}
        <div className="card">
          <h3>Transactions</h3>

          <input
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

         
          {filtered.length === 0 ? (
            <p>No transactions found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(t => (
                  <tr key={t.id}>
                    <td>{t.date}</td>
                    <td>{t.category}</td>
                    <td>{t.type}</td>
                    <td>₹{t.amount}</td>
                  </tr>
                ))}
                {role === "admin" && (
  <div className="form">
    <h4>Add Transaction</h4>

    <input
      type="number"
      name="amount"
      placeholder="Amount"
      value={form.amount}
      onChange={handleChange}
    />

    <input
      type="text"
      name="category"
      placeholder="Category (Food, Salary...)"
      value={form.category}
      onChange={handleChange}
    />

    <select name="type" value={form.type} onChange={handleChange}>
      <option value="expense">Expense</option>
      <option value="income">Income</option>
    </select>

    <input
      type="date"
      name="date"
      value={form.date}
      onChange={handleChange}
    />

    <button onClick={addTransaction}>➕ Add</button>
  </div>
)}
              </tbody>
            </table>
          )}
        </div>

        
      </div>
    </div>
  );
}