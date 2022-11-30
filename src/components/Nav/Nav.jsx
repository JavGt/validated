import { ButtonSearch } from '../ButtonSearch';
import { ItemNav } from '../ItemNav';

const navLinks = [
	{
		title: 'Mixed',
		to: '/mixed',
	},
	{
		title: 'String',
		to: '/string',
		subList: [
			{
				title: 'uppercase',
				to: '/string#uppercase',
			},
			{
				title: 'length',
				to: '/string#uppercase',
			},
			{
				title: 'min',
				to: '/string#uppercase',
			},
			{
				title: 'max',
				to: '/string#uppercase',
			},
		],
	},
	{
		title: 'Number',
		to: '/number',
	},
	{
		title: 'Boolean',
		to: '/boolean',
	},
	{
		title: 'Date',
		to: '/date',
	},
	{
		title: 'Array',
		to: '/array',
	},
	{
		title: 'Tuple',
		to: '/tuple',
	},
	{
		title: 'Object',
		to: '/object',
	},
];

const Nav = () => {
	return (
		<nav className='pb-5 overflow-y-auto h-full'>
			<ButtonSearch />

			<ul className='flex flex-col gap-2 '>
				{navLinks.map(link => (
					<ItemNav key={link.to} link={link} />
				))}
			</ul>
		</nav>
	);
};

export default Nav;
