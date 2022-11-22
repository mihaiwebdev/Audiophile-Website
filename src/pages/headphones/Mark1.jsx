import { useEffect } from "react";
import { headphones } from "../../data/ProductsData";
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



function Mark1() {
    
    useEffect(()=>{
        document.documentElement.scrollTop = 0;
    }, [])

    const inBox = [
        {text:'Headphone Unit', amount:'1x', id:0},
        {text:'Replacement Earcups', amount:'2x', id:1},
        {text:'User Manual', amount:'1x', id:2},
        {text:'3.5mm 5m Audio Cable', amount:'1x', id:3},
    ];
    const feature = [
        {one:'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.'},
        {two:'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.'}
    ];
    const galleryImg = [
        {imgOne: 'product-gallery mark1-gallery-1'},
        {imgTwo:'product-gallery mark1-gallery-2'},
        {imgThree:'product-gallery-span mark1-gallery-3 row-span-2'}
    ];
    const prodRel = [
        {id: 0, img: 'xx99-mark-2 w-full h-80', name:'XX99 MARK II', link:'/headphones/xx99-mark-2'},
        {id: 1, img: 'xx59 w-full h-80', name:'XX59', link:'/headphones/xx59'},
        {id: 2, img: 'zx9 w-full h-80', name:'ZX9 SPEAKER', link:'/speakers/zx9'},
    ]

    return (
        <>
            <div className="header">
                <div className="flex flex-col items-center overflow-hidden mb-8 pb-14">
                    <Navbar/>
                </div>
            </div>

            <div className="container max-w-6xl px-5 mt-16 mx-auto overflow-hidden">

                <ProductInfo newProd={true} product={headphones[1]} />

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

export default Mark1
