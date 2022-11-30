import { Outlet } from 'react-router-dom';
import { Aside } from '../Aside';
import { Main } from '../Main';

const Layout = () => {
	return (
		<div className='h-screen overflow-hidden flex 2xl:container mx-auto'>
			<Aside />
			<Main>
				<Outlet />
			</Main>
		</div>
	);
};

export default Layout;
