import { useState } from 'react';

function BlogPostTags({ tags, seleccionarTag }) {
    return (
        <div className="d-flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <TagButton key={index} tag={tag} onClick={() => seleccionarTag(tag)} />
            ))}
        </div>
    );
}

const TagButton = ({ tag, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            style={{
                background: isHovered ? 'var(--accent-primary)' : 'rgba(16, 185, 129, 0.08)',
                color: isHovered ? '#fff' : 'var(--accent-primary)',
                border: '1px solid',
                borderColor: isHovered ? 'var(--accent-primary)' : 'rgba(16, 185, 129, 0.2)',
                borderRadius: '100px',
                padding: '4px 12px',
                fontFamily: 'var(--font-tech)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isHovered ? '0 4px 12px rgba(16, 185, 129, 0.3)' : 'none',
                transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            #{tag}
        </button>
    );
};

export default BlogPostTags;
