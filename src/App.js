import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Cars Insurance",
      amount: 294.78,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div>
      <h2>Lets get started</h2>
      <p>This is also visible</p>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
