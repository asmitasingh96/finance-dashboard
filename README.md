# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# 💰 Finance Dashboard

## 📌 Overview

This project is a simple and interactive **Finance Dashboard** built using React.
It allows users to track their financial activity, explore transactions, and understand spending patterns through visual insights.

---

## 🎯 Features

### 📊 Dashboard Overview

* Displays key financial metrics:

  * Total Balance
  * Total Income
  * Total Expenses
* Includes visualizations:

  * 📈 Balance Trend (Line Chart)
  * 📊 Income vs Expense (Bar Chart)
  * 🥧 Expense Breakdown by Category (Pie Chart)

---

### 📋 Transactions Section

* View all transactions with:

  * Date
  * Category
  * Type (Income/Expense)
  * Amount
* Features:

  * 🔍 Search/filter by category
  * ➕ Add transaction (Admin only)
  * Handles empty states gracefully

---

### 👤 Role-Based UI

* **Viewer**

  * Can only view data
* **Admin**

  * Can add new transactions
* Role switching via dropdown (frontend simulation)

---

### 📊 Insights Section

* Highest spending category
* Monthly financial comparison
* Average expense
* Net savings
* Smart observation:

  * Alerts if spending exceeds income

---

### ⚙️ State Management

* Managed using React Hooks:

  * `useState` for application state
  * `useEffect` for persistence
  * `useMemo` for performance optimization
* Handles:

  * Transactions data
  * Filters
  * Role selection
  * Theme (Dark/Light)

---

### 🎨 UI/UX Features

* Clean and modern dashboard design
* Responsive grid layout
* 🌙 Dark / Light mode
* Glassmorphism-style cards
* Interactive charts

---

### 💾 Data Persistence

* Transactions stored in **localStorage**
* Data persists after page refresh

---

## 🛠️ Tech Stack

* React (Vite)
* Recharts (for charts)
* CSS (custom styling)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd finance-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

```bash
npm run dev
```

---

## 📂 Project Structure

```
src/
 ├── App.jsx
 ├── index.css
 └── components (optional)
```

---

## 💡 Approach

The dashboard is built with a focus on:

* Simplicity and clarity
* Component-based structure
* Efficient state management using React hooks
* Real-time UI updates based on state changes

---

## ⭐ Optional Enhancements Implemented

* Dark mode
* Data persistence (localStorage)
* Interactive charts
* Role-based UI

---

## 📌 Future Improvements

* Edit/Delete transactions
* Export data (CSV)
* Advanced filtering (date range, category)
* Backend integration (API)
* Authentication system

---

## 📷 Screenshots

<img width="1899" height="910" alt="Screenshot 2026-04-06 093624" src="https://github.com/user-attachments/assets/76e31b2c-c099-4b5a-825f-19402d7fb406" />
<img width="1885" height="912" alt="Screenshot 2026-04-06 093350" src="https://github.com/user-attachments/assets/b1251570-0c16-4094-a428-b24e0ae1dec4" />
<img width="1603" height="897" alt="Screenshot 2026-04-06 093439" src="https://github.com/user-attachments/assets/22876f78-e0cb-404c-b7b3-1da84727058d" />
<img width="1398" height="397" alt="Screenshot 2026-04-06 093815" src="https://github.com/user-attachments/assets/87098936-3fec-483d-806d-2420ee235ef6" />

---

## 👩‍💻 Author

Asmita Singh

---

## 📜 License

This project is for evaluation purposes only.
