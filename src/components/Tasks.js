import React from 'react';
import '../Tasks.css';

class Tasks extends React.Component {


  render() {
    return (


      <div className="container wallpaper">


        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="col-12">
              <div className="row">

                <div className="col-12 col-md-8 taskText">
                  {this.props.item.description}
                </div>

                <div class="btn-group col-6 col-md-2">
                  <button type="button" class="btn btn-secondary btn-xs">tick</button>
                  <button type="button" class="btn btn-secondary btn-xs">X</button>
                </div>

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
