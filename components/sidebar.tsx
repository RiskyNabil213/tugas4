"use client"

import { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"

type SidebarProps = {
  children: ReactNode
  title: string
}

export default function Sidebar({ children, title }: SidebarProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">

       {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo dan Brand */}
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {title}
                </h1>
                <p className="text-sm text-gray-500">Professional Platform</p>
              </div>
            </div>
            
            {/* Navigation - Di Tengah */}
            <nav className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-3 gap-10">
                <Link 
                  href="/" 
                  className="flex flex-col items-center space-y-1 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-sm group-hover:font-semibold group-hover:underline transition-all duration-200">Home</span>
                </Link>
                
                <Link 
                  href="/berita" 
                  className="flex flex-col items-center space-y-1 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v12m0-12a2 2 0 012-2h2a2 2 0 012 2m-6 6h6m-6 4h6m-6 4h6" />
                  </svg>
                  <span className="text-sm group-hover:font-semibold group-hover:underline transition-all duration-200">Berita</span>
                </Link>
                
                <Link 
                  href="/profile" 
                  className="flex flex-col items-center space-y-1 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm group-hover:font-semibold group-hover:underline transition-all duration-200">Profile</span>
                </Link>
              </div>
            </nav>

            <div className="w-60"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-white rounded-xl p-10 shadow-2xl flex-10 m-4">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-xl font-bold">{title}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Platform profesional yang memberikan solusi terbaik untuk kebutuhan Anda.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Kontak Kami</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Jl. Professional No. 123, Jakarta Selatan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+62 21 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@{title.toLowerCase().replace(/\s+/g, '')}.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Tautan Cepat</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Tentang Kami
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Layanan
                </Link>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Karir
                </Link>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Kebijakan Privasi
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} {title}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}