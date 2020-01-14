import React from 'react';
import '../AddTask.css';


class AddTask extends React.Component {

  render() {
    return (



      <div class="container">

        <body className="wallpaper">

          <div className="row headerColour">

            <div className="col-12 newTaskTitle">
              Click to add task  
              <span className="badge badge-dark">+</span>
            </div>
            
          </div>
        </body>

      </div>


    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default AddTask;
