import React, { useEffect } from "react";
import "./index.css";
import { useHistory, withRouter } from "react-router-dom";

function NavbarProfile(props) {
  const history = useHistory();

  const linkActive = (path) => {
    return props.location.pathname === path ? "isActive__profile--link" : "";
  };

  const handleProfile = () => {
    history.push("/profile");
  };

  const handleOrderHistory = () => {
    history.push("/order-history");
  };

  return (
    <>
      <div className="profile__form--navigate">
        <div
          className={`mulish-400 profile__form--navigate--link ${linkActive("/profile")}`}
          onClick={handleProfile}
        >
          Account Settings
        </div>
        <div
          className={`mulish-400 profile__form--navigate--link ${linkActive("/order-history")}`}
          onClick={handleOrderHistory}
        >
          Order History
        </div>
      </div>
    </>
  );
}

export default withRouter(NavbarProfile);
