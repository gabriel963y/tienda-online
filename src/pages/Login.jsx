import { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';

import BackgroundGlow from '../components/Login/BackgroundGlow';
import FormField from '../components/Login/FormField';
import PasswordField from '../components/Login/PasswordField';
import Divider from '../components/Login/Divider';
import SocialLoginButtons from '../components/Login/SocialLoginButtons';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Iniciando sesión con:\nEmail: ${email}\nRecordarme: ${rememberMe ? 'Sí' : 'No'}`);
        navigate('/');
    };

    return (
        <Container
            fluid
            className="d-flex align-items-center justify-content-center py-5 position-relative"
            style={{
                minHeight: 'calc(100vh - 120px)',
                background: 'var(--bg-subtle)',
                transition: 'background 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
        >
            <BackgroundGlow />

            <Row className="justify-content-center w-100 position-relative" style={{ zIndex: 2 }}>
                <Col xs={12} sm={10} md={8} lg={6} xl={4}>
                    <Card
                        className="border-0 shadow-lg rounded-4 overflow-hidden"
                        style={{
                            background: 'var(--login-card-bg)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            border: '1px solid var(--border-light)',
                            boxShadow:
                                '0 24px 80px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                            transition: 'background 0.4s ease, border-color 0.4s ease',
                        }}
                    >
                        <Card.Body className="p-4 p-sm-5">
                            <div className="text-center mb-4">
                                <span
                                    className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill fw-bold text-uppercase mb-3"
                                    style={{
                                        fontFamily: 'var(--font-tech)',
                                        fontSize: '0.62rem',
                                        letterSpacing: '0.22em',
                                        color: 'var(--accent-primary)',
                                        background: 'rgba(16,185,129,0.08)',
                                        border: '1px solid rgba(16,185,129,0.2)',
                                    }}
                                >
                                    <span
                                        className="pulse-dot-anim"
                                        style={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: '50%',
                                            background: 'var(--accent-primary)',
                                            display: 'inline-block',
                                            boxShadow: '0 0 6px var(--accent-primary)',
                                        }}
                                    />
                                    NextGen Auth
                                </span>

                                <h3
                                    className="fw-bold mb-1 text-uppercase"
                                    style={{
                                        fontFamily: 'var(--font-sans)',
                                        fontWeight: 900,
                                        letterSpacing: '-0.02em',
                                        color: 'var(--text-main)',
                                    }}
                                >
                                    Iniciar Sesión
                                </h3>
                                <p className="text-muted small mb-0">
                                    Accedé a tu panel y gestioná tus pedidos
                                </p>
                            </div>

                            <Form onSubmit={handleSubmit} className="mb-4">
                                <FormField
                                    icon={FiMail}
                                    type="email"
                                    placeholder="nombre@ejemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setIsEmailFocused(true)}
                                    onBlur={() => setIsEmailFocused(false)}
                                    isFocused={isEmailFocused}
                                    label="Correo electrónico"
                                    id="loginEmail"
                                />

                                <PasswordField
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    isFocused={isPasswordFocused}
                                    onFocus={() => setIsPasswordFocused(true)}
                                    onBlur={() => setIsPasswordFocused(false)}
                                />

                                <Form.Group
                                    className="mb-4 d-flex justify-content-between align-items-center"
                                    controlId="loginRemember"
                                >
                                    <Form.Check
                                        type="checkbox"
                                        label="Recordar mi sesión"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="small text-muted"
                                        style={{ fontSize: '0.82rem' }}
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    className="w-100 py-3 rounded-pill fw-bold text-uppercase border-0 text-white"
                                    style={{
                                        fontFamily: 'var(--font-tech)',
                                        fontSize: '0.78rem',
                                        letterSpacing: '0.12em',
                                        background:
                                            'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background =
                                            'linear-gradient(135deg, #059669 0%, #0284c7 100%)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow =
                                            '0 10px 24px rgba(16, 185, 129, 0.35)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background =
                                            'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow =
                                            '0 4px 14px rgba(16, 185, 129, 0.18)';
                                    }}
                                >
                                    Iniciar sesión
                                </Button>
                            </Form>

                            <Divider />

                            <SocialLoginButtons />

                            <p
                                className="text-center text-muted small mb-0 mt-4"
                                style={{ fontSize: '0.82rem' }}
                            >
                                ¿No tenés una cuenta?{' '}
                                <Link
                                    to="/register"
                                    className="text-success fw-bold text-decoration-none"
                                >
                                    Registrate
                                </Link>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
