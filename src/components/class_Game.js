import React, { useState } from 'react';
import Board from './class_Board';
import calculateWinner from './function_calculateWinner';


function Game () {
  const [historyArr, setHistoryArr] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [defaultClassName, setDefaultClassName] = useState("square");

  const handleClick = (i) =>  {
    const history = historyArr.slice(0, stepNumber + 1);
    const current = history [history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
      setHistoryArr([...historyArr, { squares }]);
      setStepNumber(history.length);
      setXIsNext(!xIsNext);
  }

  const jumpTo = (step) => {
      setStepNumber(step);
      setXIsNext(step % 2 === 0);
  }

  const colorChange = defaultClassName
  const current = historyArr[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;
    if (winner) {
      status = 'Player '+ winner + ' Win !';
    } else {
      status = 'next step: ' +  (xIsNext ? 'X' : 'O');
    }

    //test

  return (
    <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            handleClick={(i)=> handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>
            {historyArr.map((step, move) => {
            const btn_class = move === 0 ? 'step_start' : move % 2 != 0 ? 'step_red' : move % 2 == 0 ? 'step_blue' :  '';
            const desc = move ?
              'back to step #' + move :
              'back to start';
              return (
                <li key = {move}>
                    <button
                      className={`buttons ${btn_class}`}
                      onClick={() => jumpTo(move)}>
                      {desc}
                    </button>
                </li>
              )
          })}
          </ol>
        </div>
      </div>
    );
}

export default React.memo(Game)