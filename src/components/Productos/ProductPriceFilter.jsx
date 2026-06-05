import { useState } from 'react';

const ProductPriceFilter = ({ onPriceChange }) => {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    const handleApply = () => {
        const finalMin = min === '' ? 0 : Number(min);
        const finalMax = max === '' ? 99999999 : Number(max);
        
        onPriceChange(finalMin, finalMax);
    };
    return (
        <div className="mb-4">
            <h5 className="mb-4">Precio</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
                <li className="link-secondary" style={{cursor: 'pointer'}} onClick={() => onPriceChange(0, 7500)}>Hasta $7.500</li>
                <li className="link-secondary" style={{cursor: 'pointer'}} onClick={() => onPriceChange(7501, 15000)}>$7.500 a $15.000</li>
                <li className="link-secondary" style={{cursor: 'pointer'}} onClick={() => onPriceChange(15001, 99999999)}>Más de $15.000</li>
            </ul>
            <div className="d-flex align-items-center gap-2">
                <input type="number" className="form-control form-control-sm" placeholder="Mínimo" value={min} onChange={(e) => setMin(e.target.value)} />
                <span>—</span>
                <input type="number" className="form-control form-control-sm" placeholder="Máximo" value={max} onChange={(e) => setMax(e.target.value)} />
                <button className="btn btn-outline-secondary btn-sm" onClick={handleApply}>{'>'}</button>
            </div>
        </div>
    );
};

export default ProductPriceFilter;