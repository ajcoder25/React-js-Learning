const expenses = [
  { id: 1, name: "Groceries", amount: 150 },
  { id: 2, name: "Utilities", amount: 80 },
  { id: 3, name: "Dining Out", amount: 120 },
  { id: 4, name: "Transportation", amount: 50 },
];

let expenseList = document.getElementById("expenseList");
let selected = document.getElementById("selected");

function showData() {
  let filterOut = checkValue
    ? expenses.filter((expense) => expense.amount > 100)
    : expenses;
}
