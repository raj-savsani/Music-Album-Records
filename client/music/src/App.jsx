import { Routes, Route } from "react-router-dom";
import './App.css';
import Album from "./components/Album";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        
       <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="/register" element={<Register />}></Route> 
        <Route path="album/:name" element={<Album />}></Route>
      </Routes>

    </div>
  );
}

export default App;
