import {createContext, useState, useEffect} from 'react';

const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [amount, setAmount] = useState(1)
    let [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const getItems = JSON.parse(localStorage.getItem('items'))
        if (getItems !== null ) {
            setCartProducts(getItems)
            setCartTotal(JSON.parse(localStorage.getItem('totalCart')))
        }
    }, [])

    const getProductQuantity = (id) => {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }
    
    // add product in cart
    const addToCart = (item) => {
        const quantity = getProductQuantity(item.id);

        if (quantity === 0) {
            localStorage.setItem('items', JSON.stringify([...cartProducts, {
                id: item.id,
                img:item.img,
                title:item.title,
                quantity: amount,
                price:item.price,
                total:item.price * amount
            }]))
           
            setCartProducts(JSON.parse(localStorage.getItem('items')))
        } else {
            localStorage.setItem('items', JSON.stringify(
                cartProducts.map(product=> product.id === item.id ? 
                    {...product, quantity: product.quantity + amount} : product)))
                    
            setCartProducts(JSON.parse(localStorage.getItem('items')))
        }
    
    }

    // remove all from cart
    const removeAll = () => {
        localStorage.clear()
        setCartProducts([]);
        setCartTotal(0);
    }

    // decrease the amount from the cart 
    const removeOneFromCart = (item) => {
      
        setCartTotal(cartTotal -= item.price)
        localStorage.setItem('totalCart', JSON.stringify(cartTotal))

        const quantity = getProductQuantity(item.id);

        if (quantity === 1) {
            localStorage.setItem("items", JSON.stringify(
                cartProducts.filter((product) => product.id !== item.id))
            )

            setCartProducts(JSON.parse(localStorage.getItem('items'))) 
           
        } else {
            localStorage.setItem("items", JSON.stringify(
                cartProducts.map(product => product.id === item.id ? {
                    ...product, quantity: product.quantity - 1, total: product.total - product.price} : product)
            ))

            setCartProducts(JSON.parse(localStorage.getItem('items')))
            
        }
    }

    // increase the amount from the cart 
    const addOneToCart = (item) => {

        localStorage.setItem("items", JSON.stringify(
            cartProducts.map(product => product.id === item.id ? {
                ...product, quantity: product.quantity + 1, total: product.total + product.price} : product)
        ))

        setCartProducts(JSON.parse(localStorage.getItem('items')))

        setCartTotal(cartTotal += item.price)

        localStorage.setItem('totalCart', JSON.stringify(cartTotal))

    }

    // add amount of the product
    const addOne = () =>{
        setAmount(amount + 1) 
    }
    const minusOne = () => {
        amount > 1 && setAmount(amount -1);
    }

    const setTotal = (item) => {
        setCartTotal(cartTotal += item.price * amount)
        localStorage.setItem('totalCart', JSON.stringify(cartTotal))
    }


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