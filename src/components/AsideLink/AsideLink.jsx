import { LinkIcon } from '@heroicons/react/24/outline';

const AsideLink = () => {
	return (
		<div className='py-5'>
			<span className=' block font-bold px-5 mb-3'>Enlaces</span>

			<ul className='flex flex-col gap-2'>
				<li className='px-3'>
					<a
						className=' flex justify-between gap-2 items-center text-gray-600 capitalize flex-grow hover:underline px-2 p-1 rounded decoration-1'
						href='https://formik.org/'
						target='_blank'
					>
						Formik
						<LinkIcon className='h-5' />
					</a>
				</li>
				<li className='px-3'>
					<a
						className=' flex justify-between gap-2 items-center text-gray-600 capitalize flex-grow hover:underline px-2 p-1 rounded decoration-1'
						href='https://github.com/jquense/yup'
						target='_blank'
					>
						Yup
						<LinkIcon className='h-5' />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default AsideLink;
