/* 
    i'm on to all of our different components to have access to the product information
    on our web page
 */

export const productArray = [
    {
        id: '1',
        title: 'Coffee',
        price: 299
    },
    {
        id: '2',
        title: 'iPhone',
        price: 129999
    },
    {
        id: '3',
        title: 'Camera',
        price: 58999
    }
]

export function getProducts ( id ) {
    let productData = productArray.find(product => product.id === id);

    // if product does not exist
    if(productData === undefined) return undefined;

    return productData;
}

// export { productArray, getProducts};