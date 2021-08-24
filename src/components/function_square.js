import React from 'react';


function Square (props)  {
  const {squares, index} = props
  const square = squares[index];
  const classSquare = square === 'X' ? 'step_red' : square === 'O' ? 'step_blue' : '';
    return (
      <button
        className={`square ${classSquare}`}
        onClick={() => props.handleClick(index)}
      >
        {square}
      </button>
    );
}


export default React.memo(Square)