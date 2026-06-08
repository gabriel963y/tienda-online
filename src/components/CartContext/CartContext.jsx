import React, { createContext, useContext, useState, useEffect } from 'react';
import { addCartItem, updateCartItemQuantity, removeCartItem } from '../../services/cartServices';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Inicializar desde localStorage para no perder el carrito al recargar
    const [carrito, setCarrito] = useState(() => {
        try {
            const guardado = localStorage.getItem('cart');
            return guardado ? JSON.parse(guardado) : [];
        } catch (error) {
            return [];
        }
    });

    // Guardar en localStorage cada vez que el carrito cambie y avisar a la app
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(carrito));
        window.dispatchEvent(new Event('cart-updated'));
    }, [carrito]);

    const agregarAlCarrito = (producto, cantidad = 1) => {
        setCarrito((carritoAnterior) => addCartItem(carritoAnterior, producto, cantidad));
    };

    const actualizarCantidad = (productoId, cantidad) => {
        setCarrito((carritoAnterior) =>
            updateCartItemQuantity(carritoAnterior, productoId, cantidad)
        );
    };

    const eliminarProducto = (productoId) => {
        setCarrito((carritoAnterior) => removeCartItem(carritoAnterior, productoId));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                vaciarCarrito,
                agregarAlCarrito,
                actualizarCantidad,
                eliminarProducto,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
