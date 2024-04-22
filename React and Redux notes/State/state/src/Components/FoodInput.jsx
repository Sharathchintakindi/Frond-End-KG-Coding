import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Your Food Item Here"
      className={styles.FoodInput}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
