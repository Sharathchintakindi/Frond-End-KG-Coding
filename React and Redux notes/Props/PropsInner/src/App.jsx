import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
let App = () => {
  //let foodItems = [];
  let foodItems = ["Chicken", "Crabs", "Mutton", "Prawns"];
  //let emptyMessage = foodItems.length === 0 ? <h3>Iam hungry</h3> : null;
  // if (foodItems.length ===0){
  //   return <h3>Iam hungry</h3>
  // }

  return (
    <>
      <h1>Non-veg Items</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
};

export default App;
