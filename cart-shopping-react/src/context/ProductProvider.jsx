import { useEffect, useState } from 'react';
import { ProductContext } from './ProductContext';
import Swa1 from "sweetalert2";

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const handleGetProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            Swa1.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            console.error(error)
        }
    }

    useEffect(() => {
        handleGetProducts();
    }, [])

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}
