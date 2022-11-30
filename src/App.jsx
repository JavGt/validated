import { useState } from 'react';
import { Aside } from './components/Aside';
import { Main } from './components/Main';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='h-screen overflow-hidden grid grid-cols-10'>
			<Aside />
			<Main />
		</div>
	);
}

export default App;
