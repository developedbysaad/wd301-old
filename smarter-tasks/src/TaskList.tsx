import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Task from "./Task";
import { TaskItem } from "./types";

// Register all solid icons
library.add(fas);

interface TaskAppState {
  tasks: TaskItem[];
}
interface Props {
  tasks: TaskItem[];
  setTask: React.Dispatch<React.SetStateAction<TaskAppState>>;
}

const TaskList = (props: Props) => {
  const func = (idx: number) => {
    const updatedTasks = props.tasks.filter((task, id) => {
      return id !== idx;
    });
    const updatedTaskAppState: TaskAppState = {
      tasks: updatedTasks,
    };

    // Call setTaskAppState with the updated taskAppState object
    props.setTask(updatedTaskAppState);
  };
  const list = props.tasks.map((task, idx) => (
    <li className="flex justify-center gap-2">
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
      <button
        id="deleteTaskButton"
        className="deleteTaskButton text-white bg-red-400 hover:cursor-pointer py-0 px-5 rounded-xl my-3"
        onClick={() => {
          func(idx);
        }}
      >
        <FontAwesomeIcon icon="trash" />
      </button>
    </li>
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default TaskList;
