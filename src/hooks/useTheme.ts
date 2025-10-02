import { useEffect, useState } from "react"

export function useTheme() {
  const storedTheme =
    typeof window !== "undefined" && "theme" in localStorage
      ? localStorage.getItem("theme")
      : null

  const [currentTheme, setCurrentTheme] = useState(storedTheme ?? "light")
  const [themeIcon, setThemeIcon] = useState(
    storedTheme === "dark" ? "moon" : "sun",
  )

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia(`(prefers-color-scheme: ${currentTheme})`).matches),
    )
    localStorage.setItem("theme", currentTheme)
    if (currentTheme === "light") {
      setThemeIcon("sun")
    } else {
      setThemeIcon("moon")
    }
  }, [currentTheme, themeIcon, setCurrentTheme])

  const changeTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark")
    } else {
      setCurrentTheme("light")
    }
  }

  return { currentTheme, changeTheme, themeIcon }
}
