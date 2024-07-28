import { TODOS_BTN } from '../../constants/btnConstans'
import { TODOS } from '../../constants/urlConstans'
import useFetch from '../../hooks/useFetch'
import Button from '../Button/Button'
import './todosList.scss'

const TodosList = () => {
	const { data: todos, isLoading, error, fetchData } = useFetch(TODOS);

	return (
		<>
			<Button title={TODOS_BTN} handleClick={fetchData} isLoading={isLoading} buttonClass="refresh-button"/>
			{error && <h3>Error: {error}</h3>}
			{todos.length ? (
				<ul className="todos-block">
					{todos.map((todo) => (
						<li key={todo.id}>
							<h2>{todo.id}.{' '}{todo.title}{' '}:{' '}{todo.completed ? (
								<span className="completed">Completed</span>
							) : (
								<span className="not-completed">Not completed</span>
							)}</h2>
						</li>
					))}
				</ul>
			) : null}
		</>
	);
};

export default TodosList;