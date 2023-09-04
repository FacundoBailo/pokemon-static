import { pokeApi } from "@/api"
import { Pokemon } from "@/interfaces"


export const getPokemonInfo = async( namerId: string ) => {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ namerId }`)
  
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }
  

}