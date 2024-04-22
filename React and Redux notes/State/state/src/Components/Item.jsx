import styles from "./item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // Already Used but for change its commenting
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} added to cart`);
  // };

  return (
    <li
      className={`${styles["Kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["Kg-Span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-success`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
