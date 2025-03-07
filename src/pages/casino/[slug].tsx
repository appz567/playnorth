import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { GameList } from "@/components/GameList/GameList";
import {
  getDataPerCategory,
  getImportantData,
  setSelectedCategory,
} from "@/store/slices/casinoGames/casinoGamesSlice";
import {
  selectCategories,
  selectCurrentPage,
  selectError,
  selectGames,
  selectItemsPerPage,
  selectLoading,
  selectSelectedCategory,
} from "@/store/slices/casinoGames/selectors";
import { AppDispatch } from "@/store/types";
import { getGameCollection, getPageByCategoryName } from "@/utils/path";
import { Loading } from "@/components/Loading/Loading";

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const dispatch = useDispatch<AppDispatch>();
  const games = useSelector(selectGames);
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const selectedCategory = useSelector(selectSelectedCategory);

  useEffect(() => {
    dispatch(
      getImportantData(getPageByCategoryName(categories, slug as string))
    );
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    dispatch(
      getDataPerCategory(
        `https://casino.api.pikakasino.com/v1/pika/en/games/tiles?pageNumber=${currentPage}&pageSize=${itemsPerPage}&gameCollections=${getGameCollection(
          categories,
          slug as string
        )}`
      )
    );
    dispatch(setSelectedCategory(slug));
  }, [dispatch, slug, currentPage, itemsPerPage]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return <GameList games={games} />;
};

export default CategoryPage;
