import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log(evt.target.value);
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        min={50} // Set the minimum value
        max={250} // Set the maximum value
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">width:</label>
      <input
        type="number"
        min={50} // Set the minimum value
        max={250} // Set the maximum value
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">background color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add a new box!</button>
    </form>
  );
};

export default NewBoxForm;
