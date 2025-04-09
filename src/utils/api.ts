// Types for results
interface PokemonListResult {
  name: string;
  url: string;
}

interface PokemonListResponse {
  results: PokemonListResult[];
}

export const fetchPokemonList = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data: PokemonListResponse = await res.json();

  const results = await Promise.all(
    data.results.map(async (p, index) => {
      const id = index + 1;
      return {
        id,
        name: p.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    })
  );

  return results;
};

// Types for Pokémon detail
interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonAbility {
  ability: {
    name: string;
  };
}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonMove {
  move: {
    name: string;
  };
}

interface PokemonDetailResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  moves: PokemonMove[];
}

export const fetchPokemonDetail = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: PokemonDetailResponse = await res.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map((t) => t.type.name),
    abilities: data.abilities.map((a) => a.ability.name),
    stats: data.stats.map((s) => s.stat.name),
    base_stats: data.stats.map((s) => s.base_stat),
    moves: data.moves.map((m) => m.move.name),
    height: data.height,
    weight: data.weight,
  };
};
