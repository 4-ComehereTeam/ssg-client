"use client"

import { useEffect, useRef, useState } from "react"

type DescriptionProps = {
  description: string
}

// function updateDescription(htmlString: string) {
//   const parser = new DOMParser() // ReferenceError: DOMParser is not defined

//   const doc = parser.parseFromString(htmlString, "text/html")

//   const buttons = doc.querySelectorAll("button")

//   buttons.forEach((button) => {
//     button.parentNode?.removeChild(button)
//   })

//   const paragraphs = doc.querySelectorAll("p")

//   paragraphs.forEach((p) => {
//     p.style.fontSize = "14px"
//   })

//   const updatedHtmlString = doc.body.innerHTML

//   return updatedHtmlString
// }

export default function Description({ description }: DescriptionProps) {
  const INITIAL_HEIGHT = "1200px"
  const [displayHeight, setDisplayContent] = useState(INITIAL_HEIGHT)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  // const updatedDescription = updateDescription(description)

  useEffect(() => {
    const checkContentHeight = () => {
      if (ref.current) {
        const scrollHeight = ref.current.scrollHeight
        const initialHeightNumber = parseInt(INITIAL_HEIGHT, 10)
        if (scrollHeight > initialHeightNumber) {
          setIsButtonVisible(true)
        } else {
          setIsButtonVisible(false)
        }
      }
    }
    checkContentHeight()
  }, [description, isExpanded])

  const handleExpand = () => {
    if (ref.current) {
      const newHeight = isExpanded
        ? INITIAL_HEIGHT
        : ref.current.scrollHeight + "px"
      setDisplayContent(newHeight)
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <div className="relative mt-5 mb-10 flex flex-col justify-center">
      <div
        ref={ref}
        dangerouslySetInnerHTML={{ __html: description }}
        className="overflow-hidden"
        style={{ maxHeight: displayHeight }}
      ></div>
      {isButtonVisible && (
        <>
          {!isExpanded && (
            <div className="absolute top-[93%] w-full h-14 bg-gradient-to-t from-white"></div>
          )}
          <button
            onClick={handleExpand}
            className="text-sm text-center w-full h-8"
          >
            {!isExpanded ? "상세정보 펼쳐보기 ▼" : "상세정보 접기 ▲"}
          </button>
        </>
      )}
    </div>
  )
}
