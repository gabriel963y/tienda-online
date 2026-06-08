import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Login from './pages/Login.jsx';
import './App.css';
import { CartProvider } from './components/CartContext/CartContext';
import { WishlistProvider } from './components/WishlistContext/WishlistContext';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <CartProvider>
            <WishlistProvider>
                <Router>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/productos" element={<Products />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/contacto" element={<Contact />} />
                            <Route path="/productos/:id" element={<SingleProduct />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </main>
                    <Footer />
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        toastStyle={{
                            background: 'var(--bg-light)',
                            border: '1px solid var(--border-light)',
                            color: 'var(--text-main)',
                            fontFamily: 'var(--font-sans)',
                            borderRadius: '16px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                            padding: '12px',
                        }}
                    />
                </Router>
            </WishlistProvider>
        </CartProvider>
    );
}

export default App;
