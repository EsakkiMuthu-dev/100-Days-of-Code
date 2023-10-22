import { useState } from 'react';


function Button({value ,handleClick})
{
 
  return <button className='square' onClick={handleClick} >{value}</button>
}

function Board({squares,isXturn,onPlay}) {
  let newSquares;

  function handleClick(index)
  {
    if(squares[index] || calculateWinner(squares)) return;
    newSquares=[...squares];
    newSquares[index]=(isXturn)?'X':'O';
    onPlay(newSquares);
  }
  let status;
  const winner = calculateWinner(squares);
  status=(winner)?`winner : ${winner}`:`Current Player : ${isXturn?'X':'O'}` ;
  return (
    <>
     <h1>Tic-Tac-Toe</h1>
     <div className="status">{status}</div>
     <div className='board-row'>
      <Button value={squares[0]}  handleClick={()=>handleClick(0)}/>
      <Button  value={squares[1]}  handleClick={()=>handleClick(1)}/>
      <Button  value={squares[2]}  handleClick={()=>handleClick(2)}/>
     </div>

     <div className='board-row'>
     <Button  value={squares[3]}   handleClick={()=>handleClick(3)}/>
      <Button   value={squares[4]} handleClick={()=>handleClick(4)}/>
      <Button  value={squares[5]}  handleClick={()=>handleClick(5)}/>
     </div>

     <div className='board-row'>
     <Button  value={squares[6]}  handleClick={()=>handleClick(6)}/>
      <Button  value={squares[7]}  handleClick={()=>handleClick(7)}/>
      <Button  value={squares[8]}  handleClick={()=>handleClick(8)}/>
     </div>
     
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App(){
  const[history,setHistory]= useState([Array(9).fill(null)]);
  const[isXturn,setXturn]=useState(true);
  const currentSquares = history[history.length-1];
  function handlePlay(newSquares)
  {
    setHistory([...history,newSquares]);
    setXturn(!isXturn)
  }
  function jumpToMove(move)
  {
    console.log("jump to move : "+move);
    const newHistory=history.slice(0,move+1);
    setHistory(newHistory);
  }
  const moves= history.map((squares,move)=>{
    const description=(move>0)?`Go to move #${move}`:`Go to gameStart`;
    return(
      <li key={move}>
        <button  onClick={()=> jumpToMove(move)}>{description}</button>
      </li>
    )
  })
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} isXturn={isXturn} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}

export default App
