import { Image, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import BlogPostTags from './BlogPostTags';
import { Link } from 'react-router-dom';

function BlogPostCard({ id, title, date, category, image, description, tags, seleccionarTag }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="mb-4"
            style={{
                background: 'var(--bg-light)',
                border: '1px solid var(--border-light)',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: isHovered ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Row className="align-items-stretch g-4">
                <Col md={5}>
                    <Link
                        to={`/blog/${id}`}
                        className="d-block text-decoration-none h-100 position-relative overflow-hidden"
                        style={{ borderRadius: '14px' }}
                    >
                        <Image
                            src={image}
                            alt={title}
                            fluid
                            style={{
                                width: '100%',
                                height: '100%',
                                minHeight: '200px',
                                objectFit: 'cover',
                                transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '12px',
                                left: '12px',
                                background: 'rgba(16, 185, 129, 0.9)',
                                backdropFilter: 'blur(8px)',
                                color: '#fff',
                                padding: '4px 12px',
                                borderRadius: '100px',
                                fontSize: '0.7rem',
                                fontWeight: 800,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            }}
                        >
                            {category}
                        </div>
                    </Link>
                </Col>

                <Col md={7} className="d-flex flex-column text-start py-2">
                    <div className="mb-2 d-flex align-items-center gap-2">
                        <small
                            style={{
                                color: 'var(--text-muted)',
                                fontFamily: 'var(--font-tech)',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                            }}
                        >
                            {date}
                        </small>
                        <span
                            style={{
                                width: '4px',
                                height: '4px',
                                background: 'var(--border-light)',
                                borderRadius: '50%',
                            }}
                        ></span>
                        <span
                            style={{
                                color: 'var(--accent-secondary)',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                            }}
                        >
                            Lectura de 5 min
                        </span>
                    </div>

                    <Link to={`/blog/${id}`} className="text-decoration-none">
                        <h4
                            className="mb-3"
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 800,
                                color: isHovered ? 'var(--accent-primary)' : 'var(--text-main)',
                                transition: 'color 0.3s ease',
                                lineHeight: 1.3,
                            }}
                        >
                            {title}
                        </h4>

                        <p
                            style={{
                                fontFamily: 'var(--font-sans)',
                                color: 'var(--text-muted)',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }}
                        >
                            {description}
                        </p>
                    </Link>

                    <div className="mt-auto pt-3">
                        <BlogPostTags tags={tags} seleccionarTag={seleccionarTag} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default BlogPostCard;
