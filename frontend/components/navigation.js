"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Activity } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">X-ray AI</span>
          </Link>

          <div className="flex space-x-4">
            <Link href="/">
              <Button
                variant={pathname === "/" ? "default" : "ghost"}
                className={pathname === "/" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                Home
              </Button>
            </Link>
            <Link href="/predict">
              <Button
                variant={pathname === "/predict" ? "default" : "ghost"}
                className={pathname === "/predict" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                Predict
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
