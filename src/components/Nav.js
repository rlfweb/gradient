import React from "react";
import "../Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row headColour">
          <div className="logo col-12 col-md-4">GRADIENT</div>

          <div className="date col-12 col-md-4 text-lg-center">
            Tuesday 14 January 2020
          </div>

          <div className="signInAndGreeting col-12 col-md-4 text-lg-right">
            Log in / Sign up / Hello [Susan]
          </div>
        </div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default Nav;
