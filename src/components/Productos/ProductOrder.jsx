import { useState } from 'react';
import { FiChevronRight, FiList } from 'react-icons/fi';

const ProductOrder = ({ onSelectOrder }) => {
    const [active, setActive] = useState('az');

    const handleSelect = (val) => {
        setActive(val);
        onSelectOrder(val);
    };

    const options = [
        { id: 'precio-asc', label: 'Menor precio' },
        { id: 'precio-desc', label: 'Mayor precio' },
        { id: 'az', label: 'Alfabéticamente (A-Z)' },
        { id: 'novedades', label: 'Novedades' },
        { id: 'populares', label: 'Populares' },
    ];

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
                <FiList className="text-muted" /> Ordenar por
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                {options.map((opt) => (
                    <li key={opt.id}>
                        <button
                            className="w-100 text-start border-0 bg-transparent d-flex align-items-center justify-content-between p-2 rounded"
                            onClick={() => handleSelect(opt.id)}
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.9rem',
                                fontWeight: active === opt.id ? 700 : 500,
                                color:
                                    active === opt.id
                                        ? 'var(--accent-primary)'
                                        : 'var(--text-muted)',
                                transition: 'all 0.2s ease',
                                background:
                                    active === opt.id ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                            }}
                            onMouseEnter={(e) => {
                                if (active !== opt.id) {
                                    e.currentTarget.style.color = 'var(--text-main)';
                                    e.currentTarget.style.background = 'rgba(0,0,0,0.02)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (active !== opt.id) {
                                    e.currentTarget.style.color = 'var(--text-muted)';
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            <span>{opt.label}</span>
                            <FiChevronRight
                                style={{
                                    opacity: active === opt.id ? 1 : 0,
                                    transform:
                                        active === opt.id ? 'translateX(0)' : 'translateX(-10px)',
                                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default ProductOrder;
