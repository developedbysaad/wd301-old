import React from 'react';
import TaskCard from './TaskCard';

function App() {
  return (
    <div className="container mx-auto m-10 p-10 -mt-8 leading-8">
      <h1 className="text-2xl font-bold">Smarter Tasks</h1>
      <p>
        <span className="font-bold">Project:</span> Graduation Final Year
        Project (Revamp College Website)
      </p>
      <div className="flex justify-between mt-10 gap-10">
        <div className="p-8 border-solid border-gray-900 border-2 rounded-2xl w-2/5">
          <h1 className="text-xl font-bold text-gray-600 text-center text-3xl">
            Pending
          </h1>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            completedAtDate=""
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Add a blog"
            dueDate="22nd March"
            completedAtDate=""
            assigneeName="Rohit M"
          />
          <button className="flex font-semibold bg-gray-300 text-gray-600 w-full pl-5 rounded">
            <span className="text-xl font-bold">+</span> &nbsp; New task
          </button>
        </div>
        <div className="p-8 border-solid border-gray-900 border-2 rounded-2xl w-2/5">
          <h1 className="text-xl font-bold text-gray-600 text-center text-3xl">
            Done
          </h1>
          <TaskCard
            title="Design the mockup"
            dueDate=""
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get the approval from principal"
            dueDate=""
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
