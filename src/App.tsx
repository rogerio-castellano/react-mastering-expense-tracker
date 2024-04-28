import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseForm from "./Components/ExpenseForm";
import { useState } from "react";

const samplesExpenses = [
  { id: 1, description: "Gas", category: "Utilities", amount: 100 },
  { id: 2, description: "Fruit", category: "Groceries", amount: 10 },
];

function App() {
  const [expenses, setExpenses] = useState(samplesExpenses);
  const [selectedCategory, setSelectedCategory] = useState("");
  const selectedExpenses = selectedCategory !== "" ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Expense tracker</h1>
        <hr className="my-4"></hr>
      </div>
      <div>
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(expense) => {
              setExpenses([...expenses, { ...expense, id: Math.max(...expenses.map((e) => e.id)) + 1 }]);
            }}
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onChange={(category) => {
              setSelectedCategory(category);
            }}
          />
        </div>
        <ExpenseList expenses={selectedExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
      </div>
    </>
  );
}

export default App;
