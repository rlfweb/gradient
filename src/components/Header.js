import React from "react";
import "../App.css";
import moment from "moment";

class Header extends React.Component {

    constructor(props) {super(props);
        this.state = {
         currentDate: new Date(),
         markedDate: moment(new Date()).format("YYYY-MM-DD")
        };
       }

  render() {
   
//      const today = this.state.currentDate;
//  const day = moment(today).format("dddd");
//  const date = moment(today).format("MMMM D, YYYY");
return (
            <div className="row headerColour">
        <div className="signInAndGreeting col-12 col-md-4">
          Log in / Sign up / Hello [Susan]
        </div>

        <div className="date col-12 col-md-4 text-lg-center">
        const today = this.state.currentDate;
const day = moment(today).format(“dddd”);
const date = moment(today).format(“MMMM D, YYYY”);
          </div>
        <div className="searchBar col-12 col-md-4 text-lg-right">SEARCH</div>
      
      <div className="headerColour col-12 todoTitle">
      Susan's To Do Lists
    </div>
    </div>
    );
  }
}


// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default Header;
