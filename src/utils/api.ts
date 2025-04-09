export const fetchPokemonList = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();
  
    const results = await Promise.all(
      data.results.map(async (p: any, index: number) => {
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
  
  export const fetchPokemonDetail = async (id: number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((t: any) => t.type.name),
      abilities: data.abilities.map((a: any) => a.ability.name),
      stats: data.stats.map((a: any) => a.stat.name),
      base_stats: data.stats.map((a: any) => a.base_stat),
      moves: data.moves.map((a: any) => a.move.name),
      height: data.height,
      weight: data.weight,
    };
  };