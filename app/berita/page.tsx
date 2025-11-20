"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type CarItem = {
id: number
title: string
model: string
price: number
power: string
acceleration: string
transmission: string
topSpeed: string
category: string
status: "Ready Stock" | "Pre-Order" | "Sold"
year: string
image: string
featured?: boolean
}

export default function Armada() {
const [selectedCategory, setSelectedCategory] = useState<string>("Semua")
const [searchQuery, setSearchQuery] = useState("")

const formatPrice = (price: number) => {
return new Intl.NumberFormat('id-ID', {
style: 'currency',
currency: 'IDR',
minimumFractionDigits: 0,
maximumFractionDigits: 0
}).format(price)
}

// Data mobil
const carsData: CarItem[] = [
{
id: 1,
title: "Lamborghini Aventador",
model: "SVJ Coupe",
price: 12500000000,
power: "770 HP",
acceleration: "2.8 detik",
transmission: "7-Speed ISR",
topSpeed: "350 km/h",
category: "Supercar",
status: "Ready Stock",
year: "2023",
image: "/LAMBOR.jpg",
featured: true
},
{
id: 2,
title: "Ferrari SF90",
model: "Stradale",
price: 14500000000,
power: "1000 HP",
acceleration: "2.5 detik",
transmission: "8-Speed DCT",
topSpeed: "340 km/h",
category: "Hybrid",
status: "Pre-Order",
year: "2024",
image: "/488.jpg"
},
{
id: 3,
title: "Porsche 911",
model: "Turbo S",
price: 6500000000,
power: "650 HP",
acceleration: "2.7 detik",
transmission: "8-Speed PDK",
topSpeed: "330 km/h",
category: "AWD",
status: "Ready Stock",
year: "2023",
image: "/PORSCHE.jpg"
},
{
id: 4,
title: "McLaren 720S",
model: "Spider",
price: 8500000000,
power: "720 HP",
acceleration: "2.9 detik",
transmission: "7-Speed SSG",
topSpeed: "341 km/h",
category: "Convertible",
status: "Ready Stock",
year: "2023",
image: "/MCLAREN.jpg"
},
{
id: 5,
title: "Audi R8",
model: "V10 Plus",
price: 4500000000,
power: "610 HP",
acceleration: "3.2 detik",
transmission: "7-Speed S-Tronic",
topSpeed: "330 km/h",
category: "Quattro",
status: "Sold",
year: "2023",
image: "/AUD.jpg"
},
{
id: 6,
title: "BMW M8",
model: "Competition",
price: 5500000000,
power: "625 HP",
acceleration: "3.2 detik",
transmission: "8-Speed M Steptronic",
topSpeed: "305 km/h",
category: "Gran Coupe",
status: "Ready Stock",
year: "2024",
image: "/BMW.jpg"
},
{
id: 7,
title: "Mercedes AMG GT",
model: "Black Series",
price: 9500000000,
power: "730 HP",
acceleration: "3.2 detik",
transmission: "7-Speed AMG",
topSpeed: "325 km/h",
category: "Track",
status: "Pre-Order",
year: "2024",
image: "/LEXUS.jpg"
},
{
id: 8,
title: "Nissan GT-R",
model: "Nismo",
price: 3500000000,
power: "600 HP",
acceleration: "2.9 detik",
transmission: "6-Speed DCT",
topSpeed: "315 km/h",
category: "Supercar",
status: "Ready Stock",
year: "2023",
image: "/NISSAN.jpg"
},
{
id: 9,
title: "Lexus LC500",
model: "Convertible",
price: 2800000000,
power: "471 HP",
acceleration: "4.4 detik",
transmission: "10-Speed Auto",
topSpeed: "270 km/h",
category: "GT",
status: "Ready Stock",
year: "2023",
image: "/MERCEDES.jpg"
}
]

const categories = ["Semua", "Supercar", "Hybrid", "AWD", "Convertible", "Quattro", "Gran Coupe", "Track", "GT"]

// Filter mobil berdasarkan kategori dan pencarian
const filteredCars = carsData.filter(car => {
const matchesCategory = selectedCategory === "Semua" || car.category === selectedCategory
const matchesSearch = car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
car.model.toLowerCase().includes(searchQuery.toLowerCase())
return matchesCategory && matchesSearch
})

const featuredCar = carsData.find(car => car.featured)

const getStatusColor = (status: string) => {
switch (status) {
case "Ready Stock":
return "bg-green-600"
case "Pre-Order":
return "bg-blue-600"
case "Sold":
return "bg-red-600"
default:
return "bg-gray-600"
}
}

return (
<div className="min-h-screen bg-gray-50 py-12">
<div className="max-w-7xl mx-auto px-4">
      {/* Header Section */}
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Armada Eksklusif
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Koleksi mobil premium terpilih dengan kualitas terbaik dan kondisi terawat
      </p>
    </div>

    {/* Search and Filter Section */}
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        {/* Search Bar */}
        <div className="w-full lg:w-96">
          <div className="relative">
            <input 
              type="text"
              placeholder="Cari mobil atau model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 pr-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Cars Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {filteredCars.map((car) => (
        <div key={car.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group">
          <div className="relative h-64 overflow-hidden bg-gray-100">
            <Image
              src={car.image}
              alt={`${car.title} ${car.model}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className={`${getStatusColor(car.status)} text-white px-3 py-1 rounded-full font-semibold text-sm`}>
                {car.status}
              </span>
            </div>
            <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full font-semibold text-sm">
              {car.year}
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {car.title}
                </h3>
                <p className="text-gray-600">{car.model}</p>
              </div>
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                {car.category}
              </span>
            </div>
            
            <p className="text-2xl font-bold text-gray-900 mb-4">{formatPrice(car.price)}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-500">Tenaga</div>
                <div className="font-semibold">{car.power}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">0-100 km/h</div>
                <div className="font-semibold">{car.acceleration}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Transmisi</div>
                <div className="font-semibold">{car.transmission}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Top Speed</div>
                <div className="font-semibold">{car.topSpeed}</div>
              </div>
            </div>
            
            {car.status === "Sold" ? (
              <button
                disabled
                className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold text-center cursor-not-allowed"
              >
                Terjual
              </button>
            ) : (
              <Link
                href={`/berita/${car.id}`}
                className="block w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center hover:bg-gray-800 transition-all duration-300 group-hover:bg-blue-600"
              >
                {car.status === "Pre-Order" ? "Pre-Order" : "Lihat Detail"}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Empty State */}
    {filteredCars.length === 0 && (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada mobil ditemukan</h3>
        <p className="text-gray-600 mb-6">
          Coba ubah kata kunci pencarian atau pilih kategori yang berbeda
        </p>
        <button
          onClick={() => {
            setSearchQuery("")
            setSelectedCategory("Semua")
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          Reset Pencarian
        </button>
      </div>
    )}

    {/* CTA Section */}
    <div className="text-center mt-16 bg-gray-900 rounded-2xl p-12 text-white">
      <h2 className="text-3xl font-bold mb-4">
        Tertarik dengan Armada Kami?
      </h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Hubungi tim konsultan kami untuk informasi lebih lanjut dan penawaran khusus
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
          Hubungi Konsultan
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
          WhatsApp
        </button>
      </div>
    </div>
  </div>
</div>
  )
}