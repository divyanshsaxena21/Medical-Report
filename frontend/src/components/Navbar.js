"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Activity, Home, FileText, Info, Phone } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Analysis", href: "/analysis", icon: FileText },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Phone },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-medical-500 to-medical-600 rounded-full flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-medical-600 to-medical-800 bg-clip-text text-transparent">
                Medicure
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-medical-600 bg-medical-50 border-b-2 border-medical-600"
                      : "text-gray-700 hover:text-medical-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-medical-600 focus:outline-none focus:text-medical-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-medical-600 bg-medical-50"
                      : "text-gray-700 hover:text-medical-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
