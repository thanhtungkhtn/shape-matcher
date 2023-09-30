import { Component } from 'react';

import './App.css';
import { Shape } from './types';
import Board from './components/Board';

interface State {
  board: Shape[][];
  firstSelected: Shape | null;
  matches: number;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      board: this.initializeBoard(4, 4),
      firstSelected: null,
      matches: 0,
    };
  }

  initializeBoard(rows: number, cols: number): Shape[][] {
    const shapes = ['circle', 'rectangle', 'circle', 'rectangle'];
    let board: Shape[][] = [];

    for (let i = 0; i < rows; i++) {
      let row: Shape[] = [];
      for (let j = 0; j < cols; j++) {
        const randomIndex = Math.floor(Math.random() * shapes.length);
        const shape = shapes.splice(randomIndex, 1)[0];
        row.push({ shape, isFlipped: false });
      }
      board.push(row);
    }

    return board;
  }

  handleShapeClick = (row: number, col: number) => {
    const { board, firstSelected, matches } = this.state;
    const selectedShape = board[row][col];

    if (selectedShape.isFlipped || firstSelected === selectedShape) {
      return;
    }

    if (firstSelected === null) {
      selectedShape.isFlipped = true;
      this.setState({ firstSelected: selectedShape });
    } else {
      selectedShape.isFlipped = true;

      if (firstSelected.shape === selectedShape.shape) {
        this.setState({
          firstSelected: null,
          matches: matches + 1,
        });
      } else {
        setTimeout(() => {
          firstSelected.isFlipped = false;
          selectedShape.isFlipped = false;
          this.setState({ firstSelected: null });
        }, 1000);
      }
    }
  };

  render() {
    const { board, matches } = this.state;

    return (
      <div className="App">
        <h1>Shape Matching Game</h1>
        <p>Matches: {matches}</p>
        <Board board={board} handleShapeClick={this.handleShapeClick} />
      </div>
    );
  }
}



export default App;
