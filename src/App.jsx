import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Homepage from "./pages/Homepage";
import PrimarySearchAppBar from "./Components/Header";

function App() {
  return (
    <>
      <div>
        <PrimarySearchAppBar />
        <Homepage />
      </div>
    </>
  );
}

export default App;
