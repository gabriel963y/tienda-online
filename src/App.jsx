import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Blog from './pages/Blog.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Login from './pages/Login.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/productos/:id" element={<SingleProduct />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
