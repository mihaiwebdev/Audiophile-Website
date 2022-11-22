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




function SpeakerZx7() {

    useEffect(()=>{
        document.documentElement.scrollTop = 0;
    }, [])

    const inBox = [
        {text:'Speaker Unit', amount:'2x', id:0},
        {text:'Speaker Cloth Panel', amount:'2x', id:1},
        {text:'User Manual', amount:'1x', id:2},
        {text:'3.5mm 10m Audio Cable', amount:'1x', id:3},
        {text:'7.5m Optical Cable', amount:'1x', id:4},
    ];
    const feature = [
        {one:'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.'},
        {two:'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.'}
    ];
    const galleryImg = [
        {imgOne: 'product-gallery zx7-gallery-1'},
        {imgTwo:'product-gallery zx7-gallery-2'},
        {imgThree:'product-gallery-span zx7-gallery-3 row-span-2'}
    ];
    const prodRel = [
        {id: 0, img: 'zx9 w-full h-80', name:'ZX9 SPEAKER', link:'/speakers/zx9'},
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

                <ProductInfo newProd={true} product={speakers[1]} />

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

export default SpeakerZx7
