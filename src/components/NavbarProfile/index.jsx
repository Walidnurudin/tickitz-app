import React from "react";
import "./index.css";

function NavbarProfile({ isOrderComponent, handleProfile, handleOrderHistory }) {
  return (
    <>
      <div className="profile__form--navigate">
        <div
          className={`mulish-400 profile__form--navigate--link ${
            !isOrderComponent ? "isActive__profile--link" : ""
          }`}
          onClick={handleProfile}
        >
          Account Settings
        </div>
        <div
          className={`mulish-400 profile__form--navigate--link ${
            isOrderComponent ? "isActive__profile--link" : ""
          }`}
          onClick={handleOrderHistory}
        >
          Order History
        </div>
      </div>
    </>
  );
}

export default NavbarProfile;
