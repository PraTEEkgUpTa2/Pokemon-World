
import { useSearch } from '@/context/SearchContext';
import Link from 'next/link';
import {SearchIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  
  const { search, setSearch } = useSearch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-10 py-6 h-15 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-300 dark:border-gray-700 flex justify-between items-center w-[95%] max-w-5xl">
      <div className="flex items-center justify-between w-full">
  {/* Left: Pokémon Explorer */}
  <Link href="/">
    <h1 className="translate-x-1/2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500 hover:opacity-90 transition duration-300">
      Pokémon Explorer
    </h1>
  </Link>

  {/* Right: Search Icon */}
  <button
    onClick={() => setIsSearchOpen(!isSearchOpen)}
    className="text-gray-800 dark:text-white hover:scale-105 transition-transform -translate-x-1/2"
    aria-label="Toggle Search"
  >
    <SearchIcon className="w-6 h-6" />
  </button>
</div>

      
      
      {isSearchOpen && (
        <div className="absolute top-full mt-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 w-96 h-10 z-50">
          <div className="flex items-center mb-2 gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Pokémon..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <button onClick={() => setIsSearchOpen(false)} aria-label="Close Search">
              <XIcon className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-red-500 transition" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
