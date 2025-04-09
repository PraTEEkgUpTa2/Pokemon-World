import Link from 'next/link';

interface PokemonCardProps {
  name: string;
  image: string;
  id: number;
  types?: string[];
}

const typeColors: Record<string, string> = {
  normal: 'bg-gray-300 dark:bg-gray-600',
  fire: 'bg-red-400 dark:bg-red-600',
  water: 'bg-blue-400 dark:bg-blue-600',
  grass: 'bg-green-400 dark:bg-green-600',
  electric: 'bg-yellow-400 dark:bg-yellow-500',
  ice: 'bg-blue-200 dark:bg-blue-400',
  fighting: 'bg-orange-700 dark:bg-orange-900',
  poison: 'bg-purple-400 dark:bg-purple-600',
  ground: 'bg-yellow-600 dark:bg-yellow-800',
  flying: 'bg-indigo-300 dark:bg-indigo-500',
  psychic: 'bg-pink-400 dark:bg-pink-600',
  bug: 'bg-lime-500 dark:bg-lime-700',
  rock: 'bg-yellow-800 dark:bg-yellow-900',
  ghost: 'bg-indigo-700 dark:bg-indigo-900',
  dark: 'bg-gray-800 dark:bg-black',
  dragon: 'bg-purple-700 dark:bg-purple-900',
  steel: 'bg-gray-400 dark:bg-gray-500',
  fairy: 'bg-pink-200 dark:bg-pink-400',
};

const PokemonCard = ({ name, image, id }: PokemonCardProps) => {
  return (
    <Link href={`/pokemon/${id}`}>
      <div className="w-full max-w-[250px] mx-auto p-5 min-h-[150px] bg-white/20 dark:bg-gray-700 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-300 cursor-pointer flex flex-col items-center justify-between">
        {/* Centered Image */}
        <div className="w-full flex justify-center">
          <img src={image} alt={name} className="w-28 h-28 object-contain" />
        </div>

        {/* Name */}
        <h3 className="text-center mt-4 text-lg sm:text-xl font-extrabold tracking-wide text-gray-800 dark:text-white capitalize">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default PokemonCard;
