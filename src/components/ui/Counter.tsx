"use client"

import React, { useState, useEffect } from "react"

function Counter({ targetNumber }: { targetNumber: number }) {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    if (number < targetNumber) {
      const timeoutId = setTimeout(() => setNumber(number + 7), 3)
      return () => clearTimeout(timeoutId)
    }
  }, [number, targetNumber])

  return <span className="font-bold text-lg text-[#ff5452]">{number}</span>
}

export default Counter
