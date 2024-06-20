import React, { useState, useEffect } from 'react';

import farmerImg from "../../assets/icon/farmer.png";
import studentImg from "../../assets/icon/student.png";
import sellerImg from "../../assets/icon/seller.png";
import edit from "../../assets/icon/pen.png";

function ProfileCompo() {
  const [profileImage, setProfileImage] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    if (user && user.profile_image) {
      setProfileImage(user.profile_image);
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const ImgString = reader.result;
        
        // Update the user object with the new profile image
        const updatedUser = {
          ...user,
          profile_image: ImgString,
        };

        // Save the updated user object in localStorage
        localStorage.setItem('profile', JSON.stringify(updatedUser));

        // Update the state
        setUser(updatedUser);
        setProfileImage(ImgString);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div className="edit-profile"></div>
      <div className="profile-data">
        <button to="/edit_user_registration">
          <img src={edit} className="edit-p" alt="Edit Profile" />
        </button>
        <div className="profile-image">
          {profileImage ? (
            <img src={profileImage} className="product_image" alt="Profile" />
          ) : (
            <>
              {user.account_type === 'farmer' && <img src={farmerImg} className="product_image" alt="Farmer" />}
              {user.account_type === 'student' && <img src={studentImg} className="product_image" alt="Student" />}
              {user.account_type === 'seller' && <img src={sellerImg} className="product_image" alt="Seller" />}
            </>
          )}
        </div>
        <div className="update-profile">
          <div className="field">
            <input 
              type="file" 
              name="image" 
              className="input i-f" 
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="profile-info">
          <h3>Username</h3>
          <p>{user.username}</p>
          <h3>Email address</h3>
          <p>{user.email}</p>
          <h3>Phone Number</h3>
          <p>{user.mobile}</p>
          <h3>Account Type</h3>
          <p>{user.account_type}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCompo;
