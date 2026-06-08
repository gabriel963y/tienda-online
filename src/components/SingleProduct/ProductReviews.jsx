import { Col, Row } from 'react-bootstrap';
import Avatar from '../CustomerReviews/Avatar';
import StarRow from '../CustomerReviews/StarRow';
import { AVATAR_COLORS } from '../../utils/reviewUtils';

const ProductReviews = ({ comments }) => {
    return (
        <div className="mt-5 pt-4">
            <h4
                className="mb-4"
                style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    letterSpacing: '-0.02em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                }}
            >
                Reseñas de Clientes
                <span
                    className="px-2 py-1 rounded-pill"
                    style={{
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: 'var(--accent-primary)',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                    }}
                >
                    {comments?.length || 0}
                </span>
            </h4>

            <Row className="g-4">
                {comments && comments.length > 0 ? (
                    comments.map((review, posActual) => {
                        const color = AVATAR_COLORS[posActual % AVATAR_COLORS.length];
                        const stars = review.rating || 3;

                        return (
                            <Col md={6} key={review.id || posActual}>
                                <div
                                    className="p-4 rounded-4 h-100"
                                    style={{
                                        background: 'var(--bg-light)',
                                        border: '1px solid var(--border-light)',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow =
                                            '0 10px 25px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow =
                                            '0 4px 15px rgba(0,0,0,0.02)';
                                        e.currentTarget.style.borderColor = 'var(--border-light)';
                                    }}
                                >
                                    <div className="d-flex align-items-center mb-3">
                                        <Avatar
                                            name={review.reviewerName || 'Usuario anónimo'}
                                            color={color}
                                            size={42}
                                        />
                                        <div className="ms-3">
                                            <h6
                                                className="mb-1"
                                                style={{
                                                    fontFamily: 'var(--font-sans)',
                                                    fontWeight: 700,
                                                    color: 'var(--text-main)',
                                                    margin: 0,
                                                }}
                                            >
                                                {review.reviewerName || 'Usuario anónimo'}
                                            </h6>
                                            <StarRow count={stars} size={14} />
                                        </div>
                                    </div>
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-sans)',
                                            color: 'var(--text-muted)',
                                            fontSize: '0.95rem',
                                            lineHeight: 1.6,
                                            margin: 0,
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        "{review.comment || review.body}"
                                    </p>
                                </div>
                            </Col>
                        );
                    })
                ) : (
                    <Col>
                        <div
                            className="p-5 text-center rounded-4"
                            style={{
                                background: 'var(--bg-subtle)',
                                border: '1px dashed var(--border-light)',
                            }}
                        >
                            <p
                                style={{
                                    color: 'var(--text-muted)',
                                    fontFamily: 'var(--font-sans)',
                                    margin: 0,
                                }}
                            >
                                Aún no hay reseñas para este producto. ¡Sé el primero en comentar!
                            </p>
                        </div>
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default ProductReviews;
