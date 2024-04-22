import AppName from "./components/AppName";
import AddtoDo from "./components/AddToDo";
import "./App.css";
// import ListNew from "./components/ListNew";
import ListNew1 from "./components/ListNew1";

function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "4/10/2023" },

    { name: "Go to College", dueDate: "4/10/2023" },

    { name: "Like this video", dueDate: "right now...!" },
    { name: "React totorial", dueDate: "right now...!" },

  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddtoDo />
      <ListNew1 todoItems={todoItems} />
      {/* <div class="container text-center"></div> */}
    </center>
  );
}

export default App;
