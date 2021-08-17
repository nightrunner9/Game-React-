import React from 'react';
import Square from './function_square';


function Board (props) {
    const renderSquare = (i) => {
      const square = props.squares[i];
      const classSquare = square === 'X' ? 'step_red' : square === 'O' ? 'step_blue' : '';
      return (
      <Square
        classSquare = {classSquare}
        value={square}
        onClick={()=> props.onClick(i)}
      />)
    }
    const render = () => {
      return (
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      )
    }
  return (
    {render}
    )

  }

  export default Board