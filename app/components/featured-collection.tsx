'use client'

import Image from 'next/image'
import { SwiperNavBtn } from './ui/SwiperNavBtn'
import { useCart } from '../contexts/cart-context'

const products = [
    { id: 1, name: 'Product 1', price: '$19.99', image: '/images/model1.svg', quantity: 1 },
    { id: 2, name: 'Product 2', price: '$29.99', image: '/images/model2.svg', quantity: 1 },
    { id: 3, name: 'Product 3', price: '$39.99', image: '/images/model3.svg', quantity: 1 },
    { id: 4, name: 'Product 4', price: '$49.99', image: '/images/model4.svg', quantity: 1 },
    { id: 5, name: 'Product 5', price: '$59.99', image: '/images/model1.svg', quantity: 1 },
    { id: 6, name: 'Product 6', price: '$69.99', image: '/images/model2.svg', quantity: 1 },
    { id: 7, name: 'Product 7', price: '$79.99', image: '/images/model3.svg', quantity: 1 },

]


export interface Product {
    id: number
    name: string
    price: string
    image: string
    quantity: number
}

export default function FeaturedCollection() {
    const { addToCart } = useCart()

    const ProductCard = ({ product }: { product: Product }) => (
        <div className="flex flex-col items-center p-4 bg-white rounded-3xl shadow-xl w-[154px] h-fit md:w-[223px] ">
            <Image
                src={product?.image}
                alt={product?.name}
                width={200}
                height={200}
            />
            <div className='flex md:flex-row flex-col justify-around my-2 w-full items-center'>
                <span className="text-black text-[16px] ">{product.price}</span>
                <button onClick={() => addToCart(product)} className="bg-[#7AA65A] text-white px-4 rounded-3xl">
                    BUY NOW
                </button>
            </div>

        </div>
    )

    return (
        <div className="py-12 bg-white">
            <div className="place-content-center flex flex-col items-center">
                <h2 className="text-4xl font-semibold text-[#7AA65A94] mb-8 text-center">Featured Collection</h2>
                <div className='flex flex-wrap lg:justify-start justify-center md:gap-1 max-w-5xl'>
                    {products.map((product) => (
                        <div key={product.id} className="p-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
            <SwiperNavBtn />
        </div >
    )
}