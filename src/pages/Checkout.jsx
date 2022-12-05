import {useNavigate} from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import {GiCash} from 'react-icons/gi';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [cardNum, setCardNum] = useState('')
    const [cardCvv, setCardCvv] = useState('')
    const [selectCash, setSelectCash] = useState(false)
    const [selectCard, setSelectCard] = useState(true)
    const navigate = useNavigate();

    const {cartProducts, cartTotal} = useContext(ProductContext)

    useEffect(() => {
        document.getElementById('e-money').checked = true;
    }, [])

    const checkEMoney = () => {

        setSelectCash(false)
        setSelectCard(true) 
    }

    const checkCash = () => {

        setSelectCard(false)
        setSelectCash(true)
    }
   

    const handleSubmit = (e) => {
    
        e.preventDefault();

        const inputFields = document.querySelectorAll('input')

        if (name.length > 3 && email.length > 3 && phone.length > 3  && address.length > 3 
            && zip.length > 3 && city.length > 3 && country.length > 3 ) {
            
            if (selectCard) {
                if ( cardCvv.length >= 3 
                    && cardNum.length > 3) {
                        navigate('/success')
                    }
            } else {
                navigate('/success')
            }

        } 

        for (let i = 0; i < inputFields.length; i++) {
            if (inputFields[i].type !== 'radio' && inputFields[i].value.length < 3){

                inputFields[i].classList.add('border-red-400')
                const warning = document.createElement('p')
                warning.innerText = 'Field cannot be empty'
                warning.className = 'text-sm text-red-400'
                inputFields[i].parentElement.appendChild(warning)
                
                setTimeout(() => {
                    inputFields[i].parentElement.removeChild(warning)
                }, 3000)

            } else {
                inputFields[i].classList.remove('border-red-400')
    
            }
        }
        
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
                        <form onSubmit={handleSubmit} id="checkout-form" className="w-full bg-white  flex flex-col px-10 rounded-md mb-10 md:mb-32 md:mr-10 md:w-2/3">
                            <h1 className="text-black text-3xl font-medium mt-10 ">CHECKOUT</h1>

                            <p className="text-orange-600 font-medium text-sm mt-8 tracking-wider">BILLING DETAILS</p>
                            <div className="mt-6 grid sm:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-sm font-medium mb-4">Name</label>
                                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe"  className="py-3 border rounded-md px-4"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-sm font-medium mb-4">Email Address</label>
                                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com" className="py-3 border rounded-md px-4"/>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="phone" className="text-sm font-medium mb-4">Phone Number</label>
                                    <input type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+45 555-0136" className="py-3 border rounded-md px-4"/>
                                </div>
                            </div>


                            <p className="text-orange-600 font-medium text-sm  mt-8 tracking-wider">SHIPPING INFO</p>
                            <div className="mt-6 grid sm:grid-cols-2 gap-4 mb-10">
                                <div className="flex flex-col sm:col-span-2 mb-4">
                                    <label htmlFor="address" className="text-sm font-medium mb-4">Address</label>
                                    <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="1137 Williams Avenue" className="py-3 border rounded-md px-4"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="zip" className="text-sm font-medium mb-4">Zip Code</label>
                                    <input type="number" name="zip" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="10001" className="py-3 border rounded-md px-4"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="city" className="text-sm font-medium mb-4">City</label>
                                    <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Copenhagen" className="py-3 border rounded-md px-4"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="country" className="text-sm font-medium mb-4">Country</label>
                                    <input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Danemark" className="py-3 border rounded-md px-4"/>
                                </div>
                            </div>

                            <p className="text-orange-600 font-medium text-sm  mt-2 tracking-wider">PAYMENT DETAILS</p>
                            <div className="flex flex-col sm:flex-row sm:justify-between mt-4 mb-10">
                                <p className="text-sm font-medium mb-4 sm:mb-0">Payment Method</p>
                                <div className="flex flex-col w-2/4">
                                    <div  className="flex flex-col">
                                        <div id="eMoneyDiv" className={`px-4 flex items-center border rounded-md w-60 sm:w-auto ${selectCard && 'radio-label'}`}>
                                            <input id='e-money' onChange={checkEMoney} checked={selectCard} type="radio" name='payment' value='e-money' className="radio"/>
                                            <label htmlFor="e-money" className="ml-4 cursor-pointer font-medium h-full py-3 sm:pr-16 lg:pr-20">e-Money</label>
                                        </div>
                                        <div id="cashDiv" className={`mt-4 flex items-center px-4 border rounded-md w-60 sm:w-auto ${selectCash && 'radio-label'}`}>
                                            <input id='cash' onChange={checkCash} checked={selectCash} type="radio" name='payment' value='cash' className="radio"/>
                                            <label htmlFor="cash" className="ml-4 cursor-pointer font-medium h-full py-3 sm:pr-16 lg:pr-20">Cash on Delivery</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={`mt-4 mb-10 flex flex-col items-start space-between px-4 w-60 sm:flex-row sm:w-auto ${ selectCash && 'hidden'}`}>
                                <div>
                                    <label htmlFor="e-number" className="font-medium sm:pr-16 lg:pr-20">Card number</label>
                                    <input type='text' placeholder="238521993" value={cardNum} onChange={(e) => setCardNum(e.target.value)} name='e-number' className="border pl-2 mt-2 w-full h-10 rounded-md"/>
                                </div>
                                <div className="sm:ml-8">
                                    <label htmlFor="e-cvv" className="font-medium sm:pr-16 lg:pr-20">Card CVV</label>
                                    <input type='text' placeholder="395" value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} name='e-cvv' className="border pl-2 w-full mt-2 h-10 rounded-md"/>
                                </div>
                            </div>
                            <div id="cashDetails" className={`flex items-center justify-between mt-10 mb-20 ${ selectCard && 'hidden'}`}>
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
                            
                            <button form="checkout-form" type="submit" value="Submit" className="btn bg-orange-500 text-white mx-auto my-8">CONTINUE</button>
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer/>
        </>
    )
}

export default Checkout
