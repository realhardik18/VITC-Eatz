import { Search } from 'lucide-react'
import { restaurants } from '../../data/restaurants'

interface SearchAndFilterProps {
  setSearchTerm: (term: string) => void;
  setSelectedCuisine: (cuisine: string) => void;
  selectedCuisine: string;
}

export default function SearchAndFilter({ setSearchTerm, setSelectedCuisine, selectedCuisine }: SearchAndFilterProps) {
  const allCuisines = ['All', ...new Set(restaurants.flatMap(r => r.cuisines))]

  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
      <div className="relative w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search for restaurants or food..."
          className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-800 focus:outline-none focus:border-purple-500 bg-gray-900 text-white"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full md:w-auto">
        {allCuisines.map((cuisine) => (
          <button
            key={cuisine}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
              selectedCuisine === cuisine
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
            onClick={() => setSelectedCuisine(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>
    </div>
  )
}

