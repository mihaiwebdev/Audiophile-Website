import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

function ProductRelated({prodRel}) {


    return (
        <>
            <div className='mt-20 flex flex-col justify-center items-center'>
                <h3 className='text-3xl font-medium'>YOU MAY ALSO LIKE</h3>

                <div className="flex flex-col mt-10 justify-center w-full items-center sm:flex-row sm:justify-between">
                    {prodRel.map((item) => (
                        <div key={item.id} className='flex flex-col w-4/5 justify-center items-center sm:px-3'>
                              <div className="w-full h-80 py-4 sm:py-0 sm:mx-2">
                                      <motion.div className={item.img}
                                                  initial={{opacity:0}}
                                                  whileInView={{opacity:1}}
                                                  transition={{duration:1}}> 
                                      </motion.div>
                              </div>
                              <h3 className='my-6 font-medium text-3xl tracking-wider sm:text-2xl'>{item.name}</h3>
                              <Link to={item.link} className='btn bg-orange-500 text-white mb-16 sm:mb-36'>SEE PRODUCT</Link>
                        </div>
                    ))}
                </div>

            </div> 
        </>
    )
}

export default ProductRelated
