import React from 'react';
import { TaskItem } from './types';
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: Date;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: '', description: '', dueDate: new Date(NaN) });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    const dateString = event.target.value;
    const date = new Date(Date.parse(dateString));
    this.setState({ dueDate: date });
  };
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
      dueDate: new Date(NaN),
    };
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
          required
          autoFocus
        />
        <input
          type="textarea"
          id="todoDescription"
          value={this.state.description}
          onChange={this.descriptionChanged}
        />
        <input
          type="date"
          id="todoDueDate"
          value={this.state.dueDate.toLocaleDateString('en-CA')}
          onChange={this.dueDateChanged}
          required
        />
        <button type="submit" id="addTaskButton">
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
