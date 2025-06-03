import './CartApp.css'
import { NavBarComponent } from './components/NavBarComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'

export const CartApp = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <NavBarComponent />
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<ProductPage />}></Route>
                        <Route path="/cart" element={<CartPage />}></Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductProvider>
    )
}
