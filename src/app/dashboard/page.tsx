import { getCountries } from "@/lib/countries"
import CountryCard from "./_components/country-cards"

export default async function Homepage() {
  const countries = await getCountries()

  return (
    <section className="flex flex-col items-center gap-8 py-16">
      {countries.map((c) => (
        <CountryCard
          key={c.name}
          flag={c.flag}
          name={c.name}
          population={c.population}
          region={c.region}
          capital={c.capital}
        />
      ))}
    </section>
  )
}
