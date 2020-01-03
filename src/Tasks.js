import React from 'react';

import './Tasks.css';

class Tasks extends React.Component {

    render() {
        return (



            <div className="container wallpaper">


                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 taskBoxes">
                        <div className="col-12">
                            <div className="row">
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
                            NOW
                    <div className="col-12 taskText">
                                Bootstrap homework
                    </div>
                        </div>
                        <div className="col-12 priorityHeading">
                            NEXT
                    <div className="col-12 taskText">
                                Review James' notes
                    </div>
                            <div className="col-12 taskText">
                                Do rest of JavaScript on Codeacademy
                            </div>
                            <div className="col-12 taskText">
                                JavaScript Codewars
                            </div>
                        </div>
                        <div className="col-12 priorityHeading">
                            SOON
                    <div className="col-12 taskText">
                                Back end programming
                    </div>
                        </div>
                        <div className="col-12 priorityHeading">
                            COMPLETED
                    <div className="col-12 taskText">
                                CSS
                    </div>
                            <div className="col-12 taskText">
                                HTML
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
