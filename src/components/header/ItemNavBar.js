import { NavLink } from "react-router-dom";

const ItemNavBar = ({ links }) => {
  return (
    <>
      {links.map((mapeo) => {
        return (
            <li key={mapeo.id}>
              <NavLink  to={mapeo.href}>
                {mapeo.nombre}
                <span className="material-icons">{mapeo.icono}</span>
              </NavLink>
            </li>
        )
      })}
    </>
    )
}
export default ItemNavBar;