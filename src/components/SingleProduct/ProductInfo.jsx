const ProductInfo = ({ product }) => {
    return (
        <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-3">
                <span
                    className="px-3 py-1 rounded-pill"
                    style={{
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: 'var(--accent-primary)',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                    }}
                >
                    {product.condition}
                </span>
                <span
                    className="px-3 py-1 rounded-pill"
                    style={{
                        background: 'rgba(14, 165, 233, 0.1)',
                        color: 'var(--accent-secondary)',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        border: '1px solid rgba(14, 165, 233, 0.2)',
                    }}
                >
                    {product.category}
                </span>
            </div>

            <h1
                style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                    color: 'var(--text-main)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.2,
                    marginBottom: '1rem',
                }}
            >
                {product.title}
            </h1>

            <h2
                style={{
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 800,
                    fontSize: '2.2rem',
                    color: 'var(--text-main)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                }}
            >
                ${product.price}
                <span
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textDecoration: 'line-through',
                        opacity: 0.6,
                    }}
                >
                    ${(product.price * 1.2).toFixed(2)}
                </span>
            </h2>

            <p
                style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: 'var(--text-muted)',
                    marginBottom: '2rem',
                }}
            >
                {product.description}
            </p>
        </div>
    );
};

export default ProductInfo;
