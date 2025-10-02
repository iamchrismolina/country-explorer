import { useEffect, useState } from "react"

export function useTheme() {
  const storedTheme =
    typeof window !== "undefined" && "theme" in localStorage
      ? localStorage.getItem("theme")
      : null

  const [currentTheme, setCurrentTheme] = useState(storedTheme ?? "light")
  const [themeIcon, setThemeIcon] = useState(
    currentTheme === "light" ? "sun" : "moon",
  )

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "light" ||
        (!("theme" in localStorage) &&
          window.matchMedia(`(prefers-color-scheme: ${currentTheme})`).matches),
    )
    localStorage.setItem("theme", currentTheme)
    if (currentTheme === "dark") {
      setThemeIcon("sun")
    } else {
      setThemeIcon("moon")
    }
  }, [currentTheme, themeIcon, setCurrentTheme])

  const changeTheme = () => {
    if (currentTheme === "dark") {
      setCurrentTheme("light")
    } else {
      setCurrentTheme("dark")
    }
  }

  return { currentTheme, changeTheme, themeIcon }
}
