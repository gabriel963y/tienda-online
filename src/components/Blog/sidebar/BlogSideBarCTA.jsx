import { Card } from "react-bootstrap"
function BlogSideBarCTA() {
    return (
        <Card className="border-0 bg-success text-white overflow-hidden my-5">


            <Card.Body className="p-4">

                <h4 className="fw-bold mb-4">
                    Colaborá con nuestro Blog
                </h4>

                <p className=" mb-0">
                    ¿Sos experto en tecnología? ¿Te apasiona el
                    desarrollo? Si querés colaborar con nuestro
                    blog, escribinos a:
                </p>

                <p
                    className="fw-bold mt-4"
                    style={{
                        fontSize: "0.9rem"
                    }}
                    >
                    contacto@NextGen.com
                </p>
            </Card.Body>
        </Card>
    )
}

export default BlogSideBarCTA