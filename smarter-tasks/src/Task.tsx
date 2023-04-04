import React from 'react';
import './TaskCard.css';
interface TaskProp {
  title: string;
  description: string;
  dueDate: Date;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <h3>{this.props.dueDate.toLocaleDateString()}</h3>
      </div>
    );
  }
}

export default Task;
