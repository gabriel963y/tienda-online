import { Container, Row, Col } from 'react-bootstrap';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
    return (
        <div style={{ background: 'var(--bg-subtle)', minHeight: '100vh', paddingBottom: '5rem' }}>
            <ContactHero />

            <Container>
                <Row className="g-5">
                    <Col lg={7}>
                        <ContactForm />
                    </Col>
                    <Col lg={5}>
                        <ContactInfo />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
