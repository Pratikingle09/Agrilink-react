import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import '../../App.css'
import About from "../../components/home/About";
import Contact from "../../components/home/Contact";
import Feature from "../../components/home/Feature";
import notificationImg from '../../assets/icon/notification.png'
import storeImg from '../../assets/icon/store.png'
import streamImg from '../../assets/icon/stream.png'



function Home() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/auth");
  };
  return (
    <>
      {user.isLogin && <Navbar />}
      <div className="body" style={{ top: 0, position: "absolute" }}>
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="container">
              <div className="inner cover">
                <h1 className="cover-heading">Welcome To AgriLink</h1>
                <p className="lead">
                  AgriLink is a revolutionary platform dedicated to transforming
                  agriculture for a sustainable tomorrow. It serves as a dynamic
                  hub where farmers, students, sellers, and companies converge
                  to foster innovation and growth in the agricultural sector.
                </p>
                <p className="lead">
                  <a href="#about">
                  <button
                      onClick={handleOnClick}
                      className="btn   link reg"
                    >
                       Learn more
                    </button>
                  </a>
                  {!user.isLogin && (
                    <button
                      onClick={handleOnClick}
                      className="btn   link reg"
                    >
                      Register
                    </button>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="feature-head">Features</h2>
        <div className="features" style={{display:'flex',justifyContent:'space-evenly',paddingTop:'70px'}}>
          <Feature title={"Notification"} path={'/notification'} icon={notificationImg}/>
          <Feature title={"Live Feed"} path={'/feed'} icon={streamImg}/>
          <Feature title={"Online Store"} path={'/shop'} icon={storeImg}/>
        </div>

        <div className="about" id="about">
          <About />
        </div>

        <div className="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}
export default Home;
