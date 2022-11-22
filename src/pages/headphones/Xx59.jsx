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




function Xx59() {

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
        {one:'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.'},
        {two:'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.'}
    ];
    const galleryImg = [
        {imgOne: 'product-gallery xx59-gallery-1'},
        {imgTwo:'product-gallery xx59-gallery-2'},
        {imgThree:'product-gallery-span xx59-gallery-3 row-span-2'}
    ];
    const prodRel = [
        {id: 0, img: 'xx99-mark-1 w-full h-80', name:'XX99 MARK I', link:'/headphones/xx99-mark-1'},
        {id: 1, img: 'xx99-mark-2 w-full h-80', name:'XX99 MARK II', link:'/headphones/xx99-mark-2'},
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

                <ProductInfo newProd={true} product={headphones[2]}/>

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

export default Xx59
