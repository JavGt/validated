import { NavLink } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const ItemNav = ({ link }) => {
	const [open, setOpen] = useState(false);

	const toggle = () => setOpen(bool => !bool);

	return (
		<li key={link.to} className='px-3 flex flex-col'>
			<span className='flex justify-between gap-2 items-center'>
				<NavLink
					className='text-gray-600 capitalize flex-grow hover:bg-gray-200 px-2 p-1 rounded'
					to={link.to}
				>
					{link.title}
				</NavLink>

				{link.subList && (
					<button onClick={toggle} className='hover:bg-gray-200 p-2 rounded-full'>
						<ChevronDownIcon className='h-5' />
					</button>
				)}
			</span>

			{open &&
				link.subList.map(link => (
					<ul className='ml-3 border-l-2  border-l-gray-400'>
						<ItemNav link={link} />
					</ul>
				))}
		</li>
	);
};

export default ItemNav;
