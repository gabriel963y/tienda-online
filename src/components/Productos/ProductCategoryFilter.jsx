import { useState } from 'react';
import useProducts from '../../hooks/useProducts.js';
import { FiTag, FiCheck } from 'react-icons/fi';

const ProductCategoryFilter = ({ onSelectCategory }) => {
    const products = useProducts();
    const categories = [...new Set(products.map((p) => p.category))].sort();

    const [active, setActive] = useState(null);

    const handleSelect = (cat) => {
        setActive(cat);
        onSelectCategory(cat);
    };

    return (
        <aside className="mb-4">
            <h5
                className="mb-4 d-flex align-items-center gap-2"
                style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-main)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                }}
            >
                <FiTag className="text-muted" /> Categorías
            </h5>
            <ul className="d-flex flex-column gap-2 mb-0 list-unstyled">
                <li>
                    <button
                        className="w-100 text-start border-0 bg-transparent d-flex align-items-center p-2 rounded"
                        onClick={() => handleSelect(null)}
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9rem',
                            fontWeight: active === null ? 700 : 500,
                            color: active === null ? 'var(--accent-primary)' : 'var(--text-muted)',
                            transition: 'all 0.2s ease',
                            background:
                                active === null ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                            if (active !== null) {
                                e.currentTarget.style.color = 'var(--text-main)';
                                e.currentTarget.style.background = 'rgba(0,0,0,0.02)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (active !== null) {
                                e.currentTarget.style.color = 'var(--text-muted)';
                                e.currentTarget.style.background = 'transparent';
                            }
                        }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-center me-2 rounded"
                            style={{
                                width: '20px',
                                height: '20px',
                                border: `1.5px solid ${active === null ? 'var(--accent-primary)' : 'var(--border-light)'}`,
                                background:
                                    active === null ? 'var(--accent-primary)' : 'transparent',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            {active === null && <FiCheck size={12} color="#fff" />}
                        </div>
                        Todos los productos
                    </button>
                </li>

                {categories.map((cat) => (
                    <li key={cat}>
                        <button
                            className="w-100 text-start border-0 bg-transparent d-flex align-items-center p-2 rounded"
                            onClick={() => handleSelect(cat)}
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.9rem',
                                fontWeight: active === cat ? 700 : 500,
                                color:
                                    active === cat ? 'var(--accent-primary)' : 'var(--text-muted)',
                                transition: 'all 0.2s ease',
                                background:
                                    active === cat ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                            }}
                            onMouseEnter={(e) => {
                                if (active !== cat) {
                                    e.currentTarget.style.color = 'var(--text-main)';
                                    e.currentTarget.style.background = 'rgba(0,0,0,0.02)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (active !== cat) {
                                    e.currentTarget.style.color = 'var(--text-muted)';
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center me-2 rounded"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    border: `1.5px solid ${active === cat ? 'var(--accent-primary)' : 'var(--border-light)'}`,
                                    background:
                                        active === cat ? 'var(--accent-primary)' : 'transparent',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {active === cat && <FiCheck size={12} color="#fff" />}
                            </div>
                            <span style={{ textTransform: 'capitalize' }}>{cat}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default ProductCategoryFilter;
