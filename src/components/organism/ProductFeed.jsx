import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from "react-currency-formatter"

const Max_Rating = 5;
const Min_Rating = 1;

function ProductFeed({id, title, price, description, category, image}) {

        const [rating] = useState(
            Math.floor(Math.random() * (Max_Rating - Min_Rating + 1))  
        );

        const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className=' absolute top-2 right-2 italic text-gray-400'>{category}</p>
            <Image src={image} width={200} height={200} objectFit='contain' />
            <h4 className='mt-2'>{title}</h4>
            <div className='flex'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <StarIcon className='h-5 text-yellow-500' />
                ))}
            </div>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div className='mb-5'>
                <Currency quantity={price} />
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                    <p className=' text-xs text-gray-500'>Free Next-day Delivery</p>
                </div>
            )}
            <button className='mt-auto button'>Add to Cart</button>
    </div>
  )
}

export default ProductFeed