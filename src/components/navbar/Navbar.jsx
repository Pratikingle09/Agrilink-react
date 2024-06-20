import { React, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/image/Logo.png";
import farmerImg from "../../assets/icon/farmer.png";
import studentImg from "../../assets/icon/student.png";
import sellerImg from "../../assets/icon/seller.png";
import shopingCart from "../../assets/icon/shopping-cart.png";

function Navbar() {
  const [profileImage, setProfileImage] = useState(null);
  const [profileOpt, setProfileOpt] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const notification = JSON.parse(localStorage.getItem("notification"));
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  const handleLogout = () => {
    user.isLogin=false
    localStorage.setItem('profile',JSON.stringify(user))
    navigate('/')
  };

  const profileForAccount = () => {
    if (user.profile_image)
      {
        return (<img src={user.profile_image} alt="Profile Image" className="profile p-i" />)
      }
    if (user.account_type == "student") {
      return (
        <img src={studentImg} alt="Profile Image" className="profile p-i" />
      );
    }
    if (user.account_type == "farmer") {
      return (
        <img src={farmerImg} alt="Profile Image" className="profile p-i" />
      );
    }
    if (user.account_type == "seller") {
      return (
        <img src={sellerImg} alt="Profile Image" className="profile p-i" />
      );
    }
  };
  return (
    <nav className="nav">
      <img
        src={logo}
        alt="logo"
        className="logo1"
        onClick={() => navigate("/")}
      />
      <div className="nav-cont">
        <NavLink to="/" className="nav-item" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/dashboard" className="nav-item" activeclassname="active">
          Dashboard
        </NavLink>
        <NavLink to="/shop" className="nav-item" activeclassname="active">
          Shop
        </NavLink>
        <NavLink to="/feed" className="nav-item" activeclassname="active">
          Feed
        </NavLink>
        <NavLink
          to="/notification"
          className="nav-item notif"
          activeclassname="active"
        >
      <i className  ="fa fa-bell" style={{fontSize:'25px'}}></i>
      <span className="notification-count">{notification.length || 0}</span>
        </NavLink>
      </div>

      <div className="sub-nav">
        <NavLink to='/cart' className='notif'>
          <img src={shopingCart} alt="Cart" className="nav-cart" /> <span className="notification-count" style={{color:'white',left:'50px',fontSize:'18px'}}>{cartItems?.length || 0}</span>
        </NavLink>
        <div
          id="profile-btn"
          onClick={() => setProfileOpt(!profileOpt)}
          style={{ cursor: "pointer" }}
        >
          {profileForAccount()}
        </div>
        <div id="profile-option" style={{ display: profileOpt && "none" }}>
          <div className="profile-items">
            <NavLink to="/profile" className="mobile-nav-item">
              Profile
            </NavLink>
            <NavLink to="/activities" className="mobile-nav-item">
              Activities
            </NavLink>
          </div>
        </div>
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
