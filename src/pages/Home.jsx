import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import {motion} from 'framer-motion'
import Navbar from '../components/Navbar'
import SpeakersCard from '../components/nav-cards/SpeakersCard'
import EarphonesCard from '../components/nav-cards/EarphonesCard'
import HeadphonesCard from '../components/nav-cards/HeadphonesCard'
import Ad from '../components/Ad.jsx'
import Footer from '../components/Footer'

function Home() {

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
    }, [])
    const pathname = window.location.pathname;

    return (   
     <>
        {/* hero */}
        <div className="header flex flex-col items-center overflow-hidden mb-8 pb-14">
            <Navbar pathname={pathname}/>
            <div className="container max-w-6xl md:px-5 lg:px-5 mx-auto overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.1 }}>
                    <div className="hero-image flex flex-col items-center justify-center text-center pb-32 md:pb-24 md:text-start md:items-start md:justify-start">
                        <div className="flex pt-20 md:pt-40  w-80">
                            <div>
                                <motion.div
                                initial={{y: -100, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{duration: 0.5, delay:0.4}}>
                                    <p className="new-prod text-gray-600 text-sm mb-4 mt-16 sm:mt-20 md:text-1xl md:mt-10 font-medium md:mb-2">NEW PRODUCT</p>
                                </motion.div>
                                <motion.div
                                initial={{x: -200, opacity: 0}}
                                animate={{x:0, opacity: 1}}
                                transition={{duration: 0.5, delay: 1}}>
                                    <h2 className="leading-10 tracking-wider text-4xl sm:text-5xl font-bold mb-4">
                                        XX99 MARK II HEADPHONES
                                    </h2>
                                </motion.div>
                                <motion.div 
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:0.5, delay:1.5}}>
                                    <p className="about text-base mb-12 w-80">
                                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:0.5, delay:1.8}}>
                            <motion.div
                            whileTap={{scale: 1.1}}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <Link className="btn bg-orange-400" to='/headphones/xx99-mark-2'>SEE PRODUCT</Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* main content */}
        <div className="container max-w-6xl px-5 mx-auto overflow-hidden">
            <div className="flex flex-col mt-20 justify-center items-center sm:flex-row sm:justify-between">
                <HeadphonesCard />
                <SpeakersCard />
                <EarphonesCard />
            </div>

            {/* product features */}
            <div className="flex flex-col justify-center items-center">
                <div className='home-zx9 overflow-hidden'>
                    <motion.div
                        initial={{y: 150, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1 }}>
                            <div></div>
                    </motion.div>
                    <h2 className='font-medium text-white text-4xl mb-5 sm:text-6xl md:mr-20 lg:mr-40'>ZX9<span className='block'>SPEAKER</span></h2>
                    <p className='text-gray-100 px-4 mb-10 sm:px-24 md:px-0 md:w-72 md:mr-10 lg:mr-28'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                
                    <Link to='/speakers/zx9' className='bg-black text-white btn mb-14 md:mr-40 md:mb-24 lg:mr-60'>SEE PRODUCT</Link>
                </div>
                <motion.div className='home-zx7'
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{ duration:1.3 }}>
                            <h2 className='font-medium text-black text-3xl mb-5 ml-5 md:ml-20'>ZX7 SPEAKER</h2>
                            <Link to='/speakers/zx7' className='border border-black text-gray-500 ml-5 btn md:ml-20'>SEE PRODUCT</Link>
                </motion.div>

                    
                <div className="home-yx1">
                    <motion.div className='yx1-image'
                        initial={{rotateY:180}}
                        whileInView={{rotateY:0}}
                        transition={{duration:1}}>
                    </motion.div>
                    <div className='yx1-title flex flex-col justify-center'>
                        <h2 className='font-medium text-black text-3xl mb-6 ml-5 '>YX1 EARPHONES</h2>
                        <Link to='/earphones/yx1' className='border border-black text-gray-500 ml-5 btn '>SEE PRODUCT</Link>
                    </div>
                </div>
            </div>

            <Ad />
        </div>

        <Footer pathname={pathname}/>

     </>
    )
}

export default Home
