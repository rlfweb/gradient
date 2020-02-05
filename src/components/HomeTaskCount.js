import React from "react";
import "../App.css";

class HomeTaskCount extends React.Component {
  render() {
    return (
      
      <div className="listTitleBar row col-12">
        <div className="col-10 listTitle">HOME</div>
        <div className="col-2 taskCount">{this.props.homeTaskCount}</div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default HomeTaskCount;
