"use client"

import { useTheme } from "@/hooks/useTheme"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Header() {
  const { themeIcon, changeTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="space-between flex h-24 items-center justify-between bg-gray-50 bg-white px-4 shadow-md dark:bg-slate-700">
      <span className="text-normal font-semibold text-gray-950 dark:text-white">
        Where in the world?
      </span>
      <button
        className="text-normal flex cursor-pointer items-center justify-center gap-2 text-gray-950 md:font-medium dark:text-white"
        onClick={() => changeTheme()}
      >
        <Image
          className="filter-green"
          src={`/assets/${themeIcon}.svg`}
          alt="Moon symbol"
          width="16"
          height="16"
        />
        {themeIcon === "sun" ? "Light" : "Dark"} Mode
      </button>
    </header>
  )
}
