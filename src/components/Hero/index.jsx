import React from "react";
import "./index.css";
import { hero } from "../../assets/img";

function Hero() {
  return (
    <>
      <section className="container">
        <div className="row hero__home">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h6 className="mulish-400 text-secondary">Nearest Cinema, Newest Movie,</h6>
            <h1 className="mulish-700 text-primary">Find out now!</h1>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center mt-5 mt-md-0">
            <img src={hero} alt="hero image" width="370px" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
