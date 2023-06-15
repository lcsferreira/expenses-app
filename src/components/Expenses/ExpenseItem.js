import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/ExpenseItem.css";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log("Clicked!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">R$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
