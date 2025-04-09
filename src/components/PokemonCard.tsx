import Link from 'next/link';

interface PokemonCardProps {
  name: string;
  image: string;
  id: number;
  types?: string[];
}



const PokemonCard = ({ name, image, id }: PokemonCardProps) => {
  return (
    <Link href={`/pokemon/${id}`}>
      <div className="w-full max-w-[250px] mx-auto p-5 min-h-[150px] bg-white/20  backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-300 cursor-pointer flex flex-col items-center justify-between">
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
