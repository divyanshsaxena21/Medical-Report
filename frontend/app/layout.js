import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Chest X-ray Disease Classifier",
  description: "AI-powered chest X-ray analysis for medical diagnosis",
  keywords: "AI, chest X-ray, medical diagnosis, disease classifier, healthcare",
  authors: [
    {
      name: "Ayush Sharma",
      url: "https://ayushsharma.site"
    }
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
