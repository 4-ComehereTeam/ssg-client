'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
export default function Recent() {
    const productData = [
        {
            productId: 1,
            vendorName: 'H&M',
            name: '비스코스 셔츠 드레스 카키 그린/패턴 1213391003',
            price: 34900,
            discount: 0,
            imageUrl: 'https://sitem.ssgcdn.com/87/77/06/item/1000583067787_i1_750.jpg',
        },
        {
            productId: 2,
            vendorName: 'S BLANC',
            name: '[최초가:458000원]Freesia / Pleated Detail Puff Sleeves Dress',
            price: 304570,
            discount: 10,
            imageUrl: 'https://sitem.ssgcdn.com/70/99/40/item/1000583409970_i1_750.jpg',
        },
    ]

    const router = useRouter()
    const back = () => {
        router.back()
    }
    const [deleted, setDeleted] = useState(false)
    const [checkedItem, setCheckedItem] = useState<number[]>([])

    const handleEditClick = () => {
        setDeleted(!deleted)
    }
    const checkItemhandler = (id: number, ischecked: boolean) => {
        console.log(id, ischecked)
        if (ischecked) {
            setCheckedItem((prev) => [...prev, id])
        } else {
            setCheckedItem(checkedItem.filter((item) => item !== id))
        }
    }

    return (
        <>
            <div className=" bg-gray-100 p-4 h-screen">
                <div className="flex items-center mt-3">
                    <span onClick={back}>
                        <Image width="35" height="50" src="https://img.icons8.com/ios/50/left--v1.png" alt="뒤로가기" />
                    </span>
                    <p className="flex-grow  text-lg text-center font-bold tracking-[-1px]">최근 본 상품</p>
                    <button className="flex justify-center items-center text-sm" onClick={handleEditClick}>
                        {deleted ? (
                            <>
                                <p className='tracking-[-1px] text-sm'>취소</p>
                                <Image
                                    width="15"
                                    height="15"
                                    src="https://img.icons8.com/ios/50/cancel.png"
                                    alt="취소"
                                />
                            </>
                        ) : (
                            <>
                                <p className='tracking-[-1px] text-sm'>편집</p>
                                <Image
                                    width="15"
                                    height="15"
                                    src="https://img.icons8.com/ios/50/settings--v1.png"
                                    alt="편집"
                                />
                            </>
                        )}
                    </button>
                </div>
                {deleted && (
                    <div className="flex  justify-between  space-x-2 mt-4">
                        <button className="bg-white h-10 rounded-lg w-full text-gray-500 text-sm tracking-[-1px]">선택삭제</button>
                        <hr />
                        <button className="bg-red-500 h-10 rounded-lg w-full text-white text-sm tracking-[-1px]">전체삭제</button>
                    </div>
                )}

                {productData.map((product) => (
                    <div key={product.productId}>
                        <div className="flex justify-between bg-white rounded w-full  mt-4">
                            {deleted && (
                                <label className="relative  flex justify-between w-full">
                                    <input
                                        type="checkbox"
                                        key={product.productId}
                                        onChange={() =>
                                            checkItemhandler(
                                                product.productId,
                                                !checkedItem.includes(product.productId) ? true : false,
                                            )
                                        }
                                        checked={checkedItem.includes(product.productId)}
                                        className="absolute top-3 left-2 w-4 h-4 accent-red-500"
                                    ></input>
                                    <div className="flex justify-between w-full ml-5">
                                        <div className=" max-w-56 text-xs tracking-[-0.2px] p-3">
                                            [{product.vendorName}] {product.name}
                                            <p className="mt-1 font-semibold ">
                                                {(product.price * (1 - product.discount / 100)).toLocaleString()}
                                            </p>
                                        </div>
                                        <Image src={product.imageUrl} alt="상품썸네일" width={100} height={100}></Image>
                                    </div>
                                </label>
                            )}

                            {!deleted && (
                                <Link href="./" className="flex justify-between w-full" passHref>
                                    <div className="max-w-56 text-xs tracking-[-0.2px] p-3">
                                        [{product.vendorName}] {product.name}
                                        <p className="mt-1 font-semibold text-[16px]">
                                            {(product.price * (1 - product.discount / 100)).toLocaleString()}
                                        </p>
                                    </div>
                                    <Image src={product.imageUrl} alt="상품썸네일" width={100} height={100}></Image>
                                </Link>
                            )}

                            <div className="flex flex-col">
                                <button className="flex justify-center items-center  w-14 h-14">
                                    <svg
                                        viewBox="0 0 24 24"
                                        focusable="false"
                                        className="w-6"
                                        name="CartIcon"
                                    >
                                        <rect
                                        x="6"
                                        y="8.40002"
                                        width="14.4"
                                        height="1.2"
                                        fill="currentColor"
                                        ></rect>
                                        <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6 19.2C6 20.52 7.08 21.6 8.4 21.6C9.72 21.6 10.8 20.52 10.8 19.2C10.8 17.88 9.72 16.8 8.4 16.8C7.08 16.8 6 17.88 6 19.2ZM7.20004 19.2C7.20004 18.48 7.68004 18 8.40004 18C9.12004 18 9.60004 18.48 9.60004 19.2C9.60004 19.92 9.12004 20.4 8.40004 20.4C7.68004 20.4 7.20004 19.92 7.20004 19.2Z"
                                        fill="currentColor"
                                        ></path>
                                        <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.6 19.2C15.6 20.52 16.68 21.6 18 21.6C19.32 21.6 20.4 20.52 20.4 19.2C20.4 17.88 19.32 16.8 18 16.8C16.68 16.8 15.6 17.88 15.6 19.2ZM16.8001 19.2C16.8001 18.48 17.2801 18 18.0001 18C18.7201 18 19.2001 18.48 19.2001 19.2C19.2001 19.92 18.7201 20.4 18.0001 20.4C17.2801 20.4 16.8001 19.92 16.8001 19.2Z"
                                        fill="currentColor"
                                        ></path>
                                        <path
                                        d="M19.08 15.6H7.32001L4.08001 4.79998H1.20001V3.59998H5.04001L8.28001 14.4H18.12L20.4 7.07998L21.6 7.31998L19.08 15.6Z"
                                        fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                                <hr></hr>
                                <button className="flex justify-center items-center w-14 h-14">
                                    <Image
                                        width="24"
                                        height="32"
                                        src="https://img.icons8.com/windows/32/like--v1.png"
                                        alt="좋아요"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
