import React from "react";
import "../App.css";
import plus from "./plus.png";

class AddHomeTask extends React.Component {
  state = {
    taskDescription: "Home task to do"
  };

  addHomeTask = () => {
    this.props.addHomeTaskFunc(this.state.homeTaskDescription);
  };

  homeTaskDescriptionChanged = event => {
    this.setState({
      homeTaskDescription: event.target.value
    });
  };

  render() {
    return (
      <div className="row addTaskColour col-12">
          {/* This is the input field for a new task description */}
          <div className="col-10 newTaskTitle">
            <input
              type="text"
              className="form-control"
              placeholder="Add new home task ..."
              onChange={this.homeTaskDescriptionChanged}
            />
          </div>
          {/* This is the button for adding a new task */}
          <div className="col-2 input-group-append">
            <button
              type="button"
              className="btn btn-secondary btn-xs"
              onClick={this.addHomeTask}>
              <img src={plus} alt="add" />
            </button>
          </div>
        </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default AddHomeTask;
