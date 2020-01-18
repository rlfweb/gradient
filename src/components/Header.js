import React from 'react';
import '../Header.css';


class Header extends React.Component {

  render() {
    return (



      <div className="container">

        <body className="wallpaper">

          <div className="row headerColour">

            <div className="col-12 col-md-8 todoTitle">
              Susan's To Do Lists
            </div>

            <div className="searchBar col-12 col-md-4 text-lg-right">
              Search
            </div>

          </div>
        </body>

      </div>


    );
  }
}

// REMEMBER TO CHANGE THIS BELOW TO FILENAME i.e. from App to Header
export default Header;
