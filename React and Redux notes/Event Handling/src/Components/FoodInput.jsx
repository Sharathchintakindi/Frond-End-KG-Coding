import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  //  Changing the content
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <input
      type="text"
      placeholder="Enter Your Food Item Here"
      className={styles.FoodInput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
