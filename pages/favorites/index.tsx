import { useState, useEffect } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { Layout } from "@/components/layouts"
import { FavoriteCardPokemon, FavoritesPokemons, NoFavorites } from "@/components/ui"
import { localFavorites } from "@/utils";
import { NextPage } from "next"

const FavoritesPage: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {

    setFavoritePokemons(localFavorites.pokemons())

  }, [])
  

  return (
    <Layout title="Pokemons - Favoritos">

      {
        favoritePokemons.length === 0
          ? ( <NoFavorites/> )
          : ( <FavoritesPokemons pokemons = { favoritePokemons }/>)

      }
      
    </Layout>
  )
}
export default FavoritesPage