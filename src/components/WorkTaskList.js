import React from "react";
import "../App.css";
import WorkTasks from "./WorkTasks";

class WorkTaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.workTaskCollection.map(workTaskItem => (
          <WorkTasks
            key={workTaskItem.taskId}
            workItem={workTaskItem}
            deleteWorkTaskFunc={this.props.deleteWorkTaskFunc}
            completedWorkTaskFunc={this.props.completedWorkTaskFunc}
          />
        ))}
      </div>
    );
  }
}

export default WorkTaskList;