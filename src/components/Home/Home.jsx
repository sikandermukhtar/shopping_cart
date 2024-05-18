import {useAuth} from "../../contexts/authContext/AuthContext.js";
import {useProduct} from "../../contexts/productContext/ProductContext.js";


export default function Home(){

    const {currentUser} = useAuth();
    const {products} = useProduct();
    console.log(currentUser)
    products.map((product) =>{
        console.log(product.title)
    })
    return(
        <>
            <div>
                <div className='text-l'>
                    {products.map((product) => (
                        <div className='p-2' key={product.id}>
                            <h1 className='font-medium text-xl'>{product.title}</h1>
                            <h2 className='font-normal'>{product.sub_title}</h2>
                            <h3 className=''>{product.category}</h3>
                            <h2 className='font-bold'>Description:</h2>
                            <p className='text-gray-600 font-medium'>{product.description}</p>
                            <h2 className='font-bold'>Key Features:</h2>
                            <ul className='list-disc pl-5 space-y-2 text-gray-800'>
                                {Object.entries(product.key_features).map(([key, value]) => (
                                    <li key={key}>{value}</li>
                                ))}
                            </ul>
                            <div className='w-full sm:w-full flex flex-row flex-wrap justify-center'>
                                {Object.entries(product.images).map(([key, value]) => (
                                    <img key={key} className='my-2 p-4 w-96' src={value} alt={product.title + 'images'}/>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}