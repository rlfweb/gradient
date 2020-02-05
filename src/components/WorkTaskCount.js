import React from "react";
import "../App.css";

class WorkTaskCount extends React.Component {
  render() {
    return (
      
      <div className="listTitleBar row col-12">
        <div className="col-10 listTitle">WORK</div>
        <div className="col-2 taskCount">{this.props.workTaskCount}</div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default WorkTaskCount;
