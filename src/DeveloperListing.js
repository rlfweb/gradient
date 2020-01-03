// This is  a file created during James' webinars to show how React works. 

import React from 'react';

class DeveloperListing extends React.Component {

  //This is just a function and this render function loads every time this component loads
  // Render is saying 'what do you want displayed on the screen for this component' and for this I just want the Developer's name
  render() {
    return <p>Rebecca French</p>;
  }


}

export default DeveloperListing;