import { DNA } from 'react-loader-spinner'

const Loader = () => {
	return (
		<>
			<DNA
				visible={true}
				height="30"
				width="30"
				ariaLabel="dna-loading"
				wrapperStyle={{}}
				wrapperClass="dna-inner-wrapper"
			/>
		</>
	);
};

export default Loader;