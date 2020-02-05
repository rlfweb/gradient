import React from "react";
import "./App.css";

import Header from "./components/Header";
import AddWorkTask from "./components/AddWorkTask";
import WorkTaskList from "./components/WorkTaskList";
import WorkTaskCount from "./components/WorkTaskCount";
import Footer from "./components/Footer";
import uuidv4 from "uuid/v4";

class App extends React.Component {
  // good to give tasks a unique id, so they are unique, so if there are more than one identical task, both don't get deleted, when one delete button is clicked
  state = {
    workTasks: [
      { id: uuidv4(), description: "Reply to Viv", completed: false },
      { id: uuidv4(), description: "Get bike serviced", completed: false },
      { id: uuidv4(), description: "Take back Sloth", completed: false },
      { id: uuidv4(), description: "Food for lunch", completed: false }
    ]
  };

  // As state lives in app.js it is only within app.js that we should be altering the state, so the delete stuff goes in here

  deleteWorkTask = workTaskId => {
    // Tasks will be deleted when this function runs

    // I need the list of tasks from state
    const workTasks = this.state.workTasks;

    // Make sure the id of what we are deleting matches the id of what we want to delete
    const updatedWorkTasks = workTasks.filter(item => item.id !== workTaskId);

    // I need to update the state with the new array of tasks i.e. without the one that has just been deleted
    this.setState({
      workTasks: updatedWorkTasks
    });
  };

  // As state lives in app.js it is only within app.js that we should be altering the state, so the edit/complete stuff goes in here

  completeWorkTask = workTaskId => {
    // Firstly find the task that needs to be updated
    const workTasksBeingUpdated = this.state.workTasks; // this is an array of tasks
    for (let i = 0; i < workTasksBeingUpdated.length; i++) {
      const workTask = workTasksBeingUpdated[i];

      if (workTask.id === workTaskId) {
        // we need to update a property on the identified task
        workTask.completed = true;
        break;
      }
    }
    // just need to loop through the array until we find the one that matches and then boot us out of the array

    // Upate state to reflect the changes made to the task
    this.setState({
      workTasks: workTasksBeingUpdated
    });
  };

  // just after taskDescription is where we might also set priorities or dates for tasks to be done by
  addWorkTask = workTaskDescription => {
    // Define the task that is being added
    const workTaskToAdd = {
      id: uuidv4(),
      description: workTaskDescription,
      completed: false
    };

    console.log("Adding work task");
    console.log(workTaskToAdd);

    // get the current list of tasks from state
    const currentWorkTasks = this.state.workTasks;
    // add the 'taskToAdd' to the array of tasks in state
    currentWorkTasks.push(workTaskToAdd);
    // update the state
    this.setState({
      workTasks: currentWorkTasks
    });
  };

  render() {
    return (
      <div>
        {/* // You add every file name within here */}
        <div className="container">
          <Header />
          <WorkTaskCount workTaskCount={this.state.workTasks.length} />
          <WorkTaskList
            workTaskCollection={this.state.workTasks}
            deleteWorkTaskFunc={this.deleteWorkTask}
            completedWorkTaskFunc={this.completeWorkTask} />
            <AddWorkTask addWorkTaskFunc={this.addWorkTask} />
          <Footer />
        </div>
        </div>
    );
  }
}

export default App;

//in React you have to use className not class, as class is a JS reserved word.

// DELETE ALL THIS AND REPLACE WITH THE ABOVE
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
