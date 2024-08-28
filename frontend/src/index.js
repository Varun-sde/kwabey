import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './pages/App';
import Product from './pages/Product';
import Upload from './pages/Upload';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' Component={App}/>
            <Route path='/product' Component={Product}/>
            <Route path='/upload' Component={Upload}/>
        </Routes>
    </Router>
);
