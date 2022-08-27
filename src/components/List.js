import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const List = (props) => {
	//   console.log(props);
	//   console.log(props.setList);
	const [userInput, setUserInput] = useState("");
	function changeHandle(e) {
		// console.log(e.target.value);
		setUserInput(e.target.value);
	}
	function submitHandle(e) {
		e.preventDefault();
		// prevState holds on the value of state before any update on the state
		console.log(uuidv4());
		if (userInput.length) {
			props.setList((prevState) => [
				...prevState,
				{ id: uuidv4(), title: userInput.trim(), done: false },
			]);
			setUserInput("");
		}
	}
	return (
		<form onSubmit={submitHandle}>
			<input type="text" className="TaskText" value={userInput} onChange={changeHandle} />
			<input type="submit" value="Add a task" />
		</form>
	);
};

export default List;
