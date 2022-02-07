import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {collection , doc , getDoc} from 'firebase/firestore'
import {db} from '../../../firebase'

const ItemDetailContainer=()=> {  

    const [detail, setDetail] = useState({});
    const {id} = useParams()

    useEffect(()=>{
        const productosCollection = collection(db, 'listaProductos')
        const refDoc = doc(productosCollection, id)
        getDoc(refDoc)
            .then((res)=>{
                setDetail(res.data())
            })
    }, [id])
    
    return(
        <>       
            {detail.length === 0?(
                <h2>Cargando detalles...</h2>
            ): (
                <ItemDetail productoDetail={detail} />
            )}
        </>
    )
}

export default ItemDetailContainer