import { useEffect } from "react";
import { speakers } from "../../data/ProductsData";
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




function SpeakerZx9() {

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
    }, [])


    const inBox = [
        {text:'Speaker Unit', amount:'2x', id:0},
        {text:'Speaker Cloth Panel', amount:'2x', id:1},
        {text:'User Manual', amount:'1x', id:2},
        {text:'3.5mm 10m Audio Cable', amount:'1x', id:3},
        {text:'10m Optical Cable', amount:'1x', id:4},
    ];
    const feature = [
        {one:'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).'},
        {two:'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.'}
    ];
    const galleryImg = [
        {imgOne: 'product-gallery zx9-gallery-1'},
        {imgTwo:'product-gallery zx9-gallery-2'},
        {imgThree:'product-gallery-span zx9-gallery-3 row-span-2'}
    ];
    const prodRel = [
        {id: 0, img: 'zx7 w-full h-80', name:'ZX7 SPEAKER', link:'/speakers/zx7'},
        {id: 1, img: 'xx99-mark-1 w-full h-80', name:'XX99 MARK II', link:'/headphones/xx99-mark-1'},
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

                <ProductInfo newProd={true} product={speakers[0]} />

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

export default SpeakerZx9
