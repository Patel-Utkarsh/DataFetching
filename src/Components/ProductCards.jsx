"use client"
import React from 'react'
import Image from 'next/image'

const ProductCards = ({item}) => {
  return (
    <div className='flex flex-col  p-7 rounded-xl shadow-lg py-7 bg-white'>
        <p className='text-center font-bold'>{ `${item.title.substring(0,20)}`}</p>
        <Image className='h-full w-full  bg-white' height={200} width={100} src={item.thumbnail} />
        <p className='font-bold'>{`$${item.price}`}</p>
        <button className='border-[#7902fe] border-2 px-8 py-2 mt-2 text-black rounded-md shadow-sm font-bold hover:bg-[#7902fe] hover:text-white '>{`Add to Cart`}</button>


    </div>
  )
}

export default ProductCards