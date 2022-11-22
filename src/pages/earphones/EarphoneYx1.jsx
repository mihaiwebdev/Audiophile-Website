import { useEffect } from "react";
import { earphones } from "../../data/ProductsData";
import Navbar from "../../components/Navbar";
import ProductInfo from '../../components/product-page/ProductInfo';
import ProductFeature from "../../components/product-page/ProductFeature";
import ProductGallery from "../../components/product-page/ProductGallery";
import SpeakersCard from '../../components/nav-cards/SpeakersCard'
import EarphonesCard from '../../components/nav-cards/EarphonesCard'
import HeadphonesCard from '../../components/nav-cards/HeadphonesCard'
import Ad from '../../components/Ad'
import Footer from "../../components/Footer";
import ProductRelated from "../../components/product-page/ProductRelated";




function EarphoneYx1() {

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
    }, [])

   

    const inBox = [
        {text:'Earphone Unit', amount:'2x', id:0},
        {text:'Multi-Size Earplugs', amount:'6x', id:1},
        {text:'User Manual', amount:'1x', id:2},
        {text:'USB-C Charging Cable', amount:'1x', id:3},
        {text:'Travel Pouch', amount:'1x', id:4},
    ];
    const feature = [
        {one:'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.'},
        {two:'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.'}
    ];
    const galleryImg = [
        {imgOne: 'product-gallery yx1-gallery-1'},
        {imgTwo:'product-gallery yx1-gallery-2'},
        {imgThree:'product-gallery-span yx1-gallery-3 row-span-2'}
    ];
    const prodRel = [
        {id: 0, img: 'xx99-mark-1 w-full h-80', name:'ZX9 SPEAKER', link:'/headphones/xx99-mark-1 '},
        {id: 1, img: 'zx9 w-full h-80', name:'XX99 MARK II', link:'/speakers/zx9'},
        {id: 2, img: 'xx59 w-full h-80', name:'XX59', link:'/headphones/xx59'}
    ]

    return (
        <>
            <div className="header">
                <div className="flex flex-col items-center overflow-hidden mb-8 pb-14">
                    <Navbar/>
                </div>
            </div>

            <div className="container max-w-6xl px-5 mt-16 mx-auto overflow-hidden">

                <ProductInfo newProd={true} product={earphones[0]} />

                <ProductFeature feature={feature} inBox={inBox}/>

                <ProductGallery img={galleryImg}/>

                <ProductRelated prodRel={prodRel}/>

                <div className="flex flex-col mt-20 justify-center items-center sm:flex-row sm:justify-between">
                    <HeadphonesCard/>
                    <SpeakersCard/>
                    <EarphonesCard/>
                </div>
                
                <Ad />
            </div>

            <Footer />
        </>
    )
}

export default EarphoneYx1
