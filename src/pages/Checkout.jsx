import {useNavigate} from "react-router-dom";
import { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";
import {GiCash} from 'react-icons/gi';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {

    const navigate = useNavigate();

    const {cartProducts, cartTotal} = useContext(ProductContext)

    useEffect(() => {
        document.getElementById('e-money').checked = true;
    }, [])

    const checkEMoney = () => {
        document.getElementById('cashDetails').classList.add('hidden');
        document.getElementById('eMoneyDiv').classList.add('radio-label');
        document.getElementById('cashDiv').classList.remove('radio-label');
        document.getElementById('e-money').checked = true;
    }
    const checkCash = () => {
        document.getElementById('cashDetails').classList.remove('hidden');
        document.getElementById('cash').checked = true;
        document.getElementById('eMoneyDiv').classList.remove('radio-label');
        document.getElementById('cashDiv').classList.add('radio-label');
    }
   

    const handleSubmit = () => {
        document.getElementById('checkout-form').addEventListener('submit', (e) => {

            e.preventDefault();
            navigate("/success");
        })

    }
    

    return (
        <>
            <div className="flex flex-col items-center overflow-hidden mb-8 pb-14">
                <Navbar/>   
            </div>
            <div className="bg-gray-200">

                <div className="container max-w-6xl px-5 mx-auto bg-gray-200">

                    <button onClick={() => navigate(-1)} className=' lnk absolute text-start w-40 h-11 text-gray-500 text-sm font-medium mt-10'>Go Back</button>
                    <div className="flex flex-col items-start justify-center mt-28 md:flex-row">
                        <form  id="checkout-form" className="w-full bg-white  flex flex-col px-10 rounded-md mb-10 md:mb-32 md:mr-10 md:w-2/3">
                            <h1 className="text-black text-3xl font-medium mt-10 ">CHECKOUT</h1>

                            <p className="text-orange-600 font-medium text-sm  mt-8 tracking-wider">BILLING DETAILS</p>
                            <div className="mt-6 grid sm:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-sm font-medium mb-4">Name</label>
                                    <input type="text" name="name" placeholder="John Doe" required  className="py-3 border rounded-md px-4"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-sm font-medium mb-4">Email Address</label>
                                    <input type="email" name="email" placeholder="example@example.com" required className="py-3 border rounded-md px-4"/>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="phone" className="text-sm font-medium mb-4">Phone Number</label>
                                    <input type="number" name="phone" placeholder="+45 555-0136" required className="py-3 border rounded-md px-4"/>
                                </div>
                            </div>


                            <p className="text-orange-600 font-medium text-sm  mt-8 tracking-wider">SHIPPING INFO</p>
                            <div className="mt-6 grid sm:grid-cols-2 gap-4 mb-10">
                                <div className="flex flex-col sm:col-span-2 mb-4">
                                    <label htmlFor="address" className="text-sm font-medium mb-4">Address</label>
                                    <input type="text" name="address" placeholder="1137 Williams Avenue" required className="py-3 border rounded-md px-4"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="zip" className="text-sm font-medium mb-4">Zip Code</label>
                                    <input type="number" name="zip" placeholder="10001" required  className="py-3 border rounded-md px-4"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="city" className="text-sm font-medium mb-4">City</label>
                                    <input type="text" name="city" placeholder="Copenhagen" required className="py-3 border rounded-md px-4"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="country" className="text-sm font-medium mb-4">Country</label>
                                    <input type="text" name="country" placeholder="Danemark" required className="py-3 border rounded-md px-4"/>
                                </div>
                            </div>

                            <p className="text-orange-600 font-medium text-sm  mt-2 tracking-wider">PAYMENT DETAILS</p>
                            <div className="flex flex-col sm:flex-row sm:justify-between mt-4 mb-20">
                                <p className="text-sm font-medium mb-4 sm:mb-0">Payment Method</p>
                                <div className="flex flex-col w-2/4">
                                    <div  className="flex flex-col">
                                        <div id="eMoneyDiv" className="radio-label px-4 flex items-center border rounded-md w-60 sm:w-auto">
                                            <input onClick={()=> checkEMoney()} id='e-money' type="radio" name='payment' value='e-money' className="radio"/>
                                            <label onClick={()=> checkEMoney()} htmlFor="e-money" className="ml-4 font-medium h-full py-3 sm:pr-16 lg:pr-20 cursor-pointer">e-Money</label>
                                        </div>
                                        <div id="cashDiv" className="mt-4 flex items-center px-4 border rounded-md w-60 sm:w-auto">
                                            <input onClick={()=> checkCash()} id='cash' type="radio" name='payment' value='cash' className="radio mr-4"/>
                                            <label onClick={()=> checkCash()} htmlFor="cash" className=" font-medium h-full py-3 sm:pr-4 sm:ml-4 cursor-pointer">Cash on Delivery</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                           
                            <div id="cashDetails" className="hidden flex items-center justify-between mt-10 mb-20">
                                <GiCash  className="text-9xl text-orange-500 mr-8"/>
                                <p className="text-gray-400 text-sm">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled</p>
                            </div>
                        </form>

                        <div className="bg-white w-full px-5 rounded-md pt-4 mb-8 lg:w-1/3">
                            <h1 className="text-black text-2xl text-gray-600 font-medium mb-6 ">SUMMARY</h1>
                            {cartProducts.map((item, index)=> (
                                <div key={index} className='flex items-center justify-between mt-4'>
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

                            <div className="flex justify-between font-medium mt-4">
                                <h3 className="text-gray-500">TOTAL</h3>
                                <p className="font-bold">$ {cartTotal}</p>
                            </div>
                            <div className="flex justify-between font-medium mt-4">
                                <h3 className="text-gray-500">SHIPPING</h3>
                                <p className="font-bold">$ 50</p>
                            </div>
                            <div className="flex justify-between font-medium mt-8">
                                <h3 className="text-gray-500">GRAND TOTAL</h3>
                                <p className="text-orange-600 font-bold">$ {cartTotal + 50}</p>
                            </div>
                            
                            <button onClick={() => handleSubmit()} form="checkout-form" type="submit" value="Submit" className="btn bg-orange-500 text-white mx-auto my-8">CONTINUE</button>
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer/>
        </>
    )
}

export default Checkout
