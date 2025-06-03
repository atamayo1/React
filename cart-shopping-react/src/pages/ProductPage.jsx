import { useContext } from "react";
import { CardComponent } from "../components/CardComponent";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export const ProductPage = () => {
    const { products } = useContext(ProductContext);
    const { addProduct, removeProduct } = useContext(CartContext);
    return (
        <div>
            <h1>Products</h1>
            {
                products && products.map((product) => {
                    return (
                        <CardComponent key={product.id} {...product} handlerAdd={() => addProduct(product)} handlerRemove={() => removeProduct(product.id)} />
                    )
                })
            }
        </div>
    )
}
