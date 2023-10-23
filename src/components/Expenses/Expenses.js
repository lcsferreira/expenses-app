import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  let filterInfoText = "2019, 2021 & 2022";

  if (filteredYear === "2022") {
    filterInfoText = "2019, 2021 & 2023";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2022 & 2023";
  } else if (filteredYear === "2019") {
    filterInfoText = "2021, 2022 & 2023";
  } else {
    filterInfoText = "2019, 2021 & 2022";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterYear={filterChangeHandler}
        />
        <p className="expenses-filter-info">
          Data for years {filterInfoText} is hidden.
        </p>
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
