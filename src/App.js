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
import axios from "axios";

// STILL TO DO IF TIME:
// Get 'Name' from users database
// Get Search function working
// The app is 'bloated' with duplicated code and could be consolidated. James says 'add WORK and HOME in as parameters and then don't have to have duplicate code'
// Clear previous taskDescription from input field after 'add task' is clicked

// NOTES
// Tasks need a unique id, so if there are more than one identical task, both don't get deleted, when one delete button is clicked (uuid is in backend)
// As state lives in app.js it is only within app.js that we should be altering the state, so get, post, put, delete go in here
// className instead of class. class is a JS reserved word

class App extends React.Component {
  state = {
    workTasks: [],
    homeTasks: []
  };

  // this fires as soon as page loads, which says "bring my content in from my database"
  componentDidMount = () => {
    // Fetch tasks from API
    axios
      .get("https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      .then(response => {
        const workTasks = response.data.tasks.filter(task =>
          task.category.includes("WORK")
        );
        const homeTasks = response.data.tasks.filter(task =>
          task.category.includes("HOME")
        );
        // handle success
        this.setState({
          workTasks: workTasks,
          homeTasks: homeTasks
        });
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  deleteWorkTask = workTaskId => {
    // Tasks will be deleted when this function runs

    // I need the list of tasks from state
    const workTasks = this.state.workTasks;

    axios
      .delete(
        `https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks/${workTaskId}`
      )
      .then(response => {
        // Make sure the id of what we are deleting matches the id of what we want to delete
        const updatedWorkTasks = workTasks.filter(
          item => item.taskId !== workTaskId
        );

        // I need to update the state with the new array of tasks i.e. without the one that has just been deleted
        this.setState({
          workTasks: updatedWorkTasks
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  completeWorkTask = workTaskId => {
    const workTaskToEdit = {
      taskId: workTaskId
    };

    axios
      .put(
        `https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks/${workTaskId}`,
        workTaskToEdit
      )
      .then(response => {
        // Firstly find the task that needs to be updated
        const workTasksBeingUpdated = this.state.workTasks;
        for (let i = 0; i < workTasksBeingUpdated.length; i++) {
          const workTask = workTasksBeingUpdated[i];

          if (workTask.taskId === workTaskId) {
            workTask.completed = true;
            break;
          }
        }

        this.setState({
          workTasks: workTasksBeingUpdated
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  addWorkTask = workTaskDescription => {
    // Define the task that is being added i.e. a json object with these data types inside
    const workTaskToAdd = {
      taskDescription: workTaskDescription,
      completed: 0,
      category: "WORK",
      userId: 1
    };

    axios
      .post(
        "https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks",
        workTaskToAdd
      )
      .then(response => {
        workTaskToAdd.taskId = response.data.tasks.taskId;
        console.log(workTaskToAdd);
        // get the current list of tasks from state
        const currentWorkTasks = this.state.workTasks;

        // add the 'taskToAdd' to the array of tasks in state
        currentWorkTasks.push(workTaskToAdd);

        // update the state
        this.setState({
          workTasks: currentWorkTasks
        });
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  deleteHomeTask = homeTaskId => {
    const homeTasks = this.state.homeTasks;

    axios
      .delete(
        `https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks/${homeTaskId}`
      )
      .then(response => {
        const updatedHomeTasks = homeTasks.filter(
          item => item.taskId !== homeTaskId
        );

        this.setState({
          homeTasks: updatedHomeTasks
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  completeHomeTask = homeTaskId => {
    const homeTaskToEdit = {
      taskId: homeTaskId
    };

    axios
      .put(
        `https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks/${homeTaskId}`,
        homeTaskToEdit
      )
      .then(response => {
        const homeTasksBeingUpdated = this.state.homeTasks;
        for (let i = 0; i < homeTasksBeingUpdated.length; i++) {
          const homeTask = homeTasksBeingUpdated[i];

          if (homeTask.taskId === homeTaskId) {
            homeTask.completed = true;
            break;
          }
        }

        this.setState({
          homeTasks: homeTasksBeingUpdated
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  // just after taskDescription is where we might also set priorities or dates for tasks to be done by

  addHomeTask = homeTaskDescription => {
    const homeTaskToAdd = {
      taskDescription: homeTaskDescription,
      completed: 0,
      category: "HOME",
      userId: 1
    };

    axios
      .post(
        "https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks",
        homeTaskToAdd
      )
      .then(response => {
        homeTaskToAdd.taskId = response.data.tasks.taskId;
        console.log(homeTaskToAdd);
        const currentHomeTasks = this.state.homeTasks;
        currentHomeTasks.push(homeTaskToAdd);
        this.setState({
          homeTasks: currentHomeTasks
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        {/* // You add every file name within here */}
        <div className="container">
          <Header />
          <div className="row mainBox">
            <div className="col-12 col-md-6">
              <WorkTaskCount workTaskCount={this.state.workTasks.length} />
              <WorkTaskList
                workTaskCollection={this.state.workTasks}
                deleteWorkTaskFunc={this.deleteWorkTask}
                completedWorkTaskFunc={this.completeWorkTask}
              />
              <AddWorkTask addWorkTaskFunc={this.addWorkTask} />
            </div>

            <div className="col-12 col-md-6">
              <HomeTaskCount homeTaskCount={this.state.homeTasks.length} />
              <HomeTaskList
                homeTaskCollection={this.state.homeTasks}
                deleteHomeTaskFunc={this.deleteHomeTask}
                completedHomeTaskFunc={this.completeHomeTask}
              />
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
