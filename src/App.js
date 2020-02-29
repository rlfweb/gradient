import React from "react";
import "./App.css";

import Header from "./components/Header";
import AddWorkTask from "./components/AddWorkTask";
import WorkTaskList from "./components/WorkTaskList";
import WorkTaskCount from "./components/WorkTaskCount";
import AddHomeTask from "./components/AddHomeTask";
import HomeTaskList from "./components/HomeTaskList";
import HomeTaskCount from "./components/HomeTaskCount";
import Footer from "./components/Footer";
import uuidv4 from "uuid/v4";
import axios from "axios";

class App extends React.Component {
  // good to give tasks a unique id, so they are unique, so if there are more than one identical task, both don't get deleted, when one delete button is clicked
  state = {
    workTasks: [
    ],

    homeTasks: [
    ]
  };

  // this fires as soon as page loads, which says bring my content in from my database
  componentDidMount = () => {
    // Fetch tasks from API
    axios.get('https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks')
    .then((response) => {
      // handle success
      this.setState({
        workTasks: response.data.tasks,
        homeTasks: response.data.tasks
      })
    })
    .catch((error) => {
      // handle error
      console.error(error);
    });
  }
  
//POST IS GOING TO BE A CLICK EVENT
// this website has useful info for us https://www.npmjs.com/package/axios
//axios.post
// axios.delete
// axios.put

  // As state lives in app.js it is only within app.js that we should be altering the state, so the delete stuff goes in here

  deleteWorkTask = workTaskId => {
    // Tasks will be deleted when this function runs

    // I need the list of tasks from state
    const workTasks = this.state.workTasks;

    // Make sure the id of what we are deleting matches the id of what we want to delete
    const updatedWorkTasks = workTasks.filter(item => item.taskId !== workTaskId);

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

      if (workTask.taskId === workTaskId) {
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



  // As state lives in app.js it is only within app.js that we should be altering the state, so the delete stuff goes in here

  deleteHomeTask = homeTaskId => {
    // Tasks will be deleted when this function runs

    // I need the list of tasks from state
    const homeTasks = this.state.homeTasks;

    // Make sure the id of what we are deleting matches the id of what we want to delete
    const updatedHomeTasks = homeTasks.filter(item => item.taskId !== homeTaskId);

    // I need to update the state with the new array of tasks i.e. without the one that has just been deleted
    this.setState({
      homeTasks: updatedHomeTasks
    });
  };

  // As state lives in app.js it is only within app.js that we should be altering the state, so the edit/complete stuff goes in here

  completeHomeTask = homeTaskId => {
    // Firstly find the task that needs to be updated
    const homeTasksBeingUpdated = this.state.homeTasks; // this is an array of tasks
    for (let i = 0; i < homeTasksBeingUpdated.length; i++) {
      const homeTask = homeTasksBeingUpdated[i];

      if (homeTask.taskId === homeTaskId) {
        // we need to update a property on the identified task
        homeTask.completed = true;
        break;
      }
    }
    // just need to loop through the array until we find the one that matches and then boot us out of the array

    // Upate state to reflect the changes made to the task
    this.setState({
      homeTasks: homeTasksBeingUpdated
    });
  };

  // just after taskDescription is where we might also set priorities or dates for tasks to be done by
  addHomeTask = homeTaskDescription => {
    // Define the task that is being added
    const homeTaskToAdd = {
      description: homeTaskDescription,
      completed: false
    };

    console.log("Adding home task");
    console.log(homeTaskToAdd);

    // get the current list of tasks from state
    const currentHomeTasks = this.state.homeTasks;
    // add the 'taskToAdd' to the array of tasks in state
    currentHomeTasks.push(homeTaskToAdd);
    // update the state
    this.setState({
      homeTasks: currentHomeTasks
    });
  };




  render() {
    return (
      <div>
        {/* // You add every file name within here */}
        <div className="container">
          <Header />
          <div className="row">
          <div className="col-12 col-md-6">
          <WorkTaskCount workTaskCount={this.state.workTasks.length} />
          <WorkTaskList
            workTaskCollection={this.state.workTasks}
            deleteWorkTaskFunc={this.deleteWorkTask}
            completedWorkTaskFunc={this.completeWorkTask} />
            <AddWorkTask addWorkTaskFunc={this.addWorkTask} />
            </div>

            <div className="col-12 col-md-6">
          <HomeTaskCount homeTaskCount={this.state.homeTasks.length} />
          <HomeTaskList
            homeTaskCollection={this.state.homeTasks}
            deleteHomeTaskFunc={this.deleteHomeTask}
            completedHomeTaskFunc={this.completeHomeTask} />
            <AddHomeTask addHomeTaskFunc={this.addHomeTask} />
            </div>
            </div>
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
