import React from 'react';
import logo from './logo.svg';
import './App.css';



import Header from './Header';
import Nav from './Nav'; 
import Tasks from './Tasks'; 
import Footer from './Footer'; 

class App extends React.Component {
  render() {
    return  (
      <div>
{/* // You add every file name within here */}
        <Nav />
        <Header />
        <Tasks />
        <Footer />
    </div>
    );
  }
}

//in React you have to use className not class, as class is a JS reserved word. 


// DELETE ALL THIS STUFF AND REPLACE WITH THE ABOVE
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
