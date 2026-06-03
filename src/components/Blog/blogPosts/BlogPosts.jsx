import { useState } from "react"
import BlogPostCard from "./BlogPostCard"
import posts from "../postsTest"
import Pagination from "react-bootstrap/Pagination"
import { Button } from "react-bootstrap"
function BlogPosts() {
    const [paginaActual, setPaginaActual] = useState(1)
    const [tagSeleccionado, setTagSeleccionado] = useState("")

    const postsPorPagina = 3

    const postsFiltrados = tagSeleccionado
        ? posts.filter((post) => post.tags.includes(tagSeleccionado))
        : posts

    const totalPaginas = Math.ceil(postsFiltrados.length / postsPorPagina)

    const indiceInicial = (paginaActual - 1) * postsPorPagina
    const indiceFinal = indiceInicial + postsPorPagina

    const postsVisibles = postsFiltrados.slice(indiceInicial, indiceFinal)

    function seleccionarTag(tag) {
        setTagSeleccionado(tag)
        setPaginaActual(1)
    }

    function limpiarFiltro() {
        setTagSeleccionado("")
        setPaginaActual(1)
    }

    return (
        <>
            {tagSeleccionado && (
                <div className="text-start mb-4">
                    <span className="text-muted">
                        Filtrando por:
                    </span>

                    <span className="badge bg-success text-uppercase ms-2">
                        {tagSeleccionado}
                    </span>

                    <Button
                        size="sm"
                        variant="outline-secondary"
                        className="ms-3"
                        onClick={limpiarFiltro}
                    >
                        Limpiar
                    </Button>
                </div>
            )}

            <div>
                {postsVisibles.map((post) => (
                    <BlogPostCard
                        id={post.id}
                        title={post.title}
                        date={post.date}
                        image={post.image}
                        description={post.description}
                        category={post.category}
                        tags={post.tags}
                        
                        seleccionarTag={seleccionarTag}
                    />
                ))}
            </div>

            <Pagination>
                {Array.from({ length: totalPaginas }, (_, index) => (
                    <Pagination.Item
                        key={index}
                        active={paginaActual === index + 1}
                        onClick={() => setPaginaActual(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </>
    )
}

export default BlogPosts