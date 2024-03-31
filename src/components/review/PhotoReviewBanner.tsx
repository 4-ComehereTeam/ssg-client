"use client"

import { useState } from "react"
import PhotoReview from "./PhotoReview"
import Modal from "../modal/Modal"

export default function PhotoReviewBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="w-full h-[148px] mt-5 px-4">
      {isModalOpen && <Modal closeModal={closeModal} />}
      {/* <SimpleHeader title="리뷰 전체 보기" /> */}
      <div className="w-full h-[21px] mb-4 flex justify-between items-center">
        <span className="font-bold">포토 리뷰</span>
        <span
          className="flex text-xs whitespace-nowrap text-gray-400"
          onClick={openModal}
        >
          더보기<span>(3658)</span>
          <div className="w-[16px] h-[14px]">
            {/* <span><SmallArrowIcon /></span> */}
          </div>
        </span>
      </div>
      <PhotoReview openModal={openModal} />
    </div>
  )
}
