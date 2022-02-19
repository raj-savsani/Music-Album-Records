import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        {/* <Route path="/" element={<h1>Home</h1>}></Route> */}
        
       <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        {/* <Route path="/register" element={<Register />}></Route>  */}
        
      </Routes>

    </div>
  );
}

export default App;
