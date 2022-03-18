// Core Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
// Pages
import Index from './pages/index'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)

reportWebVitals()