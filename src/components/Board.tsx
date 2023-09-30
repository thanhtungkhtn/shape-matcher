import React from 'react';

import Cell from './Cell';
import './Board.css';
import { Shape } from '../types';

interface BoardProps {
  board: Shape[][];
  handleShapeClick: (row: number, col: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, handleShapeClick }) => {
  return (
    <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((shape, colIndex) => (
              <Cell
                key={colIndex}
                shape={shape}
                onClick={() => handleShapeClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
  );
};

export default Board;

