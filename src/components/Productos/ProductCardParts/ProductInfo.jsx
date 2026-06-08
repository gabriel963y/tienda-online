const ProductInfo = ({ title, price, isDiscounted, discount }) => {
    return (
        <>
            <h3
                style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-sans)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.4,
                    wordBreak: 'break-word',
                }}
            >
                {title}
            </h3>

            <div className="mt-auto mb-4 w-100">
                {isDiscounted ? (
                    <>
                        <div
                            style={{
                                color: 'var(--text-muted)',
                                textDecoration: 'line-through',
                                fontSize: '0.85rem',
                                marginBottom: '2px',
                            }}
                        >
                            ${price.toFixed(2)}
                        </div>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                            <span
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    color: 'var(--text-main)',
                                }}
                            >
                                ${(price * (1 - discount)).toFixed(2)}
                            </span>
                            <span
                                className="rounded"
                                style={{
                                    background:
                                        'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                                    color: '#fff',
                                    padding: '4px 8px',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                }}
                            >
                                {(discount * 100).toFixed(0)}% OFF
                            </span>
                        </div>
                    </>
                ) : (
                    <div
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            color: 'var(--text-main)',
                            marginTop: '0.5rem',
                        }}
                    >
                        ${price.toFixed(2)}
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductInfo;
