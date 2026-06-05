import React from 'react'
import { useContext } from 'react'
import { children } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { toast, Slide } from 'react-toastify'

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto, cantidad = 1) => {
        const notificacionCarrito = () => toast.success(`${cantidad} ${cantidad >= 2 ? "productos agregados":"producto agregado"} al carrito!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
        })

        setCarrito((carritoAnterior) => {
            const productoNormalizado = {
                id: producto.id,
                nombre: producto.nombre || producto.title,
                precio: producto.precio || producto.price,
                imagen: producto.imagen || producto.image,
            }



            const yaExiste = carritoAnterior.some(item => item.id === producto.id)

            if (yaExiste) {
                return carritoAnterior.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                )
            }
            return [...carritoAnterior, { ...productoNormalizado, cantidad: cantidad }]
        })

        notificacionCarrito()
    }

    const actualizarCantidad = (productoId, cantidad) => {
        setCarrito((carritoAnterior) =>
            carritoAnterior.map(producto => productoId === producto.id
                ? { ...producto, cantidad: Math.max(1, producto.cantidad + cantidad) }
                : producto
            )
        )
    }

    const eliminarProducto = (productoId) => {
        setCarrito((carritoAnterior) => carritoAnterior.filter((producto) =>
            productoId !== producto.id
        ))
    }


    const vaciarCarrito = () => {
        setCarrito([])
    }




    return (
        <CartContext.Provider value={{ carrito, vaciarCarrito, agregarAlCarrito, actualizarCantidad, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)