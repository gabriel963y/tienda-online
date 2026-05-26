import { FaStar } from 'react-icons/fa';

const StarRow = ({ count, size = 11 }) => (
    <span className="d-flex gap-1">
        {[...Array(5)].map((_, i) => (
            <FaStar
                key={i}
                size={size}
                style={{ color: i < count ? '#f59e0b' : 'var(--border-light)' }}
            />
        ))}
    </span>
);

export default StarRow;
