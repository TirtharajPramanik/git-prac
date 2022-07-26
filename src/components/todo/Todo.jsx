import { useState } from 'react';
import './todo.css';

const Todo = () => {
	const [todos] = useState(['']);
	const [todo, setTodo] = useState('');

	function newTodo(ev) {
		setTodo(ev.target.value);
	}

	function addTodo(ev) {
		ev.preventDefault();
		todos.push(todo);
		setTodo('');
	}

	return (
		<main>
			<form action=''>
				<input
					type='text'
					name='todo'
					placeholder='New Todo'
					value={todo}
					onChange={newTodo}
				/>
				<button type='submit' onClick={addTodo}>
					Create
				</button>
			</form>
			<ul>
				{todos.map((item, id) => (
					<li key={id}>{item}</li>
				))}
			</ul>
		</main>
	);
};

export default Todo;
