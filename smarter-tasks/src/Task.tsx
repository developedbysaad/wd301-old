import React from 'react';
import "./TaskCard.css";
interface TaskProp {
  title: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Task;
