const Startbutton = ({ onChangehandler, running }) => {
	return (
		<button onClick={onChangehandler}>{running ? 'Stop' : 'Start'}</button>
	);
};

export default Startbutton;
