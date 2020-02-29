import React from "react";
import "../App.css";
import HomeTasks from "./HomeTasks";

class HomeTaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.homeTaskCollection.map(homeTaskItem => (
          <HomeTasks
            key={homeTaskItem.taskId}
            homeItem={homeTaskItem}
            deleteHomeTaskFunc={this.props.deleteHomeTaskFunc}
            completedHomeTaskFunc={this.props.completedHomeTaskFunc}
          />
        ))}
      </div>
    );
  }
}

export default HomeTaskList;
