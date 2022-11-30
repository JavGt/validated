import { Layout } from '@/components/Layout';
import { String } from '@/page/String';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/string',
				element: <String />,
			},
		],
	},
]);

export const Route = () => <RouterProvider router={routes} />;
