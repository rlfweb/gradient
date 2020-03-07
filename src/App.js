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

//Filter the data from database:
//const workTaskData = this.state;
//const workTasks = workTaskData.filter( (tasks) => tasks.category.includes("WORK"));

class App extends React.Component {
  // good to give tasks a unique id, so they are unique, so if there are more than one identical task, both don't get deleted, when one delete button is clicked
  state = {
    workTasks: [],
    homeTasks: []
  };

  // this fires as soon as page loads, which says bring my content in from my database
  componentDidMount = () => {
    // Fetch tasks from API
    axios
      .get("https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      .then(response => {

        const workTasks = response.data.tasks.filter( (task) => task.category.includes("WORK"));
        const homeTasks = response.data.tasks.filter( (task) => task.category.includes("HOME"));
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

  // As state lives in app.js it is only within app.js that we should be altering the state, so the edit/complete stuff goes in here






  completeWorkTask = workTaskId => {
		
  
    const workTaskToEdit = {
      taskId : workTaskId
    }


		axios
			.put(
				`https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks/${workTaskId}`, workTaskToEdit,
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

  // completeWorkTask = workTaskId => {
  //   // Firstly find the task that needs to be updated
  //   const workTasksBeingUpdated = this.state.workTasks; // this is an array of tasks
  //   for (let i = 0; i < workTasksBeingUpdated.length; i++) {
  //     const workTask = workTasksBeingUpdated[i];

  //     if (workTask.taskId === workTaskId) {
  //       // we need to update a property on the identified task
  //       workTask.completed = true;
  //       break;
  //     }
  //   }
  //   // just need to loop through the array until we find the one that matches and then boot us out of the array

  //   // Upate state to reflect the changes made to the task
  //   this.setState({
  //     workTasks: workTasksBeingUpdated
  //   });
  // };






  




  addWorkTask = workTaskDescription => {
    // Define the task that is being added

    const workTaskToAdd = {
      taskDescription: workTaskDescription,
      completed: 0,
      category: "WORK",
      userId: 1
    };
// add WORK in as a parameter and then don't have to have duplicate code. 
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

  // As state lives in app.js it is only within app.js that we should be altering the state, so the delete stuff goes in here

  deleteHomeTask = homeTaskId => {
    // Tasks will be deleted when this function runs

    // I need the list of tasks from state
    const homeTasks = this.state.homeTasks;

    axios
      .delete(
        `https://fvnx69glt6.execute-api.eu-west-2.amazonaws.com/dev/tasks/${homeTaskId}`
      )
      .then(response => {
    // Make sure the id of what we are deleting matches the id of what we want to delete
    const updatedHomeTasks = homeTasks.filter(
      item => item.taskId !== homeTaskId
    );

    // I need to update the state with the new array of tasks i.e. without the one that has just been deleted
    this.setState({
      homeTasks: updatedHomeTasks
    });
  })
  .catch(error => {
    console.error(error);
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
    // get the current list of tasks from state
    const currentHomeTasks = this.state.homeTasks;
    // add the 'taskToAdd' to the array of tasks in state
    currentHomeTasks.push(homeTaskToAdd);
    // update the state
    this.setState({
      homeTasks: currentHomeTasks
    });
  })
  .catch(error => {
    // handle error
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
