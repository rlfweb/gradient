import React from "react";
import "../App.css";

class WorkTaskCount extends React.Component {
  render() {
    return (
      
      <div className="listTitleBar row col-12 col-md-12 col-lg-12">
        <div className="col-8 workListTitle">WORK</div>
        <div className="col-4 workTaskCount">{this.props.workTaskCount}</div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default WorkTaskCount;
