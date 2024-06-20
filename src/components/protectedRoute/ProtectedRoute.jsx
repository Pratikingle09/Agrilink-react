import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccessDenied from "../../pages/Error/AuthenticationHandling/AccessDenied";

function ProtectedRoute(prop) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { Component } = prop;

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('profile'))
        setIsLoggedIn(user.isLogin)
  }, []);
  return <div>{isLoggedIn ? <Component /> : <AccessDenied/>}</div>;
}

export default ProtectedRoute;
