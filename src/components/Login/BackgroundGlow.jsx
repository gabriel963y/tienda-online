const BackgroundGlow = () => (
    <>
        <div
            className="position-absolute rounded-circle"
            style={{
                width: '380px',
                height: '380px',
                top: '-120px',
                left: '-100px',
                background: 'var(--accent-primary)',
                filter: 'blur(110px)',
                opacity: 'var(--login-glow-opacity-primary)',
                pointerEvents: 'none',
                transition: 'opacity 0.6s ease',
            }}
        />
        <div
            className="position-absolute rounded-circle"
            style={{
                width: '380px',
                height: '380px',
                bottom: '-40px',
                right: '-60px',
                background: 'var(--accent-secondary)',
                filter: 'blur(110px)',
                opacity: 'var(--login-glow-opacity-secondary)',
                pointerEvents: 'none',
                transition: 'opacity 0.6s ease',
            }}
        />
    </>
);

export default BackgroundGlow;
