import React from "react";
import "./App.css";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Nav from "./components/Nav";
import TaskCount from "./components/TaskCount";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

class App extends React.Component {
  // good to give tasks a unique id, so they are unique, so if there are more than one identical task, both don't get deleted, when one delete button is clicked
  state = {
    tasks: [
      { id: 1, description: "Reply to Viv", completed: false },
      { id: 2, description: "Get bike serviced", completed: false },
      { id: 3, description: "Take back Sloth", completed: false },
      { id: 4, description: "Food for lunch", completed: false }
    ]
  }

// As state lives in app.js it is only within app.js that we should be altering the state, so the delete stuff goes in here


deleteTask = (taskId) => {
  // Tasks will be deleted when this function runs

  // I need the list of tasks from state
  const tasks = this.state.tasks;

  // Make sure the id of what we are deleting matches the id of what we want to delete
  const updatedTasks = tasks.filter(item => item.id !== taskId);

  // I need to update the state with the new array of tasks i.e. without the one that has just been deleted
  this.setState({
    tasks: updatedTasks
  });
}

// just after taskDescription is where we might also set priorities or dates for tasks to be done by
addTask = (taskDescription) => {
// Define the task that is being added
const taskToAdd = { id: 7, description: taskDescription, completed: false };
  // get the current  list of tasks from stat
  const currentTasks = this.state.tasks;
  // add the 'taskToAdd' to the array of tasks in state
currentTasks.push(taskToAdd);
  // update the state
  this.setState({
    tasks: currentTasks
  });

}


  render() {
    return (
      <div>
        {/* // You add every file name within here */}
        <Nav />
        <Header />
        <AddTask addTaskFunc={this.addTask} />
        <TaskCount taskCount={this.state.tasks.length} />
        <TaskList taskCollection={this.state.tasks} deleteTaskFunc={this.deleteTask} />
        <Footer />
      </div>
    );
  }
}

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

export default App;
