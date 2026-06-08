import { useState } from 'react';
import { FiDollarSign, FiChevronRight } from 'react-icons/fi';

const ProductPriceFilter = ({ onPriceChange }) => {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [activeRange, setActiveRange] = useState(null);

    const handleApply = () => {
        const finalMin = min === '' ? 0 : Number(min);
        const finalMax = max === '' ? 99999999 : Number(max);

        setActiveRange('custom');
        onPriceChange(finalMin, finalMax);
    };

    const handlePredefined = (id, minVal, maxVal) => {
        setActiveRange(id);
        setMin('');
        setMax('');
        onPriceChange(minVal, maxVal);
    };

    const ranges = [
        { id: '1', label: 'Hasta $7.500', min: 0, max: 7500 },
        { id: '2', label: '$7.500 a $15.000', min: 7501, max: 15000 },
        { id: '3', label: 'Más de $15.000', min: 15001, max: 99999999 },
    ];

    return (
        <div className="mb-4">
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
                <FiDollarSign className="text-muted" /> Precio
            </h5>

            <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                {ranges.map((range) => (
                    <li key={range.id}>
                        <button
                            className="w-100 text-start border-0 bg-transparent d-flex align-items-center p-2 rounded"
                            onClick={() => handlePredefined(range.id, range.min, range.max)}
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.9rem',
                                fontWeight: activeRange === range.id ? 700 : 500,
                                color:
                                    activeRange === range.id
                                        ? 'var(--accent-primary)'
                                        : 'var(--text-muted)',
                                transition: 'all 0.2s ease',
                                background:
                                    activeRange === range.id
                                        ? 'rgba(16, 185, 129, 0.08)'
                                        : 'transparent',
                            }}
                            onMouseEnter={(e) => {
                                if (activeRange !== range.id) {
                                    e.currentTarget.style.color = 'var(--text-main)';
                                    e.currentTarget.style.background = 'rgba(0,0,0,0.02)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeRange !== range.id) {
                                    e.currentTarget.style.color = 'var(--text-muted)';
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            <div
                                className="me-2 rounded-circle"
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    border: `2px solid ${activeRange === range.id ? 'var(--accent-primary)' : 'var(--border-light)'}`,
                                    background:
                                        activeRange === range.id
                                            ? 'var(--accent-primary)'
                                            : 'transparent',
                                    boxShadow:
                                        activeRange === range.id
                                            ? '0 0 0 2px rgba(16, 185, 129, 0.2)'
                                            : 'none',
                                    transition: 'all 0.2s ease',
                                }}
                            />
                            {range.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div
                className="p-3 rounded"
                style={{
                    background: 'rgba(0,0,0,0.02)',
                    border: '1px solid var(--border-light)',
                    transition: 'all 0.3s ease',
                    boxShadow:
                        activeRange === 'custom' ? 'inset 0 0 0 1px var(--accent-primary)' : 'none',
                }}
            >
                <div
                    style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                    }}
                >
                    Rango Personalizado
                </div>
                <div className="d-flex align-items-center gap-2">
                    <input
                        type="number"
                        placeholder="Mín"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                        style={{
                            width: '100%',
                            background: 'var(--bg-light)',
                            border: '1px solid var(--border-light)',
                            color: 'var(--text-main)',
                            borderRadius: '8px',
                            padding: '8px 12px',
                            fontSize: '0.85rem',
                            outline: 'none',
                            transition: 'border-color 0.2s ease',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                    />
                    <span style={{ color: 'var(--text-muted)' }}>-</span>
                    <input
                        type="number"
                        placeholder="Máx"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                        style={{
                            width: '100%',
                            background: 'var(--bg-light)',
                            border: '1px solid var(--border-light)',
                            color: 'var(--text-main)',
                            borderRadius: '8px',
                            padding: '8px 12px',
                            fontSize: '0.85rem',
                            outline: 'none',
                            transition: 'border-color 0.2s ease',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                    />
                    <button
                        onClick={handleApply}
                        className="d-flex align-items-center justify-content-center border-0"
                        style={{
                            width: '40px',
                            height: '36px',
                            flexShrink: 0,
                            background: 'var(--accent-primary)',
                            color: '#fff',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(16, 185, 129, 0.3)';
                        }}
                    >
                        <FiChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPriceFilter;
