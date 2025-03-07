import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameList } from '@/components/GameList/GameList';
import { getDataPerCategory, getImportantData } from '@/store/slices/casinoGames/casinoGamesSlice';
import { AppDispatch } from '@/store/types';
import { selectCurrentPage, selectError, selectGames, selectItemsPerPage, selectLoading, selectSearchText } from '@/store/slices/casinoGames/selectors';
import Head from 'next/head';
import { metaDataProps } from '@/types';
import { ALL_GAMES_API_URL } from '@/constants';

export default function Home({ metaData }: { metaData: metaDataProps }) {
  const dispatch = useDispatch<AppDispatch>();
  const games = useSelector( selectGames );
  const searchParam = useSelector( selectSearchText );
  const loading = useSelector( selectLoading );
  const error = useSelector( selectError );
  const currentPage = useSelector( selectCurrentPage );
  const itemsPerPage = useSelector( selectItemsPerPage );


  useEffect(() => {
    dispatch(getImportantData(ALL_GAMES_API_URL));
  }, [dispatch]);

  useEffect(() => {
    if( searchParam === '') {
      dispatch(getDataPerCategory(`https://casino.api.pikakasino.com/v1/pika/en/games/tiles?pageNumber=${currentPage}&pageSize=${itemsPerPage}&gameCollections=all-games`));
      }
  }, [dispatch, searchParam, currentPage, itemsPerPage]);

  if (loading) {
    return (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
    <Head>
      <title>{metaData.title}</title>
      <meta
        name="description"
        content={metaData.description}
      />
      <link
        rel="canonical"
        href={`https://localhost.com${metaData.path}`}
      />
    </Head>

    <GameList games={games} />
  </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(ALL_GAMES_API_URL);
  const data = await res.json();

  return { props: { metaData: data.meta } };
}
