import { Link } from "react-router-dom";
import "./TaskCard.css";
import { TaskItem } from "./types";

const Task = (props: TaskItem) => {
  return (
    <li className="TaskItem shadow-md border border-slate-100 w-2/3">
      <Link to={`/tasks/${props.id}`}>
        <h2 className="text-base text-red-500 font-bold my-1">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-500">{props.dueDate.slice(0, 10)}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
    </li>
  );
};

export default Task;
