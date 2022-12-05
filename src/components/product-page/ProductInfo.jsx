import { useContext, useEffect} from "react";
import ProductContext from "../../context/ProductContext";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

function ProductInfo({product, newProd}) {

    const {amount, addToCart, addOne,
           minusOne, setTotal, setAmount} = useContext(ProductContext)

    const setCart = (prod) => {
        addToCart(prod);
        setTotal(prod);
        toast.success("The product was added to cart",{
            position:"top-left",
            autoClose:1500,
            theme:"light",
        });
    }

   useEffect(()=> setAmount(1) ,[setAmount])

   const navigate = useNavigate();


    return (
        <>  
            <button onClick={() => navigate(-1)} className=' lnk absolute  text-start w-40 h-11 text-gray-500 text-sm font-medium sm:mt-10'>Go Back</button>
            <ToastContainer />
            <div className="mt-14 flex flex-col justify-center items-center text-center sm:mt-24 md:flex-row md:justify-between md:text-start">
                <div className="product-photo-box">
                    <motion.div className={product.img}
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1}}> 
                    </motion.div>
                </div>
                <div className="sm:w-2/5 flex flex-col justify-center items-center md:items-start md:w-2/4">
                    <motion.div
                    animate={{opacity:[0, 1]}}
                    transition={{duration:1}}>
                       {newProd ? <p className="new-prod text-sm text-orange-600 mb-2 px-5">NEW PRODUCT</p> : <p></p>}
                        <h2 className="text-4xl font-medium px-5 tracking-wider md:font-bold">{product.title}</h2>
                        <p className="mt-8 text-gray-400 mb-8 md:px-5">{product.about}</p>
                        <p className='mb-8 px-5 font-bold text-lg tracking-wider'>$ {product.price}</p>
                        <div className='flex px-5 justify-center md:justify-start'>
                            <div className='w-36 h-11 bg-gray-100 flex justify-between items-center mr-4'>
                                <button onClick={minusOne} className='font-medium text-gray-400 px-5 h-full'>-</button>
                                <div>{amount}</div>
                                <button onClick={addOne} className='font-medium text-gray-400 px-5 h-full'>+</button>
                            </div>
                            <button onClick={() => setCart(product)} className='bg-orange-500 text-white btn mb-14 md:mb-24 md:mx-5'>ADD TO CART</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo
