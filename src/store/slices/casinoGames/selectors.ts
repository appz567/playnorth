import { RootState } from "@/store/types";

export const selectCategories = (state: RootState) => state.casinoGames.categories;

export const selectGames = (state: RootState) => state.casinoGames.games;

export const selectSelectedCategory = (state: RootState) => state.casinoGames.selectedCategory;

export const selectSearchText = (state: RootState) => state.casinoGames.searchText;

export const selectLoading = (state: RootState) => state.casinoGames.loading;

export const selectError = (state: RootState) => state.casinoGames.error;

export const selectCurrentPage = (state: RootState) => state.casinoGames.currentPage;

export const selectItemsPerPage = (state: RootState) => state.casinoGames.itemsPerPage;

export const selectTotalGames = (state: RootState) => state.casinoGames.totalgames;