import { useState, useEffect } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSun, FiMoon } from 'react-icons/fi';

import SearchBar from './SearchBar';
import CartOffcanvas from './CartOffcanvas';

const MainNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [showCart, setShowCart] = useState(false);
    const [hasProducts, setHasProducts] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (expanded) {
                setExpanded(false);
            }
        };

        if (expanded) {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [expanded]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const checkCart = () => {
            try {
                const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
                setHasProducts(cartData.length > 0);
            } catch (e) {
                setHasProducts(false);
            }
        };
        checkCart();

        window.addEventListener('storage', checkCart);
        window.addEventListener('cart-updated', checkCart);

        return () => {
            window.removeEventListener('storage', checkCart);
            window.removeEventListener('cart-updated', checkCart);
        };
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
    };

    return (
        <Navbar
            expanded={expanded}
            onToggle={setExpanded}
            expand="lg"
            variant="light"
            className="main-navbar-wrapper"
        >
            <Container fluid className="px-4">
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="brand-container"
                    onClick={() => setExpanded(false)}
                >
                    <span className="brand-text-main">NextGen Store</span>
                    <span className="brand-text-sub">Ecommerce</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="mx-auto gap-lg-4 text-center my-3 my-lg-0">
                        <Nav.Link
                            as={NavLink}
                            to="/"
                            end
                            className="nav-link-tech"
                            onClick={() => setExpanded(false)}
                        >
                            Inicio
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/productos"
                            className="nav-link-tech"
                            onClick={() => setExpanded(false)}
                        >
                            Productos
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/blog"
                            className="nav-link-tech"
                            onClick={() => setExpanded(false)}
                        >
                            Blog
                        </Nav.Link>

                        <NavDropdown
                            title="Categorías"
                            id="products-dropdown"
                            className="nav-dropdown-custom text-center"
                        >
                            <NavDropdown.Item
                                as={Link}
                                to="/productos/smartphones"
                                onClick={() => setExpanded(false)}
                            >
                                Smartphones
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/productos/laptops"
                                onClick={() => setExpanded(false)}
                            >
                                Laptops
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/productos/cosmeticos"
                                onClick={() => setExpanded(false)}
                            >
                                Cosméticos
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/productos/decoracion"
                                onClick={() => setExpanded(false)}
                            >
                                Decoración
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Button
                        as={Link}
                        to="/ofertas"
                        className="btn-pc-builder my-2 my-lg-0"
                        onClick={() => setExpanded(false)}
                    >
                        Ver Ofertas
                    </Button>

                    <div className="quick-actions-row my-2 my-lg-0">
                        <button
                            type="button"
                            className="navbar-icon-link"
                            style={{
                                border: '1px solid var(--border-light)',
                                outline: 'none',
                                cursor: 'pointer',
                            }}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
                        </button>

                        <Link
                            to="/login"
                            className="navbar-icon-link"
                            onClick={() => setExpanded(false)}
                        >
                            <FiUser size={18} />
                        </Link>

                        <a
                            href="#"
                            className="navbar-icon-link position-relative"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowCart(true);
                                setExpanded(false);
                            }}
                            aria-label="Ver carrito"
                        >
                            <FiShoppingCart size={18} />
                            {hasProducts && <span className="cart-badge-dot"></span>}
                        </a>

                        <SearchBar />
                    </div>
                </Navbar.Collapse>
            </Container>

            <CartOffcanvas show={showCart} onHide={() => setShowCart(false)} />
        </Navbar>
    );
};

export default MainNavbar;
