import React, { Component } from "react";
import "./index.css";
import axios from "../../../utils/axios";
import { noImage, menuProfileIcon } from "../../../assets/img";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {}
    };
  }

  checkToken = () => {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  };

  componentDidMount() {
    this.checkToken();
    this.getDataUser();
  }

  getDataUser = () => {
    axios
      .get("/user")
      .then((res) => {
        this.setState({
          dataUser: res.data.data[0]
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { dataUser } = this.state;
    return (
      <>
        <Navbar
          imageProfile={
            dataUser.image ? `${process.env.REACT_APP_API}uploads/user/${dataUser.image}` : noImage
          }
        />
        <div className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3 profile__page">
                <div className="profile__info mulish-400 text-secondary">
                  <div className="profile__info--header">
                    <span>INFO</span>
                    <img src={menuProfileIcon} alt="menu" width="28px" />
                  </div>

                  <div className="profile__info--name">
                    <img
                      src={
                        dataUser.image
                          ? `${process.env.REACT_APP_API}uploads/user/${dataUser.image}`
                          : noImage
                      }
                      alt="profile"
                      width="136px"
                    />
                    <h6 className="mulish-600">Walid</h6>
                    <span className="mulish-400">user</span>
                  </div>

                  <hr />

                  <div className="profile__info--point">
                    <h6>Loyalty Points</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9 profile__page">
                <div className="profile__form">1</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Profile;
