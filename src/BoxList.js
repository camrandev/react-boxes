import React, { useState } from "react";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";
import { v4 as uuid } from 'uuid';

const BoxList = () => {
  //state that contains all of the boxes belongs here
  //each box will be an object with properties of height, width, color
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <Box />
    </div>
  );
};

export default BoxList;
