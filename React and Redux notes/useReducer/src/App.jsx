import AppName from "./components/AppName";
import AddtoDo from "./components/AddToDo";
import "./App.css";
// import ListNew from "./components/ListNew";
import ListNew1 from "./components/ListNew1";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddtoDo />
        <WelcomeMessage />
        <ListNew1 />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
