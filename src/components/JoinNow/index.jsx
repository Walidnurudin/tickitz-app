import React from "react";
import "./index.css";

function JoinNow() {
  return (
    <>
      <div className="container">
        <div className="join__now">
          <div className="join__now--title">
            <span className="mulish-400 join__now--satu">Be the vanguard of the</span>
            <span className="mulish-700 text-primary join__now--dua">Moviegoers</span>
          </div>

          <div className="join__now--form">
            <input
              type="email"
              placeholder="Type your email"
              className="join__now--input mulish-600"
            />
            <button className="btn btn-primary join__now--btn mt-3 m-md-0">join now</button>
          </div>

          <div className="join__now--desc">
            <span className="mulish-400 text-secondary">
              By joining you as a Tickitz member,
              <br />
              we will always send you the latest updates via email .
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinNow;
