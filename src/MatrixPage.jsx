import React, { useState } from "react";

const MatrixPage = () => {
  const [colors, setColors] = useState(Array(9).fill("lightgray"));
  const [clickedOrder, setClickedOrder] = useState([]);

  const handleClick = (index) => {
    const newColors = [...colors];
    newColors[index] = "green";

    if (!clickedOrder.includes(index)) {
      setClickedOrder([...clickedOrder, index]);
    }

    if (index === 8) {
      let delay = 0;
      clickedOrder.forEach((i) => {
        setTimeout(() => {
          newColors[i] = "orange";
          setColors([...newColors]);
        }, delay);
        delay += 300;
      });
    } else {
      setColors(newColors);
    }
  };

  const handleReset = () => {
    setColors(Array(9).fill("lightgray"));
    setClickedOrder([]);
  }

  return (
    <>
    <div className="container">
      <div className="matrix">
        {colors.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
    </>
  );
};

export default MatrixPage;
