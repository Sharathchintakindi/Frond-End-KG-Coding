import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

let App = () => {
  //let foodItems = [];
   let foodItems = ["Chicken", "Egg", "Mutton", "Prawns"];
  let emptyMessage = foodItems.length === 0 ? <h3>Iam hungry</h3> : null; // if (foodItems.length ===0){
  //   return <h3>Iam hungry</h3>
  // }

  return (
    <>
      <h1>Non-veg Items</h1>
      {emptyMessage}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
