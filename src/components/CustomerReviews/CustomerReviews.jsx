import { Container, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft, FaHeart } from 'react-icons/fa';
import useComments from '../../hooks/useComments.js';
import { AVATAR_COLORS, likesToStars } from '../../utils/reviewUtils.js';
import StarRow from './StarRow.jsx';
import Avatar from './Avatar.jsx';
import './CustomerReviews.css';

const CustomerReviews = () => {
    const { comments, loading } = useComments(8);

    const featured = comments[0];
    const rest = comments.slice(1);

    return (
        <section className="cr-section">
            <Container>
                {/* Encabezado */}
                <div className="mb-5">
                    <span className="cr-eyebrow-pill">Opiniones de los clientes</span>
                    <h2 className="cr-heading">
                        Lo que dice
                        <br />
                        <span
                            style={{
                                background:
                                    'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            nuestra comunidad
                        </span>
                    </h2>
                </div>

                {/* Estado de carga */}
                {loading && (
                    <div className="cr-loading">
                        <div className="cr-spinner" />
                        <span>Cargando opiniones...</span>
                    </div>
                )}

                {/* Contenido de las reseñas */}
                {!loading && featured && (
                    <Row className="g-0 align-items-stretch">
                        {/* Reseña destacada (Lado izquierdo) */}
                        <Col xs={12} lg={5} className="cr-featured mb-5 mb-lg-0">
                            {/* Marca de cita decorativa */}
                            <span className="cr-featured__quote">
                                <FaQuoteLeft size={80} style={{ opacity: 0.08 }} />
                            </span>

                            <p className="cr-featured__body">{featured.body}</p>

                            <div className="cr-featured__stars">
                                <StarRow count={likesToStars(featured.likes)} size={14} />
                            </div>

                            {/* Perfil del autor */}
                            <div className="cr-featured__author">
                                <Avatar
                                    name={featured.user?.fullName}
                                    color={AVATAR_COLORS[0]}
                                    size={48}
                                />
                                <div>
                                    <h4 className="cr-featured__name">{featured.user?.fullName}</h4>
                                    <p className="cr-featured__username">
                                        @{featured.user?.username}
                                    </p>
                                </div>

                                {/* Insignia de favoritos */}
                                <div className="ms-auto cr-like-badge">
                                    <FaHeart />
                                    <span>{featured.likes}</span>
                                </div>
                            </div>
                        </Col>

                        {/* Divisor (Escritorio) */}
                        <Col lg="auto" className="d-none d-lg-flex px-0">
                            <div className="cr-divider-col" />
                        </Col>

                        {/* Lista de reseñas (Lado derecho) */}
                        <Col xs={12} lg className="cr-row-list">
                            {rest.map((c, idx) => {
                                const color = AVATAR_COLORS[(idx + 1) % AVATAR_COLORS.length];
                                const stars = likesToStars(c.likes);
                                return (
                                    <div key={c.id} className="cr-row-item">
                                        <Avatar name={c.user?.fullName} color={color} size={36} />

                                        <div className="cr-row-body-wrap">
                                            <div className="cr-row-header">
                                                <div className="cr-row-author-meta">
                                                    <span className="cr-row-name">
                                                        {c.user?.fullName}
                                                    </span>
                                                    <StarRow count={stars} size={9} />
                                                </div>

                                                {/* Insignia de favoritos */}
                                                <div className="cr-like-badge">
                                                    <FaHeart />
                                                    <span>{c.likes}</span>
                                                </div>
                                            </div>
                                            <p className="cr-row-body">&ldquo;{c.body}&rdquo;</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </Col>
                    </Row>
                )}
            </Container>
        </section>
    );
};

export default CustomerReviews;
