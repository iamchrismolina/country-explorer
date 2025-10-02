import Card from "@/components/card"
import { type Region } from "@/types/country"

interface CountryCardProps {
  flag: string
  name: string
  population: number
  region: Region
  capital: string | undefined
}

export default function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
}: CountryCardProps) {
  return (
    <Card
      classes="rounded overflow-hidden shadow-lg max-w-64"
      header={
        <div className="w-full">
          <img src={flag} width="100%" />
        </div>
      }
    >
      <div className="flex flex-col gap-2 bg-white px-8 py-4 text-gray-950 dark:bg-slate-700 dark:text-white">
        <h3 className="mb-2 font-bold">{name}</h3>
        <span className="text-sm">
          <span className="font-medium text-gray-950 dark:text-gray-100">
            Population:
          </span>
          <span className="font-light text-gray-900 dark:text-gray-200">
            {" "}
            {population}
          </span>
        </span>
        <span className="text-sm">
          <span className="font-medium text-gray-950 dark:text-gray-100">
            Region:
          </span>
          <span className="font-light text-gray-900 dark:text-gray-200">
            {" "}
            {region}
          </span>
        </span>
        <span className="text-sm">
          <span className="font-medium text-gray-950 dark:text-gray-100">
            Capital:
          </span>
          <span className="font-light text-gray-900 dark:text-gray-200">
            {" "}
            {capital ?? "N/A"}
          </span>
        </span>
      </div>
    </Card>
  )
}
