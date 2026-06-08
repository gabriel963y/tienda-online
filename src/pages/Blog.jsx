import { Container, Row, Col } from 'react-bootstrap';
import BlogSideBar from '../components/Blog/sidebar/BlogSideBar';
import BlogPosts from '../components/Blog/blogPosts/BlogPosts';
import BlogHero from '../components/Blog/BlogHero';

const Blog = () => {
    return (
        <div
            style={{
                background: 'var(--bg-main)',
                minHeight: '100vh',
                transition: 'background-color 0.3s ease',
            }}
        >
            <BlogHero />

            <Container className="mb-5 pb-5">
                <Row className="g-5">
                    <Col lg={8}>
                        <div className="d-flex align-items-center mb-4 gap-3">
                            <h4
                                className="m-0"
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontWeight: 800,
                                    fontSize: '1.5rem',
                                    color: 'var(--text-main)',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                Últimos Posts
                            </h4>
                            <div
                                style={{
                                    flex: 1,
                                    height: '1px',
                                    background: 'var(--border-light)',
                                }}
                            ></div>
                        </div>
                        <BlogPosts />
                    </Col>

                    <Col lg={4}>
                        <BlogSideBar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;
