import ListNew from "./ListNew";
import styles from "./ListNew1.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const ListNew1 = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ListNew key={item.name} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default ListNew1;

// <ListNew todoName={"Buy Milk"} todoDate={"4/10/2023"} />
//       <ListNew todoName={"Go to College"} todoDate={"4/10/2023"} />
