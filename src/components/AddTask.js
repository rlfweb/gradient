import React from 'react';
import '../AddTask.css';


class AddTask extends React.Component {

state = {
  taskDescription: "To do ..."
}


addTask = () => {
  this.props.addTaskFunc(this.state.taskDescription);
}

taskDescriptionChanged = (event) => {
  this.setState({
    taskDescription: event.target.value
  });
}

  render() {
    return (



      <div className="container">

        <body className="wallpaper">

          <div className="row headerColour">

            <div className="col-12 newTaskTitle">
              <input 
              type="text"
              className="form-control"
              placeholder="Add task here ..."
              onChange={this.taskDescriptionChanged}
               />
               <div className = "input-group-append">
               <button type="button" className="btn btn-secondary btn-xs"  onClick={this.addTask}>
                    +
                  </button>
               </div>
            
            </div>

          </div>
        </body>

      </div>


    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default AddTask;
