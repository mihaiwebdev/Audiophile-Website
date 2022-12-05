import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import {SiVerizon} from 'react-icons/si';


function Success() {

    const {cartProducts, cartTotal, removeAll} = useContext(ProductContext);
     
    return (
        <div id='successOrder' className='absolute container w-screen h-screen'>
            <div className="cart">
                <div className='container max-w-6xl px-5 mx-auto relative h-full'>
                    <div className="z-10 w-96 h-auto bg-white flex flex-col justify-center items-center py-8 rounded-lg absolute right-1/2 translate-x-2/4 top-24">
                        <div className="w-16 h-16 bg-orange-500 flex items-center justify-center rounded-full">
                            <SiVerizon  className="text-3xl text-white"/>
                        </div>
                        <h2 className="mt-4 font-medium text-lg">THANK YOU FOR YOUR ORDER</h2>
                        <p className="mt-2 text-gray-500 text-sm mb-8">You will receive an email confirmation shortly.</p>

                        <div className="bg-gray-100 pt-4  rounded-lg">

                            {cartProducts.map((item, index)=> (
                                <div key={index} className='flex items-center justify-between mx-6'>
                                    <div className="flex">
                                        <div className='w-16'>
                                        <div className={item.img.concat(' small')}></div>
                                        </div>
                                        <div className='flex flex-col items-start justify-center ml-2 text-start'>
                                            <h2 className='font-medium text-black text-sm w-28'>{item.title}</h2>
                                            <p className='text-gray-400 text-base font-medium'>$ {item.price}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 font-medium">x{item.quantity}</p>
                                </div>
                            ))}

                            <div className="w-full bg-black py-6mb-0 pr-36 pt-8">
                                <div className="flex flex-col justify-start font-medium ">
                                    <h3 className="text-gray-500 mt-4 ml-8">GRAND TOTAL</h3>
                                    <p className=" text-white font-bold ml-8 mb-6">$ {cartTotal + 50}</p>
                                </div>
                            </div>

                        </div>
                        <Link to='/' onClick={() => removeAll()} className=" btn text-white bg-orange-500 my-4">BACK TO HOME</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success
