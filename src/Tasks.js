import React from 'react';

import './Tasks.css';

class Tasks extends React.Component {

    render() {
        return (



            <div className="container wallpaper">


                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 taskBoxesTitle">
                        <div className="col-12">
                            <div className="row taskBoxesNow">
                                <div className="col-8 listTitle">
                                    WORK
                                </div>

                                <div className="col-2 noOfTasksRemaining">
                                    [6]
                                </div>

                                <div className="col-2">
                                    <span className="badge badge-dark">+</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 priorityHeading">
                            Add task here
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default Tasks;
