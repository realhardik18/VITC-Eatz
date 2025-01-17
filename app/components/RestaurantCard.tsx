import { Star, MapPin, Phone } from 'lucide-react'

interface Restaurant {
  id: number;
  name: string;
  description: string;
  cuisines: string[];
  price: number;
  distance: number;
  rating: number;
  phones: string[];
  zomato?: string;
  swiggy?: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-gray-800">
      <div className="p-6 relative">
        <h2 className="text-2xl font-bold text-purple-400 mb-2">{restaurant.name}</h2>
        <p className="text-gray-300 mb-4">{restaurant.description}</p>
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
          <MapPin size={16} className="text-purple-400" />
          <span>{restaurant.distance} km</span>
        </div>
        <div className="flex items-center text-sm text-gray-400 mb-2">
  <Phone size={16} className="text-purple-400 mr-2" />
  <span>{restaurant.phones.join(', ')}</span>
    </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold text-green-400">₹{restaurant.price} for two</span>
          <div className="flex items-center space-x-1 bg-purple-600 px-2 py-1 rounded-full">
            <Star className="text-yellow-400" size={16} />
            <span className="font-semibold text-white">{restaurant.rating}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          {restaurant.zomato && (
            <a
              href={restaurant.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-pink-700 hover:to-red-700 transition-all duration-300"
            >
              Order on Zomato
            </a>
          )}
          {restaurant.swiggy && (
            <a
              href={restaurant.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-orange-700 hover:to-yellow-700 transition-all duration-300"
            >
              Order on Swiggy
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

