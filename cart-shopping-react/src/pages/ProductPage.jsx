import { useEffect, useState } from "react";
import Swa1 from "sweetalert2";

export const ProductPage = () => {
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
        <div>
            {
                products && products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
