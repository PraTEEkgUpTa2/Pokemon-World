import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import PokemonCard from '@/components/PokemonCard';
import { fetchPokemonList, fetchPokemonDetail } from '@/utils/api';
import { useSearch } from '@/context/SearchContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { search } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10; // 4 rows * 5 cards

  useEffect(() => {
    const getData = async () => {
      const results = await fetchPokemonList();

      const detailed = await Promise.all(
        results.map(async (p) => {
          const detail = await fetchPokemonDetail(p.id);
          return { ...p, types: detail.types };
        })
      );

      setPokemons(detailed);
    };
    getData();
  }, []);

  const filtered = pokemons.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  const totalPages = Math.ceil(filtered.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = filtered.slice(startIndex, startIndex + cardsPerPage);

  return (
    <Layout>
       
      <div className="mt-60 translate-y-1/2"> {/* Push cards below navbar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 transform translate-x-1/20  z-50">
          {currentCards.map((p) => (
            <PokemonCard key={p.id} name={p.name} image={p.image} id={p.id} types={p.types} />
          ))}
        </div>
        <div className="flex justify-center mt-6 gap-4 items-center translate-y-1/2 translate-x-1/">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <ChevronLeft size={24} />
          </button>
          <span className="px-4 py-2 text-white dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
    </Layout>
  );
}