import React from "react"

type ReviewModalProps = {
  reviewSummary: {
    star: number
    date: string
    signinId: string
  }
}

export default function ReviewModal({ reviewSummary }: ReviewModalProps) {
  return <div>ReviewModal</div>
}
