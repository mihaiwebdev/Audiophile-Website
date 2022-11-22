import {createContext, useState} from 'react';

const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    
    const [cartProducts, setCartProducts] = useState([]);


    const getProductQuantity = (id) => {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }


    
    // add products in cart
    const addToCart = (item) => {
        const quantity = getProductQuantity(item.id);

        if (quantity === 0) {
            setCartProducts([
                ...cartProducts,
                {
                    id:item.id,
                    img:item.img,
                    title:item.title,
                    quantity: amount,
                    price:item.price,
                    total:item.price
                }
            ])
        } else {
            setCartProducts(
                cartProducts.map(product=> product.id === item.id ? 
                    {...product, quantity: product.quantity + amount} : product)
            )
        }
    
    }

    // remove all from cart
    const removeAll = () => {
        setCartProducts([]);
        setCartTotal(0);
    }

    // remove one from cart 
    const removeOneFromCart = (item) => {
      
        const quantity = getProductQuantity(item.id);

        if (quantity === 1) {
            setCartProducts(
                cartProducts.filter((product) => product.id !== item.id)
            )
            setCartTotal(cartTotal - item.price);
           
        } else {
            setCartProducts(
                cartProducts.map(product => product.id === item.id ? {...product, quantity: product.quantity - 1} : product)
            )
            setCartTotal(cartTotal - item.price);
            
        }
    }

    // add one to cart 
    const addOneToCart = (item) => {

        setCartProducts(
            cartProducts.map(product => product.id === item.id ? {...product, quantity: product.quantity + 1} : product)
        );

        setCartTotal(cartTotal + item.price);
       

    }




    // add amount of the product
    const [amount, setAmount] = useState(1)
    const addOne = () =>{
        setAmount(amount + 1) 
    }
    const minusOne = () => {
        amount > 1 && setAmount(amount -1);
    }

    let [cartTotal, setCartTotal] = useState(0)
    const setTotal = (item) => setCartTotal(cartTotal += item.price * amount);

    return <ProductContext.Provider value={{
        amount,
        cartProducts,
        cartTotal,
        getProductQuantity,
        setTotal,
        addToCart,
        addOne,
        minusOne,
        setAmount,
        removeAll,
        removeOneFromCart,
        addOneToCart,
        
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContext