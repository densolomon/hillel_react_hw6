import UsersList from '../UsersList/UsersList'
import TodosList from '../TodosList/TodosList'
import './block.scss'

const Block = () => {
	return (
		<div className="block">
			<div className="block-container">
				<UsersList/>
			</div>
			<div className="block-container">
				<TodosList />
			</div>
		</div>
	);
};

export default Block;