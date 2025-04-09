"use client";

import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { fetchPokemonDetail, fetchPokemonList } from '@/utils/api';

const moveColors = ['bg-green-500', 'bg-red-500', 'bg-purple-500', 'bg-orange-400', 'bg-pink-400', 'bg-yellow-500'];

const PokemonDetail = ({ pokemon }: { pokemon: any }) => {
  return (
    
      <div className="h-screen w-full flex flex-col justify-start items-center bg-[#dffcf4] px-4">
        
        <div className="w-full flex justify-between items-center pt-4 px-8">
          <h1 className="text-7xl font-extrabold tracking-wide  drop-shadow-xl translate-x-1/2">{pokemon.name.toUpperCase()}</h1>
          <img src="/pokemon-logo.png" alt="Pokemon Logo" width={200}
        height={100}/>
        </div>

        
        <div className="w-full max-h-[80vh] overflow-y-auto mt-4 bg-gradient-to-br from-green-300 to-green-400 shadow-lg flex p-6 relative rounded-lg">
          
          <div className="w-1/2 pr-6 space-y-6 translate-x-1/7 translate-y-1/12">
            {/* Moves */}
            <div>
              <h3 className="text-xs font-semibold uppercase text-white mb-4">Moveset</h3>
              <div className="flex flex-col gap-3">
                {(pokemon.moves || []).slice(0, 6).map((move: string, idx: number) => (
                  <div
                    key={move}
                    className={`flex justify-between items-center px-4 py-2 rounded-md text-white text-sm font-medium h-10 shadow ${moveColors[idx % moveColors.length]}`}
                  >
                    <span className="pl-2">{move.toUpperCase()}</span>
                    <span className="-pr-4">{Math.floor(Math.random() * 20) + 5}/20</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Types */}
            <div>
              <h3 className="text-xs font-semibold uppercase text-white mb-2 mt-4">Types</h3>
              <div className="flex flex-wrap gap-2">
                {(pokemon.types || []).map((type: string) => (
                 <div
                 key={type}
                 className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-semibold shadow w-20 h-5 flex items-center justify-center"
                 >
                 {type.toUpperCase()}
              </div>
                ))}
              </div>
           </div>


            {/* Abilities */}
            <div>
              <h3 className="text-xs font-semibold uppercase text-white mb-2 mt-4">Abilities</h3>
              <div className="space-y-1 flex flex-wrap gap-2">
                {(pokemon.abilities || []).map((ability: string) => (
                  <div key={ability} className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-semibold shadow w-30 h-5 flex items-center justify-center">
                    {ability.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4">
              <h3 className="text-xs font-semibold uppercase text-white mb-2">Stats</h3>
              <div className="space-y-2 text-white font-medium text-sm">
                {(pokemon.stats || []).map((stat: string, idx: number) => (
                  <div key={stat} className="flex justify-between items-center">
                    <span>{stat.toUpperCase()}</span>
                    <span className="text-white font-semibold">{pokemon.base_stats[idx]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="w-1/2 flex flex-col items-center justify-center relative">
            <img src={pokemon.image} alt={pokemon.name} className="w-80 h-80 object-contain" />
            <div className="mt-2 text-white font-medium text-sm  backdrop-blur-sm px-8 py-1 rounded-full w-50 translate-x-1/10">
              Height: {pokemon.height || "2'7\""} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Weight: {pokemon.weight || '66 lbs'}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons = await fetchPokemonList();
  const paths = pokemons.map((p) => ({ params: { id: p.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pokemon = await fetchPokemonDetail(Number(params?.id));
  return { props: { pokemon } };
};

export default PokemonDetail;
