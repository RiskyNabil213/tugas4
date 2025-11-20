"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Sports Cars Showroom"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            SPORT CAR GALLERY
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Dealer Mobil Sport Terlengkap di Indonesia. Temukan Mobil Impian Anda dengan Kualitas Terbaik dan Harga Kompetitif
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/berita"
              className="bg-gradient-to-r from-yellow-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>Jelajahi Armada</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Mobil Tersedia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Klien Puas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Layanan Pelanggan</div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Mobil Unggulan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Koleksi mobil sport terbaru dan terbaik dengan performa maksimal dan kondisi prima
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Car 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/LAMBOR.jpg"
                alt="Lamborghini Huracan EVO"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
                Ready Stock
              </div>
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
                2024
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">Lamborghini Huracan EVO</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Coupe</span>
              </div>
              
              <p className="text-2xl font-bold text-red-600 mb-4">Rp 8.500.000.000</p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  V10 5.2L
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  640 HP
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  0-100: 2.9s
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Top Speed: 325 km/h
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Automatic</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Full Service History</span>
              </div>
              
              <div className="flex gap-3">
                <Link 
                  href="/berita/lamborghini-huracan-evo-2024"
                  className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded-lg font-semibold text-center hover:from-gray-800 hover:to-gray-600 transition-all duration-300 text-sm"
                >
                  Detail Mobil
                </Link>
              </div>
            </div>
          </div>

          {/* Car 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/488.jpg"
                alt="Ferrari 488 Pista"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
                Ready Stock
              </div>
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
                2024
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">Ferrari 488 Pista</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Coupe</span>
              </div>
              
              <p className="text-2xl font-bold text-red-600 mb-4">Rp 12.000.000.000</p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  V8 Twin-Turbo
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  720 HP
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  0-100: 2.85s
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Top Speed: 340 km/h
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Automatic</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Full Service History</span>
              </div>
              
              <div className="flex gap-3">
                <Link 
                  href="/berita/ferrari-488-pista-2024"
                  className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded-lg font-semibold text-center hover:from-gray-800 hover:to-gray-600 transition-all duration-300 text-sm"
                >
                  Detail Mobil
                </Link>
              </div>
            </div>
          </div>

          {/* Car 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/PORSCHE.jpg"
                alt="Porsche 911 Turbo S"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
                Ready Stock
              </div>
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
                2024
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">Porsche 911 Turbo S</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Coupe</span>
              </div>
              
              <p className="text-2xl font-bold text-red-600 mb-4">Rp 6.200.000.000</p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  3.8L Twin-Turbo
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  650 HP
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  0-100: 2.7s
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Top Speed: 330 km/h
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Automatic</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Full Service History</span>
              </div>
              
              <div className="flex gap-3">
                <Link 
                  href="/berita/porsche-911-turbo-s-2024"
                  className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded-lg font-semibold text-center hover:from-gray-800 hover:to-gray-600 transition-all duration-300 text-sm"
                >
                  Detail Mobil
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/berita"
            className="inline-flex items-center gap-2 border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            Lihat Semua Mobil
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Brand Terkemuka</h2>
            <p className="text-xl text-gray-600">Bekerja sama dengan brand mobil sport terbaik di dunia</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {/* Brand 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-3 border border-gray-200">
                <div className="relative w-full h-10">
                  <Image
                    src="/lambo.jpeg"
                    alt="Lamborghini Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 100px"
                  />
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">Lamborghini</h3>
              <p className="text-gray-600 text-xs">12 Units</p>
            </div>

            {/* Brand 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-3 border border-gray-200">
                <div className="relative w-full h-8">
                  <Image
                    src="/ferrari.png"
                    alt="Ferrari Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 80px"
                  />
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">Ferrari</h3>
              <p className="text-gray-600 text-xs">8 Units</p>
            </div>

            {/* Brand 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-3 border border-gray-200">
                <div className="relative w-full h-8">
                  <Image
                    src="/pors.jpeg"
                    alt="Porsche Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 80px"
                  />
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">Porsche</h3>
              <p className="text-gray-600 text-xs">15 Units</p>
            </div>

            {/* Brand 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-3 border border-gray-200">
                <div className="relative w-full h-8">
                  <Image
                    src="/mclaren.png"
                    alt="McLaren Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 80px"
                  />
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">McLaren</h3>
              <p className="text-gray-600 text-xs">6 Units</p>
            </div>

            {/* Brand 5 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-3 border border-gray-200">
                <div className="relative w-full h-8">
                  <Image
                    src="/audilogo.jpg"
                    alt="Audi Sport Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 80px"
                  />
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">Audi Sport</h3>
              <p className="text-gray-600 text-xs">10 Units</p>
            </div>

            {/* Brand 6 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-3 border border-gray-200">
                <div className="relative w-full h-8">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png"
                    alt="BMW M Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 80px"
                  />
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">BMW M</h3>
              <p className="text-gray-600 text-xs">12 Units</p>
            </div>

            {/* Brand 7 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-3 border border-gray-200">
                <div className="relative w-full h-8">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png"
                    alt="Mercedes-AMG Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 80px"
                  />
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">Mercedes-AMG</h3>
              <p className="text-gray-600 text-xs">9 Units</p>
            </div>

            {/* Brand 8 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-3 border border-gray-200">
                <div className="relative w-full h-8">
                  <Image
                    src="/astonmartin.png"
                    alt="Aston Martin Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 80px"
                  />
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">Aston Martin</h3>
              <p className="text-gray-600 text-xs">5 Units</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Layanan lengkap dari pembelian hingga purna jual untuk kenyamanan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Mobil Baru & Bekas Berkualitas</h3>
            <p className="text-gray-600 leading-relaxed">
              Kami menyediakan mobil sport baru dan bekas berkualitas dengan kondisi terbaik dan sertifikasi lengkap
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔧</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Service & Maintenance</h3>
            <p className="text-gray-600 leading-relaxed">
              Layanan purna jual lengkap dengan teknisi berpengalaman dan spare parts original
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📄</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Proses Administrasi Lengkap</h3>
            <p className="text-gray-600 leading-relaxed">
              Kami bantu proses administrasi sampai dengan balik nama STNK dan BPKB
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔄</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Trade-In Mobil Lama</h3>
            <p className="text-gray-600 leading-relaxed">
              Terima trade-in mobil lama Anda dengan nilai terbaik untuk pembelian mobil sport baru
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Konsultasi Financing</h3>
            <p className="text-gray-600 leading-relaxed">
              Bantuan konsultasi financing dan kredit dengan partner bank terpercaya
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Delivery Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Layanan pengantaran mobil sampai ke lokasi Anda di seluruh Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Memiliki Mobil Sport Impian?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis, dan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/berita"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lihat Katalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}