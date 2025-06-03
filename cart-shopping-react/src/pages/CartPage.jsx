import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2';

export const CartPage = () => {
    const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext);

    const calculateTotal = () => {
        const result = shoppingList.length > 0 ? shoppingList.reduce((a, b) => (a.price * a.quantity) + (b.price * b.quantity)) : "";
        return Number(result).toFixed(2);
    }

    const handlerPurchase = () => {
        const productsPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n');
        Swal.fire({
            icon: "success",
            title: "The purchase has been successful",
            html: `<p>you buyed:</p> <pre>${productsPurchased}</pre>`
        })
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shoppingList && shoppingList.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.title}</th>
                                <td>{Number(product.price) * Number(product.quantity)}</td>
                                <td className='d-flex align-items-center'>
                                    <button className='btn btn-outline-primary' onClick={() => decrementQuantity(product.id)}>-</button>
                                    <button className='btn btn-primary'>{product.quantity}</button>
                                    <button className='btn btn-outline-primary' onClick={() => incrementQuantity(product.id)}>+</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger'
                                        onClick={() => removeProduct(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <th><b>Total: </b></th>
                        <td></td>
                        <td></td>
                        <td>${calculateTotal()}</td>
                    </tr>
                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" types="button" onClick={handlerPurchase}>Buy</button>
            </div>
        </>
    )
}
