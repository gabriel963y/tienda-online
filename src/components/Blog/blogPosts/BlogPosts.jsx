import { useState } from 'react';
import BlogPostCard from './BlogPostCard';
import posts from '../postsTest';
import { FiX, FiFilter } from 'react-icons/fi';

function BlogPosts() {
    const [paginaActual, setPaginaActual] = useState(1);
    const [tagSeleccionado, setTagSeleccionado] = useState('');

    const postsPorPagina = 4;

    const postsFiltrados = tagSeleccionado
        ? posts.filter((post) => post.tags.includes(tagSeleccionado))
        : posts;

    const totalPaginas = Math.ceil(postsFiltrados.length / postsPorPagina);

    const indiceInicial = (paginaActual - 1) * postsPorPagina;
    const indiceFinal = indiceInicial + postsPorPagina;

    const postsVisibles = postsFiltrados.slice(indiceInicial, indiceFinal);

    function seleccionarTag(tag) {
        setTagSeleccionado(tag);
        setPaginaActual(1);
    }

    function limpiarFiltro() {
        setTagSeleccionado('');
        setPaginaActual(1);
    }

    return (
        <>
            {tagSeleccionado && (
                <div
                    className="d-flex align-items-center mb-4 p-3 rounded"
                    style={{
                        background: 'rgba(16, 185, 129, 0.05)',
                        border: '1px solid rgba(16, 185, 129, 0.15)',
                    }}
                >
                    <FiFilter className="me-2" style={{ color: 'var(--accent-primary)' }} />
                    <span
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.95rem',
                            color: 'var(--text-muted)',
                        }}
                    >
                        Filtrando por etiqueta:
                    </span>
                    <span
                        className="ms-2 px-3 py-1 rounded-pill"
                        style={{
                            background: 'var(--accent-primary)',
                            color: '#fff',
                            fontFamily: 'var(--font-tech)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}
                    >
                        #{tagSeleccionado}
                    </span>

                    <button
                        onClick={limpiarFiltro}
                        className="ms-auto d-flex align-items-center gap-1 border-0 bg-transparent"
                        style={{
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                        <FiX /> Limpiar filtro
                    </button>
                </div>
            )}

            <div>
                {postsVisibles.length > 0 ? (
                    postsVisibles.map((post) => (
                        <BlogPostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            date={post.date}
                            image={post.image}
                            description={post.description}
                            category={post.category}
                            tags={post.tags}
                            seleccionarTag={seleccionarTag}
                        />
                    ))
                ) : (
                    <div className="text-center py-5">
                        <p style={{ color: 'var(--text-muted)' }}>No se encontraron posts.</p>
                    </div>
                )}
            </div>

            {totalPaginas > 1 && (
                <div className="d-flex justify-content-center mt-5 mb-4 gap-2">
                    {Array.from({ length: totalPaginas }, (_, index) => {
                        const pageNum = index + 1;
                        const isActive = paginaActual === pageNum;

                        return (
                            <button
                                key={pageNum}
                                onClick={() => setPaginaActual(pageNum)}
                                className="border-0 rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    background: isActive
                                        ? 'var(--accent-primary)'
                                        : 'var(--bg-light)',
                                    color: isActive ? '#fff' : 'var(--text-main)',
                                    fontFamily: 'var(--font-tech)',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    border: isActive ? 'none' : '1px solid var(--border-light)',
                                    transition: 'all 0.2s ease',
                                    boxShadow: isActive
                                        ? '0 4px 12px rgba(16, 185, 129, 0.3)'
                                        : 'none',
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                        e.currentTarget.style.color = 'var(--accent-primary)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.borderColor = 'var(--border-light)';
                                        e.currentTarget.style.color = 'var(--text-main)';
                                    }
                                }}
                            >
                                {pageNum}
                            </button>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default BlogPosts;
