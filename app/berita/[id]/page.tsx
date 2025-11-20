"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

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
  description: string
  specifications: {
    engine: string
    drive: string
    fuel: string
    seats: string
    color: string
  }
  features: string[]
}

// Data mobil yang lengkap - 9 mobil
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
    featured: true,
    description: "Lamborghini Aventador SVJ Coupe adalah masterpiece engineering yang menggabungkan performa ekstrem dengan desain yang ikonik. Dengan teknologi aerodinamika aktif dan mesin V12 yang mengguncang, mobil ini menawarkan pengalaman berkendara yang tak tertandingi.",
    specifications: {
      engine: "V12, 6.5L Naturally Aspirated",
      drive: "All-Wheel Drive",
      fuel: "Premium Gasoline",
      seats: "2",
      color: "Arancio Borealis (Orange)"
    },
    features: [
      "Carbon Fiber Monocoque",
      "ALA 2.0 Aerodynamics",
      "Magnetorheological Suspension",
      "Carbon Ceramic Brakes",
      "Full LED Lighting System",
      "Digital Cockpit Display"
    ]
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
    image: "/488.jpg",
    description: "Ferrari SF90 Stradale adalah hypercar hybrid pertama dari Maranello yang menggabungkan teknologi Formula 1 dengan kenyamanan berkendara sehari-hari. Dengan tiga motor listrik dan mesin V8 twin-turbo, mobil ini menawarkan performa luar biasa dengan efisiensi yang mengagumkan.",
    specifications: {
      engine: "V8 Twin-Turbo + 3 Electric Motors",
      drive: "All-Wheel Drive",
      fuel: "Hybrid (Gasoline + Electric)",
      seats: "2",
      color: "Rosso Corsa (Red)"
    },
    features: [
      "Plug-in Hybrid Technology",
      "eManettino Driving Mode Selector",
      "Full Carbon Fiber Body",
      "Advanced Traction Control",
      "Regenerative Braking",
      "Apple CarPlay Integration"
    ]
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
    image: "/PORSCHE.jpg",
    description: "Porsche 911 Turbo S adalah ikon yang terus berevolusi, menawarkan kombinasi sempurna antara performa brutal dan kenyamanan sehari-hari. Dengan sistem all-wheel drive yang canggih dan mesin twin-turbo yang disempurnakan, mobil ini siap menghadapi segala kondisi.",
    specifications: {
      engine: "Flat-6 Twin-Turbo, 3.8L",
      drive: "All-Wheel Drive",
      fuel: "Premium Gasoline",
      seats: "4",
      color: "Guards Red"
    },
    features: [
      "Porsche Traction Management",
      "Adaptive Aerodynamics",
      "Porsche Ceramic Composite Brakes",
      "Sport Chrono Package",
      "Bose Surround Sound System",
      "Night Vision Assist"
    ]
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
    image: "/MCLAREN.jpg",
    description: "McLaren 720S Spider menawarkan pengalaman berkendara convertible tanpa kompromi pada performa. Dengan atap yang dapat dibuka dalam kecepatan hingga 50 km/h, mobil ini menghadirkan sensasi berkendara yang tak terlupakan di bawah langit terbuka.",
    specifications: {
      engine: "V8 Twin-Turbo, 4.0L",
      drive: "Rear-Wheel Drive",
      fuel: "Premium Gasoline",
      seats: "2",
      color: "Sarthe Grey"
    },
    features: [
      "Retractable Hardtop",
      "Monocage II Carbon Fiber Chassis",
      "Variable Drift Control",
      "Race Mode Active Dynamics",
      "360° Parking Assist",
      "Bowers & Wilkins Audio System"
    ]
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
    image: "/AUD.jpg",
    description: "Audi R8 V10 Plus adalah supercar dengan jiwa yang halus namun berperforma ganas. Menggunakan mesin V10 yang sama dengan Lamborghini Huracan, mobil ini menawarkan keseimbangan sempurna antara kenyamanan sehari-hari dan performa trek.",
    specifications: {
      engine: "V10, 5.2L Naturally Aspirated",
      drive: "All-Wheel Drive (Quattro)",
      fuel: "Premium Gasoline",
      seats: "2",
      color: "Daytona Gray"
    },
    features: [
      "Audi Laser Light",
      "Magnetic Ride Suspension",
      "Carbon Fiber Sideblades",
      "Audi Virtual Cockpit",
      "Bang & Olufsen Sound System",
      "Rear Parking Camera"
    ]
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
    image: "/BMW.jpg",
    description: "BMW M8 Competition Gran Coupe adalah masterpiece yang menggabungkan kemewahan sedan empat pintu dengan jiwa balap murni. Dengan mesin twin-turbo V8 yang disetel khusus, mobil ini menawarkan performa luar biasa tanpa mengorbankan kenyamanan.",
    specifications: {
      engine: "V8 Twin-Turbo, 4.4L",
      drive: "All-Wheel Drive (M xDrive)",
      fuel: "Premium Gasoline",
      seats: "5",
      color: "São Paulo Yellow"
    },
    features: [
      "M xDrive All-Wheel Drive",
      "Active M Differential",
      "Carbon Fiber Roof",
      "M Sport Exhaust System",
      "Live Cockpit Professional",
      "Bowers & Wilkins Diamond Sound"
    ]
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
    image: "/LEXUS.jpg",
    description: "Mercedes-AMG GT Black Series adalah varian paling ekstrem dari keluarga AMG GT, dirancang khusus untuk performa trek maksimal. Dengan aerodinamika agresif dan mesin yang disetel untuk balap, mobil ini adalah perwujudan motorsport untuk jalanan.",
    specifications: {
      engine: "V8 Biturbo, 4.0L",
      drive: "Rear-Wheel Drive",
      fuel: "Premium Gasoline",
      seats: "2",
      color: "Green Hell Magno"
    },
    features: [
      "Adjustable Carbon Fiber Aerodynamics",
      "AMG Track Pace System",
      "Carbon Fiber Monocoque",
      "AMG Performance Exhaust",
      "AMG Bucket Seats",
      "Advanced Track Telemetry"
    ]
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
    image: "/NISSAN.jpg",
    description: "Nissan GT-R Nismo adalah legenda yang terus disempurnakan. Dikenal sebagai 'Godzilla', mobil ini menggabungkan teknologi canggih dengan rekayasa presisi untuk menciptakan supercar yang dapat diandalkan dalam segala kondisi.",
    specifications: {
      engine: "VR38DETT V6 Twin-Turbo, 3.8L",
      drive: "All-Wheel Drive (ATTESA E-TS)",
      fuel: "Premium Gasoline",
      seats: "4",
      color: "Ultimate Silver"
    },
    features: [
      "Nismo-tuned Engine",
      "Hand-built VR38 Engine",
      "Bilstein DampTronic Suspension",
      "Carbon Fiber Rear Spoiler",
      "Recaro Leather Seats",
      "NissanConnect Navigation"
    ]
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
    image: "/MERCEDES.jpg",
    description: "Lexus LC500 Convertible adalah grand tourer yang memadukan elegan dengan performa. Dengan atap kain yang dapat dibuka dalam 15 detik dan mesin V8 yang merdu, mobil ini menawarkan pengalaman berkendara yang mewah dan menyenangkan.",
    specifications: {
      engine: "V8, 5.0L Naturally Aspirated",
      drive: "Rear-Wheel Drive",
      fuel: "Premium Gasoline",
      seats: "4",
      color: "Structural Blue"
    },
    features: [
      "Retractable Soft Top",
      "Mark Levinson Premium Audio",
      "Adaptive Variable Suspension",
      "Lexus Safety System+ 2.0",
      "Heated and Ventilated Seats",
      "Head-Up Display"
    ]
  }
]

export default function CarDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [car, setCar] = useState<CarItem | null>(null)
  const [relatedCars, setRelatedCars] = useState<CarItem[]>([])

  useEffect(() => {
    const carId = parseInt(params.id as string)
    const foundCar = carsData.find(item => item.id === carId)
    
    if (!foundCar) {
      router.push("/armada")
      return
    }

    setCar(foundCar)

    const related = carsData
      .filter(item => item.category === foundCar.category && item.id !== foundCar.id)
      .slice(0, 3)
    
    setRelatedCars(related)
  }, [params.id, router])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

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

  if (!car) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Memuat detail mobil...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-3 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
          <span className="text-gray-400">›</span>
          <Link href="/armada" className="hover:text-blue-600 transition-colors font-medium">Armada</Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-semibold truncate max-w-xs">{car.title} {car.model}</span>
        </nav>

        {/* Car Header */}
        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
          {/* Featured Image */}
          <div className="relative h-80 bg-gray-100">
            <Image
              src={car.image}
              alt={`${car.title} ${car.model}`}
              fill
              className="object-cover"
            />
            {car.featured && (
              <div className="absolute top-6 left-6">
                <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ✨ Featured Car
                </span>
              </div>
            )}
            <div className="absolute top-6 right-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {car.category}
              </span>
            </div>
          </div>

          {/* Car Content */}
          <div className="p-8 lg:p-12">
            {/* Category and Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                {car.category}
              </span>
              <div className="flex items-center space-x-4 text-gray-500">
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Tahun {car.year}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>{car.power}</span>
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {car.title} {car.model}
            </h1>

            {/* Price and Status */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <p className="text-3xl font-bold text-blue-600 mb-4 lg:mb-0">
                {formatPrice(car.price)}
              </p>
              <span className={`${getStatusColor(car.status)} text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg`}>
                {car.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-blue-500 pl-6 bg-blue-50/50 py-4 rounded-r-xl">
              {car.description}
            </p>

            {/* Key Specifications */}
            <div className="flex items-center gap-4 mb-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-600 font-bold text-lg">⚡</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tenaga</h4>
                  <p className="text-2xl font-bold text-gray-900">{car.power}</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold text-lg">🚀</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Akselerasi</h4>
                  <p className="text-2xl font-bold text-gray-900">{car.acceleration}</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold text-lg">🏁</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Top Speed</h4>
                  <p className="text-2xl font-bold text-gray-900">{car.topSpeed}</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold text-lg">⚙️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Transmisi</h4>
                  <p className="text-2xl font-bold text-gray-900">{car.transmission}</p>
                </div>
              </div>
            </div>

            {/* Detailed Content */}
            <div className="space-y-8">
              {/* Specifications Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Spesifikasi Teknis Lengkap</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-4">Detail Mesin</h3>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3">🔧 Konfigurasi Mesin:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span>Type: {car.specifications.engine}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span>Penggerak: {car.specifications.drive}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span>Bahan Bakar: {car.specifications.fuel}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900 border-l-4 border-green-600 pl-4">Dimensi & Kapasitas</h3>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3">📐 Spesifikasi:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Kapasitas Penumpang: {car.specifications.seats} orang</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Warna Tersedia: {car.specifications.color}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Kategori: {car.category}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Fitur Utama & Teknologi</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {car.features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-blue-600 font-bold text-lg">✓</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Highlights */}
              <div className="mt-8 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Highlight Performa</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Performa Ekstrem</h4>
                      <p className="text-gray-700 mt-1">Dengan {car.power} dan akselerasi {car.acceleration}, mobil ini menawarkan pengalaman berkendara yang tak tertandingi di kelasnya.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Teknologi Mutakhir</h4>
                      <p className="text-gray-700 mt-1">Dilengkapi dengan sistem {car.transmission} dan berbagai fitur canggih untuk kenyamanan dan keamanan maksimal.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Kecepatan Tinggi</h4>
                      <p className="text-gray-700 mt-1">Mencapai kecepatan maksimum {car.topSpeed}, memberikan sensasi berkendara yang adrenalin.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">Siap Memiliki {car.title}?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{car.status}</div>
                    <p className="text-blue-100">Status Ketersediaan</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{car.year}</div>
                    <p className="text-blue-100">Tahun Produksi</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{car.category}</div>
                    <p className="text-blue-100">Kategori Mobil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span className="text-sm font-medium">Bagikan mobil ini</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  {car.status !== "Sold" ? (
                    <>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                        {car.status === "Pre-Order" ? "Pre-Order Sekarang" : "Jadwalkan Test Drive"}
                      </button>
                      <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                        Konsultasi via WhatsApp
                      </button>
                    </>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
                    >
                      Mobil Telah Terjual
                    </button>
                  )}
                  <Link
                    href="/armada"
                    className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Kembali ke Armada
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobil Serupa Lainnya</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Temukan lebih banyak mobil premium dalam kategori yang sama
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCars.map((relatedCar) => (
                <Link
                  key={relatedCar.id}
                  href={`/armada/${relatedCar.id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
                >
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={relatedCar.image}
                      alt={`${relatedCar.title} ${relatedCar.model}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {relatedCar.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <span>{relatedCar.year}</span>
                      <span>•</span>
                      <span className={`${getStatusColor(relatedCar.status)} text-white px-2 py-1 rounded-full text-xs`}>
                        {relatedCar.status}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                      {relatedCar.title} {relatedCar.model}
                    </h3>
                    
                    <p className="text-2xl font-bold text-gray-900 mb-4">{formatPrice(relatedCar.price)}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                      <div>
                        <div className="text-gray-500">Tenaga</div>
                        <div className="font-semibold">{relatedCar.power}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">0-100 km/h</div>
                        <div className="font-semibold">{relatedCar.acceleration}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 text-sm font-semibold group-hover:underline flex items-center space-x-1">
                        <span>Lihat Detail</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}