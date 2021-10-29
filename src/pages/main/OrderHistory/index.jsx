import React, { useState, useEffect } from "react";
import { noImage } from "../../../assets/img";
import axios from "../../../utils/axios";
import {
  Navbar,
  Footer,
  TicketOrderHistory,
  ProfileCard,
  NavbarProfile
} from "../../../components";

function OrderHistory(props) {
  const [dataUser, setDataUser] = useState({});

  const getDataUser = () => {
    axios
      .get("/user")
      .then((res) => {
        setDataUser(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      <Navbar
        imageProfile={
          dataUser.image ? `${process.env.REACT_APP_LOCAL}uploads/user/${dataUser.image}` : noImage
        }
      />

      <div className="bg-light">
        <div className="container">
          <div className="row">
            {/* INFO */}
            <div className="col-12 col-md-3 profile__page">
              <ProfileCard
                image={dataUser.image}
                firstName={dataUser.firstName}
                lastName={dataUser.lastName}
                role={dataUser.role}
              />
            </div>

            {/* FORM */}
            <div className="col-12 col-md-9 profile__page">
              <div className="profile__form">
                <NavbarProfile />

                <TicketOrderHistory />
                <TicketOrderHistory />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OrderHistory;
