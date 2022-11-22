import {Link} from 'react-router-dom'
import { useContext, useEffect } from 'react'
import ProductContext from '../context/ProductContext'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Cart from './cart/Cart'
import SpeakersCard from './nav-cards/SpeakersCard'
import EarphonesCard from './nav-cards/EarphonesCard'
import HeadphonesCard from './nav-cards/HeadphonesCard'



function Navbar({pathname}) {
    
    const {cartProducts} = useContext(ProductContext);

    const itemsNum = () => cartProducts.reduce((sum, product)=> sum + product.quantity, 0)

    
    useEffect(()=>{
        if(pathname){
            document.getElementById(pathname).classList.add('text-orange-500');
        }
    }, [pathname]) 

    window.addEventListener('scroll', () => {
        
        if(window.pageYOffset >= 450)
        {
            document.getElementById('navbar').classList.add('nav-small')
        }else {
            document.getElementById('navbar').classList.remove('nav-small')
        }
    })

    const showNav = () => {
        document.querySelector('.hamburger').classList.toggle('opened');
        document.body.classList.toggle('overflow-hidden');
    }

    const showCart = () => document.getElementById('cart').classList.toggle('hidden');
    
    const closeCart = (e) => {
        if (e.target.classList.contains('container')){
            document.getElementById('cart').classList.toggle('hidden');
        }
       
    }

    return (
            <nav id="navbar" className="fixed navbar w-full flex items-center justify-center z-10 py-6 px-6 xl:px-14 text-center ">
                <div className='max-w-6xl w-full flex justify-between items-center py-7 border-b border-gray-600 '>
                    <div className="hamburger lg:hidden mt-1" onClick={showNav}>
                        <div></div>
                        <ul className="hamburger-nav px-5 sm:px-0 overflow-hidden">
                            <HeadphonesCard />
                            <SpeakersCard />
                            <EarphonesCard />
                        </ul>
                    </div>
                    <h1 className='text-2xl sm:text-3xl font-bold'><Link to='/'>audiophile</Link></h1>
                    <ul className=' hidden lg:flex mt-2 text-sm'>
                        <li className='px-4 font-bold' ><Link id='/' className='lnk' to='/'>HOME</Link></li>
                        <li className='px-4 font-bold' ><Link id='/headphones' className='lnk' to='/headphones'>HEADPHONES</Link></li>
                        <li className='px-4 font-bold' ><Link id='/speakers' className='lnk' to='/speakers'>SPEAKERS</Link></li>
                        <li className='px-4 font-bold' ><Link id='/earphones' className='lnk' to='/earphones'>EARPHONES</Link></li>
                    </ul>
                    <button onClick={showCart} className="lnk relative">
                        <AiOutlineShoppingCart className='text-3xl'/>
                        <span id='cartItems' className='bg-orange-400 h-5 w-5 rounded-full absolute -top-2 -right-3 flex items-center justify-center'>{itemsNum()}</span>
                    </button>

                    <div id='cart' onClick={closeCart} className='absolute hidden w-screen h-screen'>
                        <Cart />
                    </div>

                </div>
            </nav>
    )
}

export default Navbar
