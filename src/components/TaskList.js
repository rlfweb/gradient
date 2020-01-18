import React from "react";
import "../TaskList.css";
import Tasks from "./Tasks";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.taskCollection.map(taskItem => (
          <Tasks item={taskItem} deleteTaskFunc={this.props.deleteTaskFunc} />
        ))}
      </div>
    );
  }
}

export default TaskList;
