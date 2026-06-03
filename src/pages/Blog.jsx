import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BlogSideBar from '../components/Blog/sidebar/BlogSideBar';
import BlogPosts from '../components/Blog/blogPosts/BlogPosts';
const Blog = () => {
    return (
        <>
            <Container fluid className="text-center bg-success">
                <h1 className="py-5">
                    NextGen <span className="fw-bold">Blog</span>
                </h1>
            </Container>
            <Container className="my-5 text-center">

                <h4 className="fw-bold">
                    Tecnología para la Próxima Generación
                </h4>

                <p className="text-muted mt-4">
                    Descubrí novedades, reseñas y consejos sobre computadoras,
                    notebooks, periféricos, componentes y las últimas tendencias
                    tecnológicas para potenciar tu experiencia digital.
                </p>

            </Container>
            <Container className='mt-5 px-5 text-center'>
                <Row>
                    <Col lg={8} className='me-5'>
                        <h4 className="text-start fw-bold text-secondary mb-4">
                            Posts
                        </h4>
                        <BlogPosts></BlogPosts>
                    </Col>
                    <Col lg={3}>
                        <BlogSideBar></BlogSideBar>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blog;
