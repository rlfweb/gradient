import React from "react";
import "../App.css";

class AddWorkTask extends React.Component {
  state = {
    taskDescription: "Work task to do"
  };

  addWorkTask = () => {
    this.props.addWorkTaskFunc(this.state.workTaskDescription);
  };

  workTaskDescriptionChanged = event => {
    this.setState({
      workTaskDescription: event.target.value
    });
  };

  render() {
    return (
      <div className="row addTaskColour">
        <div className="col-6">
          {/* This is the input field for a new task description */}
          <div className="col-10 newTaskTitle">
            <input
              type="text"
              className="form-control"
              placeholder="Add new work task ..."
              onChange={this.workTaskDescriptionChanged}
            />
          </div>
          {/* This is the button for adding a new task */}
          <div className="col-2 input-group-append">
            <button
              type="button"
              className="btn btn-secondary btn-xs"
              onClick={this.addWorkTask}>
              +
            </button>
          </div>
        </div>
        <div className="col-6">THE HOME ONE HERE</div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default AddWorkTask;
