import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
 
function ProductCard({prodInfo}) {

    return (
        <>
            {prodInfo.map((item) => (
                <div key={item.id} className={item.reverse ? 'mt-14 flex flex-col justify-center items-center text-center sm:mt-24 md:flex-row-reverse md:flex-row md:justify-between md:text-start' : 'mt-14 flex flex-col justify-center items-center text-center sm:mt-24 md:flex-row md:justify-between md:text-start'}>
                    <div className="product-photo-box">
                        <motion.div className={item.img}
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:1}}> 
                        </motion.div>
                    </div>
                    <div className="sm:w-1/2 flex flex-col justify-center items-center md:items-start">
                        {item.newProd ? <p className="new-prod text-sm text-orange-600 mb-2 px-5">NEW PRODUCT</p> : <p></p>}     
                        <h2 className="text-4xl font-medium px-5 tracking-wider md:font-bold">{item.title}</h2>
                        <p className="mt-8 text-gray-400 mb-14 md:px-5">{item.about}</p>
                        <Link to={item.link} className='bg-orange-500 text-white btn mb-14 md:mb-24 md:mx-5'>SEE PRODUCT</Link>
                    </div>
                </div> 
            ))}
            
        </>
    )
}

export default ProductCard
