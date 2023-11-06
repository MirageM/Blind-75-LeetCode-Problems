import React, {useState} from 'react'

function App(){
	const[count, setCount] = useState(4);
	function decrement(){
		setCount(count - 1);
	}
	function increment(){
		setCount(count + 1);
	}
	return(
		<>
		<button onClick = {decrement}>-</button>
		<span>{count}</span>
		<button onClick = {increment}>+</button>
		</>
		)
}

export default App;