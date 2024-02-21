"use client"

import { useState } from "react";
import "./crossword.css";

interface crosswordBoard {
  width: number;
  height: number;
}

interface crosswordCell {
  word: string;
}

export const Crossword = () => {
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);

  const board:crosswordCell[][] = Array<crosswordCell[]>(width)
    .fill(Array<crosswordCell>(height).fill({word: ''}));

  return (
    <div className="crossword">
      <div className="main">
        {
          board.map((cells, w) => {
            return cells.map((cell, h) => {
              return <div className="cell" key={w*h}>{cell.word}</div>
            });
          })
        }
      </div>
      <div className="menu">

      </div>
    </div>
  );
}

export default Crossword;