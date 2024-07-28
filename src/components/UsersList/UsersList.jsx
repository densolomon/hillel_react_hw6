import { USERS_BTN } from '../../constants/btnConstans'
import { USERS } from '../../constants/urlConstans'
import useFetch from '../../hooks/useFetch'
import Button from '../Button/Button'

const UsersList = () => {
	const { data: users, isLoading, error, fetchData } = useFetch(USERS);

	return (
		<>
			<Button title={USERS_BTN} handleClick={fetchData} isLoading={isLoading} buttonClass="refresh-button"/>
			{error && <h3>Error: {error}</h3>}
			{users.length ? (
				<ul>
					{users.map((user) => (
						<li key={user.id}>
							<h2>{user.id}.{' '}{user.name}{' '}:{' '}{user.email}</h2>
						</li>
					))}
				</ul>
			) : null}
		</>
	);
};

export default UsersList;