import { Nav } from '@/components/Nav';
import { AsideLink } from '../AsideLink';

const Aside = () => {
	return (
		<aside className=' w-64  divider divide-y-2 overflow-hidden max-h-full flex flex-col'>
			<div className='p-5'>
				<span className='font-bold'>Validaciones</span>
			</div>

			<Nav />

			<AsideLink />
		</aside>
	);
};

export default Aside;
