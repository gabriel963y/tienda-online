import { useState, useEffect } from 'react';

export default function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=0');

                if (!response.ok)
                    throw new Error(`Error en la respuesta (Status: ${response.status})`);

                const data = await response.json();

                const formattedProducts = (data.products || []).map((item) => ({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.thumbnail,
                    link: `https://dummyjson.com/products/${item.id}`,
                    condition: 'new',
                    category: item.category,
                }));

                setProducts(formattedProducts);
            } catch (err) {
                console.error(err.message || 'Ocurrió un error al cargar los productos');
            }
        };

        fetchAllProducts();
    }, []);
    return products;
}
