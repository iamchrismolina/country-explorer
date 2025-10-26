import { getCountries } from "@/lib/countries"
import { CountriesSchema, type Countries } from "@/types/country"
import { useState } from "react"

export function useCountries() {
  const [countries, setCountries] = useState<Countries>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState("")

  const fetchCountries = async (page: number = 1) => {
    try {
      setLoading(true)
      const result = await getCountries(page)
      const validatedCountries = CountriesSchema.parse(result)
      setCountries(validatedCountries)
    } catch (error) {
      setLoading(true)
      setError(`${error}`)
    } finally {
      setLoading(false)
    }
  }

  return {
    countries,
    loading,
    error,
    fetchCountries,
  }
}
