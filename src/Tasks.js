import React from 'react';

class Tasks extends React.Component {

  render() {
    return (



      <div class="container">

        
<div class="row">
            <div class="col-12 col-md-6 col-lg-3 taskBoxes">
                <div class="col-12">
                    <div class="row">
                        <div class="col-8 listTitle">
                            WORK
                        </div>
                        
                        <div class="col-2 noOfTasksRemaining">
                            [6]
                        </div>
                        
                        <div class="col-2">
                            <span class="badge badge-dark">+</span>
                        </div>
                    </div>

                </div>
                <div class="col-12 priorityHeading">
                    NOW
                    <div class="col-12 taskText">
                        Bootstrap homework
                    </div>
                </div>
                <div class="col-12 priorityHeading">
                    NEXT
                    <div class="col-12 taskText">
                        Review James' notes
                    </div>
                    <div class="col-12 taskText">
                        Do rest of JavaScript on Codeacademy
                    </div>
                    <div class="col-12 taskText">
                        JavaScript Codewars
                    </div>
                </div>
                <div class="col-12 priorityHeading">
                    SOON
                    <div class="col-12 taskText">
                        Back end programming
                    </div>
                </div>
                <div class="col-12 priorityHeading">
                    COMPLETED
                    <div class="col-12 taskText">
                        CSS
                    </div>
                    <div class="col-12 taskText">
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
