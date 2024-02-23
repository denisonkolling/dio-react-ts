import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global.ts';

const rootElement = document.getElementById('root');

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<GlobalStyle />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	);
}