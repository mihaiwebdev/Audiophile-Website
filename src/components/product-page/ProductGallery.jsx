

function ProductGallery({img}) { 
    return (
        <>
            <div className='grid grid-rows-1 mt-20 sm:grid-flow-col sm:gap-8 sm:grid-rows-2 sm:my-36'>
                <div className={img[0]['imgOne']}></div>
                <div className={img[1]['imgTwo']}></div>
                <div className={img[2]['imgThree']}></div>
            </div>
        </>
    )
}

export default ProductGallery
