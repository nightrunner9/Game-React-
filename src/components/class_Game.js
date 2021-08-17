import React from 'react';
import Board from './class_Board';
import calculateWinner from './function_calculateWinner';


class Game extends React.Component {
  constructor (props) {
    super (props) ;
    this.state = {
      history : [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
      defaultClassName: "square"
    };
  }

  handleClick (i)  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history [history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render () {
    const {history: historyName, defaultClassName, stepNumber, xIsNext} = this.state
    const colorChange = defaultClassName
    const history = historyName;
    const current = history[stepNumber];
    console.log(current)
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const btn_class = move === 0 ? 'step_start' : move % 2 != 0 ? 'step_red' : move % 2 == 0 ? 'step_blue' :  '';
      const desc = move ?
        'back to step #' + move :
        'back to start';
        return (
          <li key = {move}>
              <button
              className={`buttons ${btn_class}`}
              onClick={() => this.jumpTo(move)}>
              {desc}
              </button>
          </li>
        )
    })

    let status;
    if (winner) {
      status = 'Player '+ winner + ' Win !';
    } else {
      status = 'next step: ' +  (xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            handleClick={(i)=> this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game