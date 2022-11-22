import {motion} from 'framer-motion'


function Ad() {
    return (
        <div className="mt-24 mb-20 flex flex-col justify-center items-center text-center md:flex-row md:justify-between sm:mt-40 md:flex-row-reverse md:text-start">
            <motion.div className='man-photo'
                        initial={{rotateY:180}}
                        whileInView={{rotateY:0}}
                        transition={{duration:1}}>
            </motion.div>
            <div className="md:w-2/5">
            <motion.div
            initial={{opacity:0, x: -250}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.8, delay:0.3}}>
                <h2 className="text-3xl font-medium px-5 md:font-bold md:text-4xl md:tracking-wider">BRINGING YOU THE <span className="text-orange-400">BEST</span> AUDIO GEAR</h2>
            </motion.div>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8, delay:0.5}}>
                <p className="mt-10 px-4 text-gray-400 md:mb-28">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </motion.div>
            </div>
        </div>
    )
}

export default Ad
