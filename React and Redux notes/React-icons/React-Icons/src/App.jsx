import AppName from "./components/AppName";
import AddtoDo from "./components/AddToDo";
import "./App.css";
// import ListNew from "./components/ListNew";
import ListNew1 from "./components/ListNew1";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const intialTodoItems = [
  //   { name: "Buy Milk", dueDate: "4/10/2023" },

  //   { name: "Go to College", dueDate: "4/10/2023" },

  //   { name: "Like this video", dueDate: "right now...!" },
  //   { name: "React totorial", dueDate: "right now...!" },
  // ];

  const [todoItems, setTodoItems] = useState([]);
  // intialTodoItems
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added ${itemName} Date:${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddtoDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <ListNew1 todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      {/* <div class="container text-center"></div> */}
    </center>
  );
}

export default App;
