'use client'
import { useState } from 'react'
import AddressModal from '@/components/modal/AddressModal'

export default function ChangeAddress() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
        <div className="mx-5 mb-10">
            <button
                className="w-full h-9 border"
                onClick={() => {
                    setModalOpen(true)
                }}
            >
                배송지 변경
            </button>
            <AddressModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    )
}