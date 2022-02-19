import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [registerData, setRegisterData] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("here", registerData);
    axios
      .post("http://localhost:2345/register", registerData)
      .then((response) => {
        alert("Registered Successfully");
        // console.log(response)
        navigate("/login");
      })
      .catch((e) => {
        alert("Something went wrong! Try Again!!");
        console.log(e);
      });
  };
  return (
    <div className="register">
      <h1>Register here!</h1>
      <form>
        <input
          name="firstname"
          placeholder="enter first name"
          onChange={handleChange}
        />
        <input
          name="lastname"
          placeholder="enter last name"
          onChange={handleChange}
        />
        <input
          name="gender"
          placeholder="enter gender"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="enter password"
          onChange={handleChange}
        />
        <input name="email" placeholder="enter email" onChange={handleChange} />
        <input
          name="username"
          placeholder="enter username"
          onChange={handleChange}
        />
        <input
          name="profile_pic"
          placeholder="enter profile pic url"
          onChange={handleChange}
        />
        <input
          name="role"
          placeholder="enter you role"
          onChange={handleChange}
        />
      </form>
        <button type="primary" onClick={handleClick}>
          Register
        </button>
        <div>
          <span>Already Registered ?? </span>{" "}
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
    </div>
  );
}

export default Register;
