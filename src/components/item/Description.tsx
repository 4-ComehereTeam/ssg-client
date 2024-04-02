"use client"

import { useEffect, useRef, useState } from "react"

type DescriptionProps = {
  description: string
}

function replaceButtonWithLink(htmlString: string, newElementHtml: string) {
  // DOMParser 인스턴스 생성
  const parser = new DOMParser()

  // HTML 문자열을 DOM으로 파싱
  const doc = parser.parseFromString(htmlString, "text/html")

  const buttons = doc.querySelectorAll("button")
  console.log(buttons)

  buttons.forEach((button) => {
    const replacement = doc.createElement("div")
    replacement.innerHTML = newElementHtml
    const newElement = replacement.firstChild

    // 기존 <button> 요소를 새 요소로 교체
    if (newElement) {
      button.parentNode?.replaceChild(newElement, button)
    }
  })

  // 수정된 HTML을 문자열로 다시 변환
  const updatedHtmlString = doc.body.innerHTML

  return updatedHtmlString // 수정된 HTML 문자열 반환
}

export default function Description({ description }: DescriptionProps) {
  const INITIAL_HEIGHT = "1200px"
  const [displayHeight, setDisplayContent] = useState(INITIAL_HEIGHT)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
