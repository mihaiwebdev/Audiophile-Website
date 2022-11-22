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




function Mark2() {

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
    }, [])


    const inBox = [
        {text:'Headphone Unit', amount:'1x', id:0},
        {text:'Replacement Earcups', amount:'2x', id:1},
        {text:'User Manual', amount:'1x', id:2},
        {text:'3.5mm 5m Audio Cable', amount:'1x', id:3},
        {text:'Travel Bag', amount:'1x', id:4}
    ];
    const feature = [
        {one:'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.'},
        {two:'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.'}
    ];
    const galleryImg = [
        {imgOne: 'product-gallery man-image'},
        {imgTwo:'product-gallery table-image'},
        {imgThree:'product-gallery-span mark2-image row-span-2'}
    ];
    const prodRel = [
        {id: 0, img: 'xx99-mark-1 w-full h-80', name:'XX99 MARK I', link:'/headphones/xx99-mark-1'},
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

                <ProductInfo newProd={true} product={headphones[0]}/>

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

export default Mark2
