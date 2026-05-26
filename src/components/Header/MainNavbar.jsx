import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

const MainNavbar = () => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <Navbar expand="lg" variant="light" className="main-navbar-wrapper">
            <Container fluid className="px-4">
                <Navbar.Brand as={Link} to="/" className="brand-container">
                    <span className="brand-text-main">NextGen Store</span>
                    <span className="brand-text-sub">Tienda multirubro</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="mx-auto gap-lg-4 text-center my-3 my-lg-0">
                        <Nav.Link as={NavLink} to="/" end className="nav-link-tech">
                            Inicio
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/productos" className="nav-link-tech">
                            Productos
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/blog" className="nav-link-tech">
                            Blog
                        </Nav.Link>

                        <NavDropdown
                            title="Categorías"
                            id="products-dropdown"
                            className="nav-dropdown-custom text-center"
                        >
                            <NavDropdown.Item as={Link} to="/productos/smartphones">
                                Smartphones
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productos/laptops">
                                Laptops
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productos/cosmeticos">
                                Cosméticos
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productos/decoracion">
                                Decoración
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Button as={Link} to="/ofertas" className="btn-pc-builder my-2 my-lg-0">
                        Ver Ofertas
                    </Button>

                    <div className="quick-actions-row my-2 my-lg-0">
                        <Link to="/login" className="navbar-icon-link">
                            <FiUser size={18} />
                        </Link>

                        <Link to="/carrito" className="navbar-icon-link position-relative">
                            <FiShoppingCart size={18} />
                            <span className="cart-badge-dot"></span>
                        </Link>
                        <div className="position-relative d-flex align-items-center">
                            <div
                                className="d-flex align-items-center rounded-pill"
                                style={{
                                    width: showSearch ? '180px' : '40px',
                                    height: '40px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                    border: '1px solid rgba(0, 0, 0, 0.08)',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    padding: showSearch ? '0 12px 0 16px' : '0',
                                    justifyContent: 'center',
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="border-0 bg-transparent text-dark"
                                    style={{
                                        width: showSearch ? '100%' : '0px',
                                        opacity: showSearch ? 1 : 0,
                                        display: showSearch ? 'block' : 'none',
                                        transition: 'all 0.3s ease-in-out',
                                        outline: 'none',
                                        fontSize: '0.85rem',
                                        padding: 0,
                                        margin: 0,
                                    }}
                                />
                                <FiSearch
                                    size={18}
                                    className="text-dark"
                                    style={{
                                        cursor: 'pointer',
                                        minWidth: '18px',
                                        transition: 'color 0.3s ease',
                                    }}
                                    onClick={() => setShowSearch(!showSearch)}
                                />
                            </div>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;
