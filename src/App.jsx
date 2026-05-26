import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Blog from './pages/Blog.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <main style={{ minHeight: '60vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/productos/:id" element={<SingleProduct />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
