import React, { useState } from "react";

/** Form for creating a new box to add to the page
 *
 * Has state for the height, width, and backgroundColor,
 * on submission, sends {height, width, backgroundColor} to fn rec'd from parent.
 *
 * BoxList -> NewBoxForm
 */

const NewBoxForm = ({ addBox }) => {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  /**calls addBox function recieved from the BoxList */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /**updates the formData object as user is typing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log(evt.target.value);
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            min={50} // Set the minimum value
            max={250} // Set the maximum value
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required="required"
          />
        </div>
        <div>
          <label htmlFor="width">width:</label>
          <input
            type="number"
            min={50} // Set the minimum value
            max={250} // Set the maximum value
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
            required="required"
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">background color:</label>
          <input
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
            required="required"
          />
        </div>
        <button>Add a new box!</button>
      </div>
    </form>
  );
};

export default NewBoxForm;
