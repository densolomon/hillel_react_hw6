import { DNA, RotatingLines } from 'react-loader-spinner'
import './loader.scss'

const Loader = () => {
	return (
		<>
		{/*< className="dna-wrapper">*/}
			{/*<RotatingLines*/}
			{/*	visible={true}*/}
			{/*	height="96"*/}
			{/*	width="96"*/}
			{/*	color="grey"*/}
			{/*	strokeWidth="5"*/}
			{/*	animationDuration="0.75"*/}
			{/*	ariaLabel="rotating-lines-loading"*/}
			{/*	wrapperStyle={{}}*/}
			{/*	wrapperClass=""*/}
			{/*/>*/}
			<DNA
				visible={true}
				height="30"
				width="30"
				ariaLabel="dna-loading"
				wrapperStyle={{}}
				wrapperClass="dna-inner-wrapper"
			/>
		{/*</div>*/}
		</>
	);
};

export default Loader;