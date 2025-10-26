const debounce = (func: <T>(args: T) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return function <T>(...args: T[]) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func(args)
    }, delay)
  }
}

export { debounce }
