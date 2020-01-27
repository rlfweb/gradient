import React from "react";
import "../Tasks.css";
import Pen from "./pen.png";
import Delete from "./delete.png";

class Tasks extends React.Component {
  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.id);
  };

  doneClicked = () => {
    this.props.completedTaskFunc(this.props.item.id);
  };

  render() {
    // description empty by default
    let description;

    // this is saying, if the item is completed ...
    if (this.props.item.completed) {
      // ... I want it to be a div and it will look like this - with strikethrough
      description = (
        <div className="col-12 col-md-8 completedTask">
          {this.props.item.description}
        </div>
      );
      // if the item isn't completed ...
    } else {
      // ... it will look like this
      description = (
        <div className="col-12 col-md-8">{this.props.item.description}</div>
      );
    }

    return (
      <div className="container wallpaper">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 taskBox">
            <div className="col-12">
              <div className="row taskButtons">
                <div className="col-12 col-md-8 taskText">
                {description}
                </div>

                <div className="btn-group col-6 col-md-2">
                  {!this.props.item.completed && (
                    <button
                      type="button"
                      className="btn btn-secondary btn-xs"
                      onClick={this.doneClicked}>
                      <img src={Pen} alt="edit" />
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-secondary btn-xs"
                    onClick={this.deleteClicked}
                  >
                    <img src={Delete} alt="delete" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default Tasks;
