import Head from 'next/head';
import React, { FC } from 'react'
import FavouriteIcon from 'assets/icons/favourite.svg';

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
          <title>AutoFavs</title>
          <meta name="author" content="Francisco Jarma"/>
          <meta name="description" content="Next JS Application to automatically categorize your favourites links."/>
          <meta name="keywords" content='Francisco Jarma, favourites, NextJs'/>
          <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        {children}
      </main>
    </>
  )
}
