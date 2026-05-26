import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const providers = [
    {
        key: 'google',
        icon: <FaGoogle className="text-danger" size={14} />,
        label: 'Google',
        hoverColor: 'rgba(219, 68, 85, 0.3)',
        hoverBg: 'rgba(219, 68, 85, 0.05)',
        onClick: () => alert('Iniciar sesión con Google'),
    },
    {
        key: 'github',
        icon: <FaGithub style={{ color: 'var(--text-main)' }} size={14} />,
        label: 'GitHub',
        hoverColor: 'rgba(100, 116, 139, 0.4)',
        hoverBg: 'rgba(100, 116, 139, 0.05)',
        onClick: () => alert('Iniciar sesión con GitHub'),
    },
];

const SocialLoginButtons = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <Row className="g-2 mb-4">
            {providers.map((p) => {
                const isHovered = hovered === p.key;
                return (
                    <Col xs={6} key={p.key}>
                        <Button
                            variant="outline-secondary"
                            onMouseEnter={() => setHovered(p.key)}
                            onMouseLeave={() => setHovered(null)}
                            className="w-100 py-2 rounded-3 d-flex align-items-center justify-content-center gap-2 text-muted fw-semibold small"
                            style={{
                                borderColor: isHovered ? p.hoverColor : 'var(--border-light)',
                                background: isHovered ? p.hoverBg : 'transparent',
                                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                            onClick={p.onClick}
                        >
                            {p.icon}
                            <span style={{ fontSize: '0.82rem' }}>{p.label}</span>
                        </Button>
                    </Col>
                );
            })}
        </Row>
    );
};

export default SocialLoginButtons;
