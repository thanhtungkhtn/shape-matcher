import React from 'react';

import './Cell.css';
import { Shape } from '../types';

interface CellProps {
  shape: Shape;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ shape, onClick }: CellProps) => {
  return (
    <div
      className={`shape ${shape.isFlipped ? shape.shape : ''}`}
      onClick={onClick}
    />
  );
}

export default Cell;
