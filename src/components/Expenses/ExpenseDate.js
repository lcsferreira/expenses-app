import "../Expenses/ExpenseDate.css";
import React from "react";

export default function ExpenseDate(props) {
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  const month = props.date.toLocaleString("pt-BR", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
