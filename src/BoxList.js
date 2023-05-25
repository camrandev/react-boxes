import React, { useState } from "react";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";
import { v4 as uuid } from "uuid";

//TODO: validate colors
//TODO: make form stack currently

const BoxList = () => {
  //state that contains all of the boxes belongs here
  //each box will be an object with properties of height, width, color
  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (
      <ul>
        {boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={removeBox}
          />
        ))}
      </ul>
    );
  }

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  }

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
