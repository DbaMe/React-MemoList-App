const ToDos = (props) => {
	const userTodos = props.list.map((toDo, i) => (
		<li key={i} className="todo">
			<input
				type="checkbox"
				defaultChecked={toDo.done}
				onChange={() => props.check(toDo.id)}
			/>
			{toDo.title}
			<i 
				onClick={() => {
					console.log(toDo.id);
					props.remove(toDo.id);
				}}
			>
				🗑 Delete
			</i>
		</li>
	));
	return <ul>{userTodos}</ul>;
};

export default ToDos;
