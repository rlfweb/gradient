import React from "react";
import "../App.css";
import Checked from "./checked.png";
import Cross from "./cross-light.png";

class WorkTasks extends React.Component {
  
  deleteWorkClicked = () => {
    this.props.deleteWorkTaskFunc(this.props.workItem.id);
  };

  doneClicked = () => {
    this.props.completedWorkTaskFunc(this.props.workItem.id);
  };

  render() {
    // description empty by default
    let description;

    // this is saying, if the item is completed ...
    if (this.props.workItem.completed) {
      // ... I want it to be a div and it will look like this - with strikethrough
      description = (
        <div className="col-12 col-md-8 completedTask">
          {this.props.workItem.description}
        </div>
      );
      // if the item isn't completed ...
    } else {
      // ... it will look like this
      description = (
        <div className="col-12 col-md-8">{this.props.workItem.description}</div>
      );
    }

    return (
      <div className="row col-12 col-md-6 col-lg-6 taskBox">
        {/* This is for the task description text */}
        <div className="col-12 col-md-8 taskText">{description}</div>
        {/* This is for the buttons to be grouped together as a pair */}
        <div className="btn-group col-6 col-md-2">
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
