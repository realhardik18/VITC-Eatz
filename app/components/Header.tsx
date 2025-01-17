import { Pizza } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Pizza size={32} className="text-purple-400" />
          <h1 className="text-3xl font-extrabold">VITC Eatz</h1>
        </div>
        <Link 
          href="https://forms.gle/axhnBLQHTD44RHwV6" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
        >
          Add Your Fav Restaurant
        </Link>
      </div>
    </header>
  )
}

