import React from "react";
import "../App.css";
import Tasks from "./Tasks";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.taskCollection.map(taskItem => (
          <Tasks
            key={taskItem.id}
            item={taskItem}
            deleteTaskFunc={this.props.deleteTaskFunc}
            completedTaskFunc={this.props.completedTaskFunc}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
