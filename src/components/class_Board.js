import React from 'react';
import Square from './function_square';


const Board = (props) => (
        <div>
          {arr.map((item,index) => (
            <div className="board-row" key={index}>
                <Square index={item[0]} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
                <Square index={item[1]} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
                <Square index={item[2]} squares={props.squares} handleClick={(index) => props.handleClick(index)} />
            </div>
          ))}

        </div>
      )
const arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]
console.log(arr)
  export default React.memo(Board);
