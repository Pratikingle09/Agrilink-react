import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import Style from "./auth.module.css";
import farmerImg from "../../assets/icon/farmer.png";
import studentImg from "../../assets/icon/student.png";
import sellerImg from "../../assets/icon/seller.png";


function Register(setRegistere) {
  const [profile, setProfile] = useState({
    id: Date.now(),
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPass: "",
    account_type: "",
    isLogin:true,
    profile_image:''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    if (
      !profile.username ||
      !profile.email ||
      !profile.mobile ||
      !profile.password ||
      !profile.confirmPass ||
      !profile.account_type
    ) {
      alert("All fields are required");
      return;
    }

    if (profile.password === profile.confirmPass) {
      const { confirmPass, ...profileToSave } = profile;

      localStorage.setItem("profile", JSON.stringify(profileToSave));
      alert("Profile saved successfully!");
      navigate("/");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className={Style.register_container}>
      <h1>Register</h1>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          className={Style.input}
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className={Style.input}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          className={Style.input}
          placeholder="Mobile"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className={Style.input}
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPass"
          className={Style.input}
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        <select
          onChange={handleChange}
          name="account_type"
          value={profile.account_type}
          required
        >
          <option value="">Select an account type</option>
          <option value="student">Student</option>
          <option value="farmer">Farmer</option>
          <option value="seller">Seller</option>
        </select>
        <div className={Style.check}>
          <input type="checkbox" required />
          <p>
            By creating an account, I agree to our terms of use and privacy
            policy
          </p>
        </div>
        <button onClick={handleOnClick} className={Style.submit}>
          Registere
        </button>
      </form>
    </div>
  );
}

export default Register;
