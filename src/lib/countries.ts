import { CountriesSchema } from "@/types/country"

export async function getCountries() {
  try {
    const response = await fetch("http://localhost:3000/data.json")

    if (!response.ok) throw new Error("Failed to fetch countries")

    const result = await response.json()
    const validatedCountries = CountriesSchema.parse(result)
    return validatedCountries
  } catch (error) {
    console.error("An error occurred: ", error)
    return []
  }
}
