import React from "react";
import "../App.css";

class TaskCount extends React.Component {
  render() {
    return (
      <div className="listTitleBar row col-12 col-md-6 col-lg-4">
        <div className="col-10 listTitle">WORK</div>
        <div className="col-2 taskCount">{this.props.taskCount}</div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default TaskCount;
