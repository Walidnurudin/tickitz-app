import React from "react";
import {
  tickitz2,
  ebvid,
  cineone21,
  hiflix,
  fbIcon,
  igIcon,
  twIcon,
  ytIcon
} from "../../assets/img";

export default function Footer() {
  return (
    <footer style={{ padding: "108px 0px 47px 0px" }}>
      <div className="container">
        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-12 col-md-5">
            <img src={tickitz2} alt="logo tickitz" width="170" className="d-block" />
            <span
              className="mulish-400 text-secondary d-block"
              style={{ fontSize: "16px", marginTop: "30px", letterSpacing: "0.75px" }}
            >
              Stop waiting in line. Buy tickets
              <br />
              conveniently, watch movies quietly.
            </span>
          </div>
          <div className="col-12 col-md-2" style={{ marginBottom: "14px" }}>
            <h6 className="mulish-700 mt-5 mt-md-0" style={{ marginBottom: "30px" }}>
              Explore
            </h6>
            <div className="d-flex flex-wrap flex-md-column">
              <span
                style={{ marginBottom: "14px" }}
                className="text-secondary mulish-400 me-5 me-md-0"
              >
                Cinemas
              </span>
              <span
                style={{ marginBottom: "14px" }}
                className="text-secondary mulish-400 me-5 me-md-0"
              >
                Movies List
              </span>
              <span
                style={{ marginBottom: "14px" }}
                className="text-secondary mulish-400 me-5 me-md-0"
              >
                My Ticket
              </span>
              <span
                style={{ marginBottom: "14px" }}
                className="text-secondary mulish-400 me-5 me-md-0"
              >
                Notification
              </span>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <h6 className="mulish-700 mt-5 mt-md-0" style={{ marginBottom: "30px" }}>
              Our Sponsor
            </h6>
            <div className="d-flex flex-wrap d-md-block">
              <img
                src={ebvid}
                alt="logo ebv.id"
                height="45px"
                className="d-block me-3 me-md-0"
                style={{ marginBottom: "25px" }}
              />
              <img
                src={cineone21}
                alt="logo cineone21"
                height="27px"
                className="d-block me-3 me-md-0 align-self-center"
                style={{ marginBottom: "25px" }}
              />
              <img
                src={hiflix}
                alt="logo hiflix"
                height="25px"
                className="d-block me-3 me-md-0 align-self-center"
                style={{ marginBottom: "25px" }}
              />
            </div>
          </div>
          <div className="col-12 col-md-2">
            <h6 className="mulish-700 mt-5 mt-md-0" style={{ marginBottom: "30px" }}>
              Follow Us
            </h6>
            <div className="d-flex gap-5 d-md-block">
              <div style={{ marginBottom: "29px" }}>
                <img src={fbIcon} alt="logo" width="24px" />
                <span
                  className="mulish-600 text-secondary d-none d-md-inline-block"
                  style={{ marginLeft: "22px" }}
                >
                  Tickitz Cinema id
                </span>
              </div>
              <div style={{ marginBottom: "29px" }}>
                <img src={igIcon} alt="logo" width="24px" />
                <span
                  className="mulish-600 text-secondary d-none d-md-inline-block"
                  style={{ marginLeft: "22px" }}
                >
                  tickitz.id
                </span>
              </div>
              <div style={{ marginBottom: "29px" }}>
                <img src={twIcon} alt="logo" width="24px" />
                <span
                  className="mulish-600 text-secondary d-none d-md-inline-block"
                  style={{ marginLeft: "22px" }}
                >
                  tickitz.id
                </span>
              </div>
              <div style={{ marginBottom: "29px" }}>
                <img src={ytIcon} alt="logo" width="24px" />
                <span
                  className="mulish-600 text-secondary d-none d-md-inline-block"
                  style={{ marginLeft: "22px" }}
                >
                  Tickitz Cinema id
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="d-md-flex justify-content-center">
          <span className="mulish-400 text-secondary">© 2020 Tickitz. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
