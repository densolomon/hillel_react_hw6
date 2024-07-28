import './button.scss'
import Loader from '../Loader/Loader'

const Button = ({ title, handleClick, isLoading, buttonClass }) => {
	return (
		<>
			<div className={`${buttonClass}-wrapper`}>
				<button className={buttonClass} onClick={handleClick}>{title}</button>
				{isLoading && <Loader />}
			</div>
		</>
	)
};

export default Button;