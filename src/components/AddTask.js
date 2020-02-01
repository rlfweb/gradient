import React from "react";
import "../App.css";

class AddTask extends React.Component {
  state = {
    taskDescription: "Task to do"
  };

  addTask = () => {
    this.props.addTaskFunc(this.state.taskDescription);
  };

  taskDescriptionChanged = event => {
    this.setState({
      taskDescription: event.target.value
    });
 };

  render() {
    return (
      <div className="row addTaskColour">
        {/* This is the input field for a new task description */}
        <div className="col-10 newTaskTitle">
          <input
            type="text"
            className="form-control"
            placeholder="Add new task ..."
            onChange={this.taskDescriptionChanged}
          />
        </div>
        {/* This is the button for adding a new task */}
        <div className="col-2 input-group-append">
          <button
            type="button"
            className="btn btn-secondary btn-xs"
            onClick={this.addTask}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default AddTask;
