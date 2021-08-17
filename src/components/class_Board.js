import React from 'react';
import Square from './function_square';
import Game from './class_Game'

function Board (props) {
    const render = () => {
    return (
        <div>
          <div className="board-row">
            <Square index={0} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
            <Square index={1} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
            <Square index={2} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
          </div>
          <div className="board-row">
            <Square index={3} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
            <Square index={4} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
            <Square index={5} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
          </div>
          <div className="board-row">
            <Square index={6} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
            <Square index={7} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
            <Square index={8} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
          </div>
        </div>
      )
    }
  return (
    {render}
    )

  }

  export default Board