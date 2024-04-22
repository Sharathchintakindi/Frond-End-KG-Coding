import AppName from "./components/AppName";
import AddtoDo from "./components/AddToDo";
import List from "./components/List";
import List1 from "./components/List1";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddtoDo />

      <div className="items-container">
        <List />
        <List1 />
      </div>
      {/* <div class="container text-center"></div> */}
    </center>
  );
}

export default App;
