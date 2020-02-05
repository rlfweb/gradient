import React from "react";
import "../App.css";

class TaskCount extends React.Component {
  render() {
    return (
      
      <div className="listTitleBar row col-12 col-md-6 col-lg-6">
        <div className="col-8 listTitle">Tasks Remaining:</div>
        <div className="col-4 taskCount">{this.props.taskCount}</div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default TaskCount;
