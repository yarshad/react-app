import "./App.css";
import Searchbar from "./assets/components/Searchbar";
import Home from "./assets/components/Home";
import Login from "./assets/components/Login";
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Home />
      <br />
      <Searchbar />
    </>
  );
}

export default App;
