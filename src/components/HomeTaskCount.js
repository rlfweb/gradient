import React from "react";
import "../App.css";

class HomeTaskCount extends React.Component {
  render() {
    return (
      
      <div className="listTitleBar row col-12 col-md-12 col-lg-12">
        <div className="col-8 homeListTitle">HOME</div>
        <div className="col-4 homeTaskCount">{this.props.homeTaskCount}</div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default HomeTaskCount;
