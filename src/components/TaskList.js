import React from "react";
import Task from "./Task";

// First, we'll want to display all the tasks in our app. Pass down the task data from App to TaskList, and display each task using the Task component. Make sure to use a key prop!

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task
          key={`${task.category}-${task.text}-${index}`}
          category={task.category}
          text={task.text}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
