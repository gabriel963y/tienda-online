

const ProductOrder = ({ onSelectOrder }) => {
    return (
        <aside className="mb-4">
            <h5 className="mb-4">Ordenar por</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
                <li style={{cursor: 'pointer'}} className="link-secondary" onClick={() => {onSelectOrder("precio-asc")}}>Precio:   menor a mayor</li>
                <li style={{cursor: 'pointer'}} className="link-secondary" onClick={() => {onSelectOrder("precio-desc")}}>Precio:   mayor a menor</li>
                <li style={{cursor: 'pointer'}} className="link-secondary" onClick={() => {onSelectOrder("az")}}>Alfabéticamente (A-Z)</li>
                <li style={{cursor: 'pointer'}} className="link-secondary" onClick={() => {onSelectOrder("novedades")}}>Novedades</li>
                <li style={{cursor: 'pointer'}} className="link-secondary" onClick={() => {onSelectOrder("populares")}}>Populares</li>
            </ul>
        </aside>
    );
};

export default ProductOrder;