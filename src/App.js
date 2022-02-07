import NavBar from "./components/header/NavBar"
import ItemListContainer from "./components/main/ItemListContainer"
import ItemDetailContainer from "./components/main/detail/ItemDetailContainer"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Carrito from "./components/main/context/Carrito"
import CustomProvider from './context'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () =>{
    return(
        <CustomProvider>
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting="Tomás"/>}/>
                        <Route path="/Carrito" element={<Carrito/>}/>
                        <Route path="/Categoria/:categoriaId" element={<ItemListContainer greeting="Tomás"/>}/>
                        <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
                    </Routes>
                <Footer/>
            </BrowserRouter>
        </CustomProvider>
    )
}
export default App