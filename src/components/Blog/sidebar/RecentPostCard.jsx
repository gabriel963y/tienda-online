import { Image } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function RecentPostCard({ id, title, date, image }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={`/blog/${id}`}
            className="d-flex gap-3 mb-3 text-decoration-none p-2 rounded"
            style={{
                background: isHovered ? 'var(--bg-card)' : 'transparent',
                transition: 'all 0.3s ease',
                border: '1px solid',
                borderColor: isHovered ? 'var(--border-light)' : 'transparent',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                style={{
                    width: '70px',
                    height: '70px',
                    flexShrink: 0,
                    borderRadius: '10px',
                    overflow: 'hidden',
                }}
            >
                <Image
                    src={image}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.5s ease',
                    }}
                />
            </div>

            <div className="text-start d-flex flex-column justify-content-center">
                <small
                    style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                    }}
                >
                    {date}
                </small>

                <h6
                    className="mb-0"
                    style={{
                        color: isHovered ? 'var(--accent-primary)' : 'var(--text-main)',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        lineHeight: 1.4,
                        transition: 'color 0.2s ease',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {title}
                </h6>
            </div>
        </Link>
    );
}

export default RecentPostCard;
