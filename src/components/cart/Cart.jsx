import {useContext} from 'react'
import ProductContext from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import {BsCart2} from 'react-icons/bs'

function Cart() {

    const {cartProducts, removeOneFromCart, addOneToCart, cartTotal, removeAll} = useContext(ProductContext);
    const itemsNum = () => cartProducts.reduce((sum, product)=> sum + product.quantity, 0);

    return (
        <div className="cart">
            <div className='container max-w-6xl px-5 mx-auto relative h-full'>
                <div id="cart-box" className="z-10  w-80 h-auto bg-white flex flex-col justify-center items-center py-8 rounded-lg absolute right-1/2 translate-x-2/4 top-24 sm:w-96 md:right-0 md:translate-x-0 md:mr-5">
                    {cartProducts.length < 1 ? 
                        <div>
                            <p className='text-gray-400 font-medium mb-6'>Your cart is empty</p>
                            <BsCart2  className='text-9xl font-bold text-black'/>
                        </div>
                        : <div className='w-full px-6'>
                            <div className='flex flex-row items-center justify-between '>
                                <h2 className='font-medium text-black text-lg'>Cart ({itemsNum()})</h2>
                                <button onClick={removeAll} className='text-sm text-gray-700 font-medium border-b my-0'>Remove all</button>
                            </div>
                            {cartProducts.map((item, index)=> (
                                <div key={index}>
                                    <div className='flex justify-between items-center my-6'>
                                        <div className='flex items-center justify-start '>
                                            <div className='w-16'>
                                            <div className={item.img.concat(' small')}></div>
                                            </div>
                                            <div className='flex flex-col items-start justify-center ml-2 text-start'>
                                                <h2 className='font-medium text-black text-base w-28'>{item.title}</h2>
                                                <p className='text-gray-400 text-base font-medium'>$ {item.price}</p>
                                            </div>
                                        </div>

                                        <div className='w-28 h-8 bg-gray-100 flex justify-between items-center '>
                                            <button onClick={() => removeOneFromCart(item)} className='font-medium text-gray-400 px-5 h-full'>-</button>
                                            <div className='text-black'>{item.quantity}</div>
                                            <button onClick={()=> addOneToCart(item)} className='font-medium text-gray-400 px-5 h-full'>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className='flex justify-between mb-8'>
                                <p className=' text-gray-400 text-lg'>TOTAL</p>
                                <h3 className='text-black text-lg font-medium'>$ {cartTotal}</h3>
                            </div>

                            <Link to='/checkout' className='py-3 font-bold tracking-wider bg-orange-400 px-10 lnk'>CHECKOUT</Link>
                            </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default Cart
