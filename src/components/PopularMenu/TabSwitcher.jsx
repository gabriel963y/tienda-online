import { FaStar, FaShoppingBag, FaShoppingBasket } from 'react-icons/fa';

const TABS = [
    { key: 'beauty', icon: <FaStar />, label: 'Belleza', sub: 'Cuidado' },
    { key: 'fragrances', icon: <FaShoppingBag />, label: 'Perfumes', sub: 'Especiales' },
    { key: 'groceries', icon: <FaShoppingBasket />, label: 'Comestibles', sub: 'Diario' },
];

const TabSwitcher = ({ activeTab, onChange }) => (
    <div className="nav nav-pills justify-content-center gap-2 mb-5">
        {TABS.map((t) => {
            const isActive = activeTab === t.key;
            return (
                <button
                    key={t.key}
                    className={`nav-link px-4 py-2 rounded-pill fw-bold text-uppercase d-flex align-items-center gap-2 border ${
                        isActive ? 'text-white' : 'text-muted'
                    }`}
                    onClick={() => onChange(t.key)}
                    style={{
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.08em',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-light)',
                        borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-light)',
                        boxShadow: isActive
                            ? '0 8px 20px rgba(16, 185, 129, 0.25)'
                            : 'var(--card-shadow)',
                    }}
                >
                    {t.icon}
                    <span>{t.label}</span>
                </button>
            );
        })}
    </div>
);

export default TabSwitcher;
