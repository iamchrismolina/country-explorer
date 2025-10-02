import { z } from "zod"

const RegionEnum = z.enum([
  "Asia",
  "Europe",
  "Africa",
  "Oceania",
  "Americas",
  "Polar",
  "Antarctic Ocean",
  "Antarctic",
])

export const FlagsSchema = z.object({
  svg: z.string().url().optional(),
  png: z.string().url().optional(),
})

export const LanguageSchema = z.object({
  iso639_1: z.string().optional(),
  iso639_2: z.string().optional(),
  name: z.string(),
  nativeName: z.string().optional(),
})

export const CurrencySchema = z.object({
  code: z.string().optional(),
  name: z.string().optional(),
  symbol: z.string().optional(),
})

export const RegionalBlocSchema = z.object({
  acronym: z.string(),
  name: z.string(),
  otherAcronyms: z.array(z.string()).optional(),
  otherNames: z.array(z.string()).optional(),
})

export const TranslationsSchema = z.record(z.string(), z.string())

export const CountrySchema = z.object({
  name: z.string(),
  topLevelDomain: z.array(z.string()).optional(),
  alpha2Code: z.string().optional(),
  alpha3Code: z.string().optional(),
  callingCodes: z.array(z.string()).optional(),
  capital: z.string().optional(),
  altSpellings: z.array(z.string()).optional(),
  subregion: z.string().optional(),
  region: RegionEnum,
  population: z.number(),
  latlng: z.array(z.number()).length(2).optional(),
  demonym: z.string().optional(),
  area: z.number().optional(),
  gini: z.number().optional(),
  timezones: z.array(z.string()).optional(),
  borders: z.array(z.string()).optional(),
  nativeName: z.string().optional(),
  numericCode: z.string().optional(),
  flags: FlagsSchema.optional(),
  currencies: z.array(CurrencySchema).optional(),
  languages: z.array(LanguageSchema).optional(),
  translations: TranslationsSchema.optional(),
  flag: z.string().url(),
  regionalBlocs: z.array(RegionalBlocSchema).optional(),
  cioc: z.string().optional(),
  independent: z.boolean().optional(),
})

export const CountriesSchema = z.array(CountrySchema)

export type Region = z.infer<typeof RegionEnum>
export type Country = z.infer<typeof CountrySchema>
export type Countries = z.infer<typeof CountriesSchema>
