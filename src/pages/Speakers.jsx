import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import {motion} from 'framer-motion'
import {speakers} from "../data/ProductsData";
import ProductCard from "../components/product-card/ProductCard"
import EarphonesCard from "../components/nav-cards/EarphonesCard"
import HeadphonesCard from "../components/nav-cards/HeadphonesCard"
import SpeakersCard from "../components/nav-cards/SpeakersCard"
import Ad from "../components/Ad"
import Footer from '../components/Footer'



function Speakers() {

    

    const pathname = window.location.pathname;
    let [height, setHeight] = useState('');

    useEffect(()=>{
        const header = document.getElementById('header');
        setHeight(header.offsetHeight);

        document.documentElement.scrollTop = 0;
    }, [])

    const variants = {
        height: {height: height }
    }



    return (
        <>
            <div className="header">
                <div className="flex flex-col items-center overflow-hidden mb-8 pb-14">
                    <Navbar pathname={pathname}/>
                </div>
                <motion.div
                initial={{height:0}}
                animate="height"
                transition={{duration: 0.7, type:"Tween"}}
                variants={variants}>
                    <div className="h-28 w-full sm:h-64 flex justify-center items-center text-center" id="header">
                        <motion.div
                        animate={{scale:[0, 1], opacity:[0,1]}}
                        >
                        <h1 className="text-3xl sm:text-4xl font-medium tracking-wider">SPEAKERS</h1>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* main */}
            <div className="container max-w-6xl px-5 mx-auto">
                <ProductCard prodInfo={speakers}/>
              

                <div className="flex flex-col mt-24 justify-center items-center sm:flex-row sm:mt-32 sm:justify-between">
                    <HeadphonesCard />     
                    <SpeakersCard />   
                    <EarphonesCard />
                </div>

                <Ad />

            </div>

            <Footer pathname={pathname}/>
        </>
    )
}

export default Speakers
