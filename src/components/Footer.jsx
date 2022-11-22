import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import {SlSocialInstagram} from 'react-icons/sl'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


function Footer({pathname}) {

    useEffect(()=>{
        if(pathname){
            document.getElementById(`/${pathname}`).classList.add('text-orange-500');
        }
     }, [pathname]) 
 
    return (
        <div className='bg-black text-white text-center relative overflow-hidden'>
            <div className="container max-w-6xl px-5 mx-auto relative">
                <div className='absolute top-0 left-1/2 -translate-x-2/4 w-20 h-1 bg-orange-500 sm:left-20'></div>
                <div className="flex flex-col justify-center items-center">
                    <div className='sm:flex sm:w-full sm:flex-row sm:justify-between'>
                        <h1 className='text-3xl font-bold my-10 sm:mt-14 sm:ml-4'><Link to='/'>audiophile</Link></h1>
                        <ul className='flex flex-col text-sm sm:flex-row sm:mt-14'>
                            <li className='py-3 font-medium sm:mx-4'><Link id='//' className='lnk hi' to='/'>HOME</Link></li>
                            <li className='py-3 font-medium sm:mx-4'><Link id='//headphones' className='lnk' to='/headphones'>HEADPHONES</Link></li>
                            <li className='py-3 font-medium sm:mx-4'><Link id='//speakers' className='lnk' to='/speakers'>SPEAKERS</Link></li>
                            <li className='py-3 font-medium sm:mx-4'><Link id='//earphones' className='lnk' to='/earphones'>EARPHONES</Link></li>
                        </ul>
                    </div>
                    <div className='flex-col sm:flex sm:justify-start sm:items-start sm:flex-col sm:w-full'>
                        <p className='footer-about text-neutral-500 text-sm font-medium my-6 px-5 sm:my-0 sm:mb-6 sm:text-start'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                        <p className='text-sm text-neutral-500 font-medium mb-2 sm:px-5'>Copyright 2022 &copy;. All Rights Reserved</p>
                        <a className='border-b border-slate-600 mb-2 text-sm text-neutral-500 sm:mx-5' href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx" target='_blank' rel="noreferrer">Front-end mentor Challange</a>
                        <p className='text-orange-500 text-sm my-5 sm:mx-5'>Coded by Mihai</p>
                    </div>
                    <div className="flex mb-10 mt-2 sm:absolute sm:bottom-10 sm:right-10">
                        <SlSocialInstagram className='text-white text-3xl mx-2'/>
                        <BsFacebook className='text-white text-3xl mx-2'/>
                        <BsTwitter className='text-white text-3xl mx-2'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
