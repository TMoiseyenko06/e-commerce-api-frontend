import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import NavBar from "./NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
