import React from "react";

const GameBoard = ({ data, selectCell }) => {
  return (
    <div className="game-board">
      {data.map(({ value, selected }, index) => (
        <button
          key={`${value}-${selected}`}
          name={`${value}-${selected}`}
          className={`cell ${selected ? "selected" : ""}`}
          onClick={() => selectCell(index)}
        >
          <span className="number">{index + 1}</span>
          <span>{value}</span>
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
