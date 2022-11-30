import { Children } from 'react';

const Main = ({ children }) => {
	return (
		<div className='col-span-8 py-10 px-16 overflow-y-auto flex-grow '>{children}</div>
	);
};

export default Main;
