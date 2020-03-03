import React from "react";
import "../App.css";
import moment from "moment";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      markedDate: moment(new Date()).format("DD-MM_YYYY")
    };
  }

  render() {
    const day = moment().format("dddd");
    const date = moment().format("D MMMM YYYY");

    return (
      <div className="row headerColour">
        <div className="signInAndGreeting col-12 col-md-4">
          Log in / Sign up / Hello [Name]
        </div>

        <div className="date col-12 col-md-4 text-lg-center">
          {day} {date}
        </div>

        <div className="searchBar col-12 col-md-4 text-lg-right">
          <input type="text" className="input" placeholder="[Search...]" />
        </div>

        <div className="headerColour col-12 todoTitle">[Name]'s To Do Lists</div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default Header;
