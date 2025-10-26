import { isEmpty } from "@/utils/objectChecker"

class URLBuilder {
  baseUrl: string
  pathSegments: string[] = []
  queryParams: Record<string, string> = {}
  fragment: string | undefined

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  addPath(segment: string) {
    if (segment) {
      this.pathSegments.push(segment)
    }
    return this
  }

  addQueryParam(key: string, value: string) {
    if (value) {
      this.queryParams[key] = value
    }
    return this
  }

  setFragment(fragment: string) {
    this.fragment = fragment
    return this
  }

  build() {
    let queryParamsSize = Object.keys(this.queryParams).length - 1
    let newUrl = this.baseUrl

    this.pathSegments.forEach((path) => {
      newUrl += `/${path}`
    })

    if (
      isEmpty(this.addQueryParam) &&
      !newUrl.includes("?") &&
      !this.fragment
    ) {
      newUrl += "?"
    } else if (isEmpty(this.addQueryParam) && newUrl.includes("?")) {
      newUrl += "&"
    }

    for (const [key, value] of Object.entries(this.queryParams)) {
      if (queryParamsSize === 0) {
        newUrl += `${key}=${value}`
      } else {
        newUrl += `${key}=${value}&`
      }
      queryParamsSize -= 1
    }

    if (this.fragment) {
      newUrl += `/${this.fragment}`
    }

    return newUrl
  }
}

export { URLBuilder }
