import AppName from "./components/AppName";
import AddtoDo from "./components/AddToDo";
import "./App.css";
// import ListNew from "./components/ListNew";
import ListNew1 from "./components/ListNew1";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  // intialTodoItems
  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddtoDo />
        <WelcomeMessage />
        <ListNew1 />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
