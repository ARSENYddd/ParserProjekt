import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Main() {
	root.render(<Router />)
}
setInterval(Main, 100)