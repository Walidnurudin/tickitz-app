import React from "react";
import "./index.css";
import { menuProfileIcon, noImage } from "../../assets/img";

function ProfileCard({ image, firstName, lastName, role }) {
  return (
    <>
      <div className="profile__info mulish-400 text-secondary">
        <div className="profile__info--header">
          <span>INFO</span>
          <img src={menuProfileIcon} alt="menu" width="28px" />
        </div>

        <div className="profile__info--name">
          <img
            src={image ? `${process.env.REACT_APP_API}uploads/user/${image}` : noImage}
            alt="profile"
            width="136px"
          />
          <h6 className="mulish-600">
            {firstName} {lastName}
          </h6>
          <span className="mulish-400">{role}</span>
        </div>

        <hr />

        <div className="profile__info--point">
          <h6>Loyalty Points</h6>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
