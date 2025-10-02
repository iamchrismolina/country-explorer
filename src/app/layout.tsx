import { Nunito_Sans } from "next/font/google"
import Head from "next/head"
import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="en">
      <Head>
        <title>Country Explorer</title>
        <p>An app to quickly find country flags</p>
      </Head>
      <body
        className={`${nunitoSans.className} bg-gray-50 antialiased dark:bg-slate-800`}
      >
        {children}
      </body>
    </html>
  )
}
