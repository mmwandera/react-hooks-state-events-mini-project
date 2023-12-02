import React, { useState } from "react";

// Pass the list of categories to this component from App. Then, update this component to display <option> elements for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task.
// Next, update this form to be a controlled component, so that all form inputs are captured in state.
// When the form is submitted, add a new task to the list with the text and category from the form. You'll need a callback prop named onTaskFormSubmit for the tests to pass for this feature.

function NewTaskForm({ onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text.trim() && formData.category.trim()) {
      onTaskFormSubmit(formData);
      setFormData({
        text: "",
        category: "",
      });
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="">Select Category</option>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;