import './CartApp.css'
import { NavBarComponent } from './components/NavBarComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'

export const CartApp = () => {
    return (
        <div>
            <NavBarComponent />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<ProductPage />}></Route>
                    <Route path="/cart" element={<CartPage />}></Route>
                    <Route path="/*" element={<Navigate to="/" />}></Route>
                </Routes>
            </div>
        </div>
    )
}
