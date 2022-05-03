import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/login";
import Register from "./screens/signup";
import Home from "./screens/home";
import Actualhome from "./screens/Actualhome";
import Chasebank from "./screens/chasebank";
import Addfunds from "./screens/Addfunds";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Login />} />
          <Route path="/signup" exact={true} element={<Register />} />
          <Route path="/home" exact={true} element={<Actualhome />} />
          <Route path="/chasebanklogs" exact={true} element={<Chasebank />} />
          <Route path="/addfunds" exact={true} element={<Addfunds />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
