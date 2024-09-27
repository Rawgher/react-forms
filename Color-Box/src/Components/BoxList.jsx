import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

const BoxList = () => {
  const INITIAL_STATE = [
    { id: uuid(), color: "red", width: 150, height: 150 },
    { id: uuid(), color: "orange", width: 100, height: 50 },
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />

      <div className="BoxList-row">
        {boxes.map(({ id, color, width, height }) => (
          <Box
            key={id}
            id={id}
            color={color}
            width={width}
            height={height}
            removeBox={removeBox}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
