// import { useHistory } from "react-router-dom";
import "./App.css";
// import { Register } from "./components/register";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/add";

function App() {
  return (
    // <Register />
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path={"/Home"} element={<Home />}></Route>
        <Route path={"/"} element={<Register />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/addflat"} element={<Add />}></Route>
      </Routes>
    </div>
  );
}

export default App;
