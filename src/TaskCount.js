import React from 'react';

import './TaskCount.css';

class TaskCount extends React.Component {

  render() {
    return (



      <div className="container wallpaper">


        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="col-12">
              <div className="row">
                <div className="col-10 listTitle">
                  WORK
                </div>

                <div className="col-2 taskCount">
                  6
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
export default TaskCount;
