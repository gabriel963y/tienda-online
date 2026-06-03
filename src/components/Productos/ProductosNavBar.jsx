import { Pagination } from "react-bootstrap";
import { useState } from "react";

const ProductosNavBar = () => {

        const [paginaActiva, setPaginaActiva] = useState(1);
        const paginas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

return(<div>
                <Pagination>
                <Pagination.Prev disabled={paginaActiva === 1} onClick={() => setPaginaActiva(paginaActiva-1)}/>
                {paginas.map((num) => (
                    <Pagination.Item 
                        key={num} 
                        active={num === paginaActiva} 
                        onClick={() => setPaginaActiva(num)}
                    >
                        {num}
                    </Pagination.Item>
                ))}
                <Pagination.Next disabled={paginaActiva === 10} onClick={() => setPaginaActiva(paginaActiva+1)} />
            </Pagination>
            </div>
        )
            }

export default ProductosNavBar