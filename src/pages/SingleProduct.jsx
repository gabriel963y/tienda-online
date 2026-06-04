import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import useProductStore from "../store/useProductStore"
import useCommentStore from "../store/useCommentStore"
import { Container, Row, Col, Image, Button, Form,} from 'react-bootstrap'

import Avatar from '../components/CustomerReviews/Avatar'
import StarRow from '../components/CustomerReviews/StarRow'
import { AVATAR_COLORS, likesToStars } from '../utils/reviewUtils'

import { useCart } from '../components/CartContext/CartContext' 
import CartOffcanvas from '../components/Header/CartOffcanvas'

function SingleProduct() {
    const { id } = useParams()

    const [cantidad, setCantidad] = useState(1)
    const [showCart, setShowCart] = useState(false)

    const { agregarAlCarrito } = useCart()

    const comprarAhora = () => {
        agregarAlCarrito(product, cantidad)
        setShowCart(true)

    }



    const { // para los productos
        products,
        loading,
        error,
        fetchProducts,
        hasFetched
    } = useProductStore()

    const product = products.find(
        item => item.id === Number(id)
    )

    const { // esto para los comentarios
        comments,
        loading: loadingComments,
        error: errorComments,
        hasFetched: hasFetchedComments,
        fetchComments
    } = useCommentStore()



    const comentario = comments.filter(
        reseña => reseña.id === Number(id)
    )

    useEffect(() => {
        if (!hasFetched) {
            fetchProducts()
        }
    }, [hasFetched, fetchProducts])

    useEffect(() => {
        if (!hasFetchedComments) {
            fetchComments()
        }
    }, [hasFetchedComments, fetchComments])




    if (loading) {
        return <p>Cargando...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (!product) {
        return <p>Producto no encontrado</p>
    }




    if (loadingComments) {
        return <p>Cargando comentarios</p>
    }

    if (errorComments) {
        return <p>error en comentarios: {errorComments}</p>
    }

    return (
        <>
        <Container className="my-4">
            <Link to="/productos" className="btn btn-outline-secondary rounded-pill px-4 mb-4">⬅ Volver a productos</Link>
            <Row>
                <Col md={4}>
                    <Image src={product.image} fluid />
                </Col>

                <Col md={6}>
                    <h1 className="fw-bold mb-3">{product.title}</h1>
                    <h3 className="text-success">Precio ${product.price}</h3>
                    <p className="text-muted">Estado: {product.condition}</p>
                    <p className="text-muted">Categoría: {product.category}</p>
                    <p className="text-muted">Descripcion: {product.description}</p>

                    <div className="d-flex align-items-center gap-2 mt-3">
                        <span>Stock disponible:</span>

                        <Button onClick={() => {
                            setCantidad(cantidad > 1 ? cantidad - 1 : 1)
                        }}>-</Button>
                        <span className="mx-3">{cantidad}</span>
                        <Button className="me-2" onClick={() => {
                            setCantidad(cantidad < 10 ? cantidad + 1 : 10)
                        }}>+</Button>

                    </div>

                    <div className="d-flex flex-wrap gap-2 mt-3">

                        <Button onClick={ () => { comprarAhora() } }>Comprar ahora</Button>
                        <Button onClick={ () =>
                        { agregarAlCarrito(product, cantidad)}}>Agregar al carrito</Button>

                    </div>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h4>Reseñas ({comentario.length})</h4>
                    <div className="d-flex flex-column gap-2 mt-3">
                        {comentario.length > 0 ? (
                            comentario.map((c, posActual) => {
                                const color = AVATAR_COLORS[posActual % AVATAR_COLORS.length];
                                const stars = likesToStars(c.likes);

                                return (
                                    <div key={c.id} className="cr-row-item">
                                        <Avatar
                                            name={c.user?.username}
                                            color={color}
                                            size={36}
                                        />

                                        <div className="cr-row-body-wrap">
                                            <div className="cr-row-header">
                                                <div className="cr-row-author-meta">
                                                    <span className="cr-row-name">
                                                        {c.user?.username}
                                                    </span>

                                                    <StarRow count={stars} size={15} />
                                                </div>
                                            </div>

                                            <p className="cr-row-body">
                                                "{c.body}"
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="text-muted">
                                No hay reseñas para este producto
                            </p>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>

        <CartOffcanvas show={showCart} onHide={() => setShowCart(false)} /> {/*cambia el estado y renderiza/oculta*/}

        </>

    )
}



export default SingleProduct