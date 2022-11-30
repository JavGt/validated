import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const ButtonSearch = () => {
	return (
		<div className='px-5 py-5 sticky top-0 bg-gradient-to-b from-gray-50 to-transparent'>
			<button className='px-2 border-2 flex justify-between gap-2 items-center text-sm border-gray-200 p-2 rounded w-full'>
				<MagnifyingGlassIcon className='h-5' />
				<span className='flex-grow  text-left'>Quick search...</span>
				<span className='font-semibold'>Ctrl + k</span>
			</button>
		</div>
	);
};

export default ButtonSearch;
