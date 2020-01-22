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
    return (
      <div className="container wallpaper">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 taskBox">
            <div className="col-12">
              <div className="row taskButtons">
                <div className="col-12 col-md-8 taskText">
                  {this.props.item.description}
                </div>

                <div className="btn-group col-6 col-md-2">
                  <button
                    type="button"
                    className="btn btn-secondary btn-xs"
                    onClick={this.doneClicked}
                  >
                    <img src={Pen} alt="edit" />
                  </button>
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