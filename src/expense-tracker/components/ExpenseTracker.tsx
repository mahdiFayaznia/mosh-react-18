import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Bread", amount: 3, category: "Groceries" },
    { id: 2, description: "Milk", amount: 2, category: "Groceries" },
    { id: 3, description: "Meat", amount: 6, category: "Groceries" },
    { id: 4, description: "Egg", amount: 1, category: "Groceries" },
    { id: 5, description: "Ticket", amount: 12, category: "Entertainment" },
    { id: 6, description: "Movie", amount: 8, category: "Entertainment" },
    { id: 7, description: "Clock", amount: 100, category: "Utilities" },
    { id: 8, description: "Phone", amount: 500, category: "Utilities" },
  ]);

  // select the selected
  const [selectedCategory, setSelectedCategory] = useState("");

  // DO NOT useState: calculate with the existing state
  const visibleCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="rounded-lg border border-slate-200 p-5">
      <h1>Expense Tracker</h1>
      <div className="py-5">
        {/* <ExpenseForm onSubmit={(data) => console.log(data)} /> */}
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="py-5">
        <div className="mb-1">
          {/* <ExpenseFilter onSelectCategory={(category) => console.log(category)} /> */}
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>

        {/* <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("id", id)}
      /> */}
        <ExpenseList
          // expenses={expenses}
          expenses={visibleCategory}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
};

export default ExpenseTracker;
