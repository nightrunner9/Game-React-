import React from 'react';
import Square from './function_square';

function Board (props) {
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

    Board = React.memo(Board)
  export default  Board;