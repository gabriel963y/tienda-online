import { initials } from '../../utils/reviewUtils.js';

const Avatar = ({ name, color, size = 38 }) => (
    <div
        className="cr-avatar"
        style={{
            width: size,
            height: size,
            background: color,
            fontSize: size * 0.32,
        }}
    >
        {initials(name)}
    </div>
);

export default Avatar;
