'use client'
import Header from './components/Header'
import SearchAndFilter from './components/SearchAndFilter'
import RestaurantCard from './components/RestaurantCard'
import { restaurants } from '../data/restaurants'
import { useState, useEffect } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState('All')
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)

  useEffect(() => {
    const filtered = restaurants.filter((restaurant) => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisines.includes(selectedCuisine)
      return matchesSearch && matchesCuisine
    })
    setFilteredRestaurants(filtered)
  }, [searchTerm, selectedCuisine])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchAndFilter 
          setSearchTerm={setSearchTerm} 
          setSelectedCuisine={setSelectedCuisine} 
          selectedCuisine={selectedCuisine}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </main>
    </div>
  )
}

