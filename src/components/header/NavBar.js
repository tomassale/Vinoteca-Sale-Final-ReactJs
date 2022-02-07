import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { db } from '../../firebase'
import { collection, getDocs} from 'firebase/firestore'
import ItemNavBar from './ItemNavBar'
import CartWidget from './CartWidget'

const NavBar = () =>{
    
    const [link, setLink] = useState([])
    
    useEffect(()=>{
        const linksCollection = collection(db, 'navBar')
        getDocs(linksCollection)
            .then(({docs})=>{
                setLink(docs.map((doc)=>({id : doc.id, ...doc.data()})))
            })
    }, [link])
    
    return(
        <header>
            <nav>
                <NavLink to='/'>
                    <h1 id='casonaWine'>Casona Wine</h1>
                </NavLink>               
                <ul>
                    <ItemNavBar links={link}/>
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar