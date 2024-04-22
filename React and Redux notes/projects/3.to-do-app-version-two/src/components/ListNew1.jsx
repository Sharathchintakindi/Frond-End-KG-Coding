import ListNew from "./ListNew";
import styles from "./ListNew1.module.css";

const ListNew1 = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ListNew todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default ListNew1;

// <ListNew todoName={"Buy Milk"} todoDate={"4/10/2023"} />
//       <ListNew todoName={"Go to College"} todoDate={"4/10/2023"} />
