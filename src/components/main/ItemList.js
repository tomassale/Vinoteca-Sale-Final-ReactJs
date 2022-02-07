import Item from "./Item"

const ItemList  = ({prop}) =>{
    return(
        <>
            {prop.map((mapeo)=>(<Item key={mapeo.id} producto={mapeo}/>))}
        </>
    )
}
export default ItemList
