"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

type NewsItem = {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  featured?: boolean
}

const BeritaPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua")
  const [searchQuery, setSearchQuery] = useState("")

  // Data berita contoh
  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "Transformasi Digital di Sektor Pendidikan Indonesia",
      excerpt: "Pemerintah meluncurkan inisiatif baru untuk mempercepat transformasi digital di sektor pendidikan nasional.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Pendidikan",
      author: "Dr. Ahmad Wijaya",
      date: "15 Des 2024",
      readTime: "4 min baca",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Inovasi Teknologi Terbaru dalam Bidang Kesehatan",
      excerpt: "Startup lokal berhasil mengembangkan teknologi AI untuk diagnosis penyakit lebih akurat.",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      category: "Teknologi",
      author: "Sarah Chen",
      date: "14 Des 2024",
      readTime: "3 min baca",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Pertumbuhan Ekonomi Indonesia Kuartal IV 2024",
      excerpt: "Bank Indonesia memproyeksikan pertumbuhan ekonomi yang positif di akhir tahun 2024.",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      category: "Ekonomi",
      author: "Budi Santoso",
      date: "13 Des 2024",
      readTime: "5 min baca",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Strategi Pengembangan SDM di Era Digital",
      excerpt: "Perusahaan-perusahaan besar berinvestasi dalam pengembangan talenta digital untuk menghadapi revolusi industri 4.0.",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      category: "Bisnis",
      author: "Maria Garcia",
      date: "12 Des 2024",
      readTime: "4 min baca",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Perkembangan Startup Fintech di Asia Tenggara",
      excerpt: "Indonesia memimpin dalam inovasi fintech dengan pertumbuhan startup yang signifikan.",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      category: "Fintech",
      author: "Kevin Lee",
      date: "11 Des 2024",
      readTime: "3 min baca",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Sustainable Development Goals dalam Corporate Strategy",
      excerpt: "Perusahaan mulai mengintegrasikan SDGs ke dalam strategi bisnis mereka untuk menciptakan dampak berkelanjutan.",
      content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      category: "Sustainability",
      author: "Lisa Wang",
      date: "10 Des 2024",
      readTime: "6 min baca",
      image: "/api/placeholder/400/250"
    }
  ]

  const categories = ["Semua", "Teknologi", "Pendidikan", "Ekonomi", "Bisnis", "Fintech", "Sustainability"]

  // Filter berita berdasarkan kategori dan pencarian
  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === "Semua" || news.category === selectedCategory
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredNews = newsData.find(news => news.featured)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Berita & Artikel
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan informasi terkini dan insight terbaru seputar teknologi, bisnis, dan perkembangan industri
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
                  placeholder="Cari berita atau artikel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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

        {/* Featured News */}
        {featuredNews && selectedCategory === "Semua" && !searchQuery && (
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Featured Image</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredNews.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredNews.date}</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{featuredNews.readTime}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {featuredNews.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{featuredNews.author}</p>
                        <p className="text-sm text-gray-500">Penulis</p>
                      </div>
                    </div>
                    <Link
                      href={`/berita/${featuredNews.id}`}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              {/* News Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-semibold">Gambar Berita</span>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-xs font-medium">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gray-500 text-sm">{news.date}</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{news.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {news.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-700">{news.author}</span>
                  </div>
                  
                  <Link
                    href={`/berita/${news.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                  >
                    Baca
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada berita ditemukan</h3>
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

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Tetap Update dengan Berita Terbaru</h2>
          <p className="mb-6 opacity-90">
            Dapatkan notifikasi ketika ada artikel dan berita terbaru dari kami
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Berlangganan
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BeritaPage