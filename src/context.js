import { createContext, useContext, useState } from "react";

const contexto = createContext()
export const { Provider } = contexto
export const useContexto = () =>{
    return useContext(contexto)
}

const CustomProvider = ({children}) =>{
    
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState([])
    const [valorTotal, setValorTotal] = useState(0)

    const agregarCarrito = (cantidad, productoDetail) =>{
        const id = productoDetail.id
        if(isInCart(id)){
            const copiaCarrito = [...carrito]
            let match = copiaCarrito.find((p)=>p.id === id)
            match.cantidad = match.cantidad + cantidad
            setCarrito([...copiaCarrito])
        }else{
            const copiaProducto = {...productoDetail, cantidad}
            setCarrito ([...carrito, copiaProducto])
        }
        const copiaProductoValor = {...productoDetail, cantidad}
        const valorCantidad = copiaProductoValor.precio*cantidad
        setValorTotal(valorTotal + valorCantidad)
        setCantidadTotal (cantidadTotal + cantidad)
    }
    const borrarCarrito = (id, cantidad, precio) =>{ 
        const filtro = carrito.filter(e=>(e.id) !== id)
        setCarrito(filtro)
        setCantidadTotal(cantidadTotal - cantidad)
        setValorTotal (valorTotal - precio*cantidad)
    }
    const limpiarCarrito = () =>{
        setCarrito([])
        setCantidadTotal(0)
        setValorTotal(0)
    }
    const isInCart = (id) =>{
        return carrito.some(p => p.id === id)
    } 
    const valorContexto = {
        carrito,
        cantidadTotal,
        valorTotal,
        agregarCarrito,
        borrarCarrito,
        limpiarCarrito,
        isInCart,
    }
    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}
export default CustomProvider