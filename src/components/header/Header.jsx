import { useState } from 'react';
import './header.css';

const Header = () => {
	const [frst, setFrst] = useState(0);
	const [scnd, setScnd] = useState(0);

	function addHandle(ev) {
		ev.target.name === 'frst'
			? setFrst(Number(ev.target.value))
			: setScnd(Number(ev.target.value));
	}

	return (
		<header className='App-header'>
			<h1>Hello, World!</h1>
			<form action=''>
				<input type='number' name='frst' value={frst} onChange={addHandle} />
				<span>+</span>
				<input type='number' name='scnd' value={scnd} onChange={addHandle} />
			</form>
			<h3>{frst + scnd}</h3>
		</header>
	);
};

export default Header;
