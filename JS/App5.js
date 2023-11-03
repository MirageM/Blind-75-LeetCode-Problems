import React, {useState} from 'react'

function App(){
	const[count, setCount] = useState(0);
	function increment(){
		setCount(count + 1)
	}
	function decrement(){
		setCount(count - 1)
	}
	return(
		<>
			<button>-</button>
			<span>0</button>
			<button>+</button>
		</>

		)

}

export default App;