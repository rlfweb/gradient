import React from 'react';
import '../AddTask.css';


class AddTask extends React.Component {

addTask = () => {
  this.props.addTaskFunc("Pick up the shopping")
}

  render() {
    return (



      <div class="container">

        <body className="wallpaper">

          <div className="row headerColour">

            <div className="col-12 newTaskTitle">
              Click to add task
              <button type="button" className="btn btn-secondary btn-xs"  onClick={this.addTask}>
                    +
                  </button>
            </div>

          </div>
        </body>

      </div>


    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default AddTask;
