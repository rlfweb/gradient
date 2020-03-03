import React from "react";
import "../App.css";
import Checked from "./checked.png";
import Cross from "./cross.png";

class WorkTasks extends React.Component {
  
  deleteWorkClicked = () => {
    this.props.deleteWorkTaskFunc(this.props.workItem.taskId);
  };

  doneClicked = () => {
    this.props.completedWorkTaskFunc(this.props.workItem.taskId);
  };

  render() {
    // description empty by default
    let taskDescription;

    // this is saying, if the item is completed ...
    if (this.props.workItem.completed) {
      // ... I want it to be a div and it will look like this - with strikethrough
      taskDescription = (
        <div className="col-12 col-md-8 completedTask">
          {this.props.workItem.taskDescription}
        </div>
      );
      // if the item isn't completed ...
    } else {
      // ... it will look like this
      taskDescription = (
        <div className="col-12 col-md-8">{this.props.workItem.taskDescription}</div>
      );
    }

    return (
      <div className="row col-12 taskBox">
        {/* This is for the task description text */}
        <div className="col-12 col-lg-9 taskText">{taskDescription}</div>
        {/* This is for the buttons to be grouped together as a pair */}
        <div className="col-12 col-lg-3">
          {/* This is for the button that is clicked when task is completed */}
          {!this.props.workItem.completed && (
            <button
              type="button"
              className="btn btn-secondary btn-xs"
              onClick={this.doneClicked}
            >
              <img src={Checked} alt="completed" />
            </button>
          )}

          {/* This is for the delete button */}
          <button
            type="button"
            className="btn btn-secondary btn-xs"
            onClick={this.deleteWorkClicked}
          >
            <img src={Cross} alt="delete" />
          </button>
        </div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default WorkTasks;
