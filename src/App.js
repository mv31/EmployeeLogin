import "./App.css";
// import {BrowseRouter as Router,Routes,Route,Switch,Link} from ;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import EmployeeDetail from "./components/EmployeeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile auth={true} />} />
        {/* <Route path="/employeeDetails" element={<EmployeeDetail  />} /> */}

      </Routes>
    </Router>

    // <div className="App">
    //   <h1>React app</h1>
    //   <Login/>
    // </div>
  );
}

export default App;
