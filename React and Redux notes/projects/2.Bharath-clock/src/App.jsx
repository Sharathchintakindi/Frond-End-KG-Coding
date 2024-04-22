import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClcockSlogan";
import ClockTimeSlot from "./components/CurrentTimeSlot";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <ClockTimeSlot />
    </center>
  );
}

export default App;
