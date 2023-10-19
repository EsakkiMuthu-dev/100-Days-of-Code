import { useState } from 'react'


function App() {
  const [index, setIndex] = useState(0);
  const [vote,setVote]=useState({
    'If it hurts, do it more often.':0,
    'Adding manpower to a late software project makes it later!':0,
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.':0,
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.':0,
    'Premature optimization is the root of all evil.':0,
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.':0,
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.':0,
    'The only way to go fast, is to go well.':0
  });
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const randomIndex=()=>setIndex(Math.abs(Math.round(Math.random()*anecdotes.length-1)));
  const voteQuote=()=> setVote({...vote,[anecdotes[index]]:vote[anecdotes[index]]+1})
 
  const findMaxVote=()=>{
    let maxVoteVal="";
    let maxVote=0;
    for(let el of anecdotes){
      if(vote[el]>maxVote)
      {
        maxVoteVal=el;
        maxVote=vote[el];
      }
    }
    return maxVoteVal;
  }


  return (
    <>
      <h1 style={{color:"#522f42",textAlign:'center'}}>Random Anecdote</h1>
      <p>{anecdotes[index]}</p>
      <p> it has {vote[anecdotes[index]]}</p>
      <button onClick={voteQuote}> Vote </button>
      <button onClick={randomIndex}> Next Anecdote </button>
      <hr />
      <h1 style={{textAlign:"center"}}>Most Voted Anecdote</h1>
      <p>{findMaxVote()}</p>
    </>
  )
}

export default App
