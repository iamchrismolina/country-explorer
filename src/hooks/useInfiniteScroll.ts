import { debounce } from "@/utils/debounce"
import { useEffect, useState } from "react"

export function useInfiniteScroll<T>(fetchData: (page: number) => Promise<T>) {
  const [, setPage] = useState(1)

  const handleScroll = debounce(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 300

    if (bottom) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1
        fetchData(nextPage)
        return nextPage
      })
    }
  }, 300)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])
}
