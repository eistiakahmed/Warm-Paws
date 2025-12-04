import React, { useEffect, useState } from 'react';
import usePetCare from '../../Hooks/usePetCare';
import AllService from '../All service/AllService';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const { petCare } = usePetCare();
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('price-asc');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    let result = [...petCare];

    // Filter
    if (selectedCategory !== 'all') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Sort
    result.sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    setFilteredPets(result);
  }, [petCare, selectedCategory, sortOption]);

  // Unique categories
  const categories = ['all', ...new Set(petCare.map((item) => item.category))];

  if (!petCare.length) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        Loading services...
      </div>
    );
  }

  return (
    <section className="w-11/12 mx-auto py-16">
      <h1
        className="text-center text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
        data-aos="fade-down"
      >
        All Pet Care Services
      </h1>
      <p
        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        data-aos="fade-up"
      >
        Explore our premium pet care services. Filter and sort to find the
        perfect option for your furry friend.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side Filter */}
        <aside className="w-full lg:w-1/4 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === cat
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-blue-100 text-gray-700'
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-2xl">
            <span className="text-xl font-bold underline">
              Service available: ({filteredPets.length})
            </span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredPets.length ? (
              filteredPets.map((pet) => (
                <div
                  key={pet.serviceId}
                  data-aos="zoom-in"
                  className="hover:-translate-y-2 transition-all duration-300"
                >
                  <AllService pet={pet} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-20">
                No services found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
