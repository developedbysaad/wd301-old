import './TaskCard.css';

const TaskCard = (props) => {
  console.log(props);
  return (
    <div className="m-5 p-3 rounded-lg border-solid border-black border-2">
      <h2 className="text-xl font-bold text-black text-left text-2xl">
        {props.title}
      </h2>
      <p className="font-semibold text-gray-600">
        {props.dueDate ? `Due on: ${props.dueDate}` : ''}
      </p>
      <p className="font-semibold text-gray-600">
        {props.completedAtDate ? `Completed on: ${props.completedAtDate}` : ''}{' '}
      </p>
      <p className="font-semibold text-gray-600">
        Assignee: {props.assigneeName}
      </p>
    </div>
  );
};

export default TaskCard;
