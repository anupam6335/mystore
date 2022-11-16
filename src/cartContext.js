                    // CART CONTEXT FUNCTIONALITY

/* 
    context is particulary nice when you need data or functions that are necessary throught a bunch
    of different parts of your application
 */

import { createContext, useState } from 'react';
import { productArray, getProductData } from './productStore';

// context kind of have flow where you have the actual context so you can imagine your cart add to cart
// you know remove cart just you know this more like pesudo code 
// context ( cart, addToCart, removeCart )
// provider => gives your react app acess to all the things in your context
export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export const CartProvider = ( { children } ) => {
        {/* anything inside the cardProviders are children */}
        const [ cartProducts, setCartProducts ] = useState([]);
        // cartProducts = [ { id: 1, quantity: 2 } ]

        function getProductQuantity( id ) {
            const quantity = cartProducts.find( product => product.id === id)?.quantity;
            if(quantity === undefined) return 0;
            return quantity;
        }

        function addOneToCart( id ) {
            const quantaity = getProductQuantity( id );

            if( quantaity === 0) {
                // product is not in cart
                setCartProducts(
                    [
                        ...cartProducts,
                        {
                            id: id,
                            quantaity: 1
                        }
                    ]
                )
            }else {
                // already product present in the cart
                setCartProducts(
                    cartProducts.map(
                        product => product.id === id ? {...product, quantaity: product.quantaity +1 } : product
                    )
                )
            }
        }

        function removeOneFromCart( id ) {
            const quantaity = getProductQuantity( id );
            if(quantaity === 2) {
                deleteFromCart( id );
            }else {
                setCartProducts(
                    cartProducts.map(
                        product => product.id === id ? {...product, quantaity: product.quantaity - 1 } : product
                    )
                )
            }
        }

        function deleteFromCart( id ) {
            setCartProducts(
                // if object meets a condition, add the object to array
                cartProducts => cartProducts.filter(currentProduct => {
                    return currentProduct.id != id;
                })
            )
        }

        function getTotalCost() {
            let totalCost = 0;
            cartProducts.map( ( cartItem )  => {
                const productData = getProductData( cartItem.id );
                totalCost += ( productData.price * cartItem.quantaity );
            })
            return totalCost;
        }
        const contextValue = {
            items: [],
            getProductQuantity,
            addOneToCart,
            removeOneFromCart,
            deleteFromCart,
            getTotalCost
        }
        return  (
            <CartContext.Provider value={ contextValue }>
                { children }
            </CartContext.Provider>
        )
};

export default CartProvider;