import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

let App = () => {
  //let foodItems = [];

  let foodItems = ["Chicken", "Crab", "Mutton", "Prawn", "Keema"];

  let textToShow = "Food Item Entered by User";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };

  //let emptyMessage = foodItems.length === 0 ? <h3>Iam hungry</h3> : null;
  // if (foodItems.length ===0){
  //   return <h3>Iam hungry</h3>
  // }

  return (
    <>
      <Container>
        <h1 className="Food-Heading">Non-veg Items</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnChange={handleOnChange} />
        <p>{textToShow}</p>
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>
          Here, Are the list of Items that are cooked in the Restuarnt for food
        </p>
      </Container> */}
    </>
  );
};

export default App;

