/* 
    i'm on to all of our different components to have access to the product information
    on our web page
 */

    const productArray = [
        {
            id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
            title: "Coffee",
            price: 4.99
        },
        {
            id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
            title: "Sunglasses",
            price: 9.99
        },
        {
            id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
            title: "Camera",
            price: 39.99
        }
    ];
    
    function getProductData(id) {
        let productData = productArray.find(product => product.id === id);
    
        if (productData == undefined) {
            console.log("Product data does not exist for ID: " + id);
            return undefined;
        }
    
        return productData;
    }
    
    export { productArray, getProductData };