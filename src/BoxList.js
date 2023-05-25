import React, { useState } from "react";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";
import { v4 as uuid } from "uuid";
import validateColor from "validate-color";

/** Box List: manages all of the boxes
 *
 * State:
 * - boxes: array like [ { id, width, height, backgroundColor, removeBox(fn)}, ... ]
 *TODO: list the current components parent here
 * TODO: dont list passing props here
 * boxList -> newBoxForm, passing addBox function
 */

 //TODO: update snippet to get rid of arrows
const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  /**function to render all of the boxes
   * performs light validation on color, provides default values if width or height
   * are missing
   */
  function renderBoxes() {
    return (
      <ul>
        {boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            width={box.width || 50}
            height={box.height || 50}
            backgroundColor={
              validateColor(box.backgroundColor) ? box.backgroundColor : "transparent"
            }
            removeBox={removeBox}
          />
        ))}
      </ul>
    );
  }

  //TODO: put this above the other function
  //TODO: want to see state->state updating functions -> other functions -> rendering
  /** Adds a new box to the list of boxes */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  }

  /** removes a box from the dom, passed down to each box as a prop */
  function removeBox(id) {
    setBoxes((curr) => curr.filter((box) => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
};

export default BoxList;
