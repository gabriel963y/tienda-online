import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className="my-5 py-5 text-center">
            <h1 className="fw-bold mb-3">Blog de Novedades</h1>
            <p className="text-muted">
                Bienvenido a nuestro blog. Aquí encontrarás artículos, reseñas de productos y
                novedades sobre las últimas tendencias.
            </p>
        </Container>
    );
};

export default Blog;
