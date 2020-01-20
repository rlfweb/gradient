import React from 'react';
import '../TaskCount.css';

class TaskCount extends React.Component {

  render() {
    return (



      <div className="container wallpaper">


        <div className="row headLine">
          <div className="col-12 col-md-6 col-lg-3 labelLine">
            <div className="col-12 red">
              <div className="row">
                <div className="col-10 listTitle">
                  WORK
                </div>

                <div className="col-2 taskCount">
                  {this.props.taskCount}
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
