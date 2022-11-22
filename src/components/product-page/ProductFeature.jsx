


function ProductFeature({feature, inBox}) {


    return (
        <>
            <div className='flex flex-col mt-24 items-start justify-between sm:flex-row'>
                <div className='w-full sm:w-3/5'>
                    <h2 className='font-medium text-4xl mb-8'>FEATURE</h2>
                    <p className='mb-6 text-gray-600'>{feature[0]['one']}</p>
                    <p className='text-gray-600'>{feature[1]['two']}</p>
                </div>
                <div className='flex flex-col mt-20 w-full justify-between sm:flex-row sm:w-auto sm:justify-center sm:mt-0 sm:flex-col'>
                    <div>
                        <h2 className='font-medium text-4xl mb-8'>IN THE BOX</h2>
                    </div>
                    <div>
                        {inBox.map((item)=> (
                          <p key={item.id} className='py-1'><span className='text-orange-500 font-bold mr-6'>{item.amount}</span> {item.text}</p>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFeature
