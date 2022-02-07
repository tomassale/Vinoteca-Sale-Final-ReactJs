import { NavLink } from "react-router-dom"

const Item = ({producto}) =>{
    return(
        <div className="item">
            <div>
                <p className="nombre">{producto.nombre}</p>
                <div className="imagen">
                    <img src={producto.imagen} alt="vinos"/>
                </div>
                <NavLink to={`/Item/${producto.id}`}>
                    <button>Detalles del Producto</button>
                </NavLink>
            </div>
        </div>
    )
}
export default Item
