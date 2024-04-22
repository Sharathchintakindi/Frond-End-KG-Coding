import styles from "./item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`${styles["Kg-item"]} list-group-item`}>
      <span className={styles["Kg-Span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
// "list-group-item {}//
