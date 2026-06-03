

const ProductosOrdenador = ({ onSeleccionarOrden }) => {
    return (
        <aside className="p-3 border rounded mt-3">
            <h5>Ordenar por</h5>
            <div className="d-flex flex-column gap-2">
                <span style={{cursor: 'pointer'}} className="link-secondary" onClick={() => {onSeleccionarOrden("precio-asc")}}>Precio: menor a mayor</span>
                <span style={{cursor: 'pointer'}} className="link-secondary" onClick={() => {onSeleccionarOrden("precio-desc")}}>Precio: mayor a menor</span>
                <span style={{cursor: 'pointer'}} className="link-secondary" onClick={() => {onSeleccionarOrden("az")}}>Alfabéticamente (A-Z)</span>
            </div>
        </aside>
    );
};

export default ProductosOrdenador;