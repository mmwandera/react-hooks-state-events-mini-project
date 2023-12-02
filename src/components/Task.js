import React from "react";

// Update the Task component so that it shows the task's text and category.

// When the delete button is clicked, the task should be removed from the list.

function Task({ onDelete, text, category }) {


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
