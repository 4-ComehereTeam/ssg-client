import React from 'react'
import CartIcon from '@/asset/images/CartIcon'
import { ProductDataType } from '@/types/productDataType'
import HeartIcon from '@/asset/images/HeartIcon'
import { getSpecialPrice } from '@/actions/specialPrice/specialPrice'
import Image from 'next/image'

export default async function SpecialProduct({id, src, brand, name, subtitle, price, imageUrl, alt}: ProductDataType) {

  const addCommas = (number :number) => {
    let result = '';
    let numberToString = number.toString();
    var len = numberToString.length;
    for (var i = len - 1; i >= 0; i--) {
        result = numberToString.charAt(i) + result;
        if ((len - i) % 3 === 0 && i !== 0) {
            result = ',' + result;
        }
    }
    return result;
  }

  return (
    <div>
      <div className='static pt-[0.625rem] pb-5 mx-4 my-2.5'>
        <div className='static'>
          <a
            href={src}>
            <div className='relative'>
              <div className= 'overflow-hidden justify-center items-center '>
                <div className='w-[100vw] h-[50vw]'>
                  <Image
                  src={imageUrl}
                  fill={true}
                  alt={alt}
                  className='will-change-auto max-w-[100%]'
                        /> 
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* --------좋아요/장바구니-------- */}
        <div className=' flex justify-between items-center pt-[0.125rem]'>
          {/* --------브랜드, 이름-------- */}
          <p className='text-ellipsis line-clamp-2 text-sm'>
            <span className='font-bold mr-1'>{brand}</span>
            {name}
          </p>
          {/* --------브랜드, 이름-------- */}
          <div className='flex justify-center'>
          <button className='inline-flex justify-center align-middle items-center w-7 h-7'>
            <div className='w-[20px] h-[20px]'>
              <HeartIcon />
            </div>
          </button>
          <button className='inline-flex justify-center items-center w-7 h-7'>
            <CartIcon />
          </button>
          </div>
        </div>
        <p className='text-ellipsis line-clamp-2 text-sm'>
            {subtitle}
          </p>
          <span className='font-bold'>{addCommas(price)}원~</span>
        {/* --------좋아요/장바구니-------- */}
        <a className='block mt-[0.625rem] pr-[1.25rem]'>
        </a>
      </div>
    </div>
  )
}
