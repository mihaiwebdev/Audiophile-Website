import {Link} from 'react-router-dom'
import {FiChevronRight} from 'react-icons/fi'
import {motion} from 'framer-motion'

function SpeakersCard() {
    return (
        <motion.div className='w-full flex items-center justify-center' 
        initial={{scale:0.5}}
        whileInView={{scale: 1}}
        whileTap={{scale: 1.1}}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link to='/speakers' className="relative card flex flex-col justify-end items-center rounded-md w-full h-40 mb-14 sm:w-56 sm:h-48 sm:pb-6 sm:mb-5 lg:w-80 lg:h-48 bg-gray-100">
                <div className="s1-speakers"></div>
                <h3 className="font-bold text-lg" >SPEAKERS</h3>
                <p className="mb-5 sm:mb-0 text-sm text-gray-400 font-bold flex justify-center items-center">SHOP <FiChevronRight className="ml-1 text-orange-600"/></p>
            </Link>
        </motion.div>
    )
}

export default SpeakersCard
