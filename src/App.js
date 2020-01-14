import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import AddTask from './AddTask';
import Nav from './Nav';
import TaskCount from './TaskCount';
import TaskList from './TaskList';
import Tasks from './Tasks';
import Footer from './Footer';

class App extends React.Component {
// good to give tasks a unique id, so they are unique, so if there are more than one identical task, both don't get deleted, when one delete button is clicked
  state = {
    tasks: [
      {id: 1, description: "Reply to Nikki", completed: false},
      {id: 2, description: "Get bike serviced", completed: false},
      {id: 3, description: "Take back Sloth", completed: false}
    ]
  }
  
  render() {
    return (
      <div>
        {/* // You add every file name within here */}
        <Nav />
        <Header />
        <AddTask />
        <TaskCount taskCount={this.state.tasks.length}/>
        <Tasks />
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
