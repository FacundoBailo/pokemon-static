import { FC, ReactNode } from 'react';
import Head from "next/head"
import { Navbar } from '../ui';

interface Props  {
  children: ReactNode;
  title?: string;
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin

export const Layout: FC <Props>  = ({ children, title }) => {

  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="Facundo Bailo" ></meta>
            <meta name="description" content={`Informacion sobre el pokemon ${ title }`} ></meta>
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} ></meta>

            <meta property="og:title" content={`Informacion sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${ title }`}/>
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        <Navbar/>

        <main style={{
          padding: '0 20px'
        }}>
            { children }
        </main>

    </>
  )
}