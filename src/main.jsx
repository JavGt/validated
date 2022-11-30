import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Route } from './routes/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Route />
	</React.StrictMode>
);
