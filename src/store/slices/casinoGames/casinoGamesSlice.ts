import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "@/constants";
import { CategoryProps, configMenu, StateProps } from "./types";

const initialState: StateProps = {
  games: [],
  categories: [],
  selectedCategory: null,
  searchText: "",
  loading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 40,
  totalgames: 0,
};

const casinoGamesSlice = createSlice({
  name: "casinoGames",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch categories";
        state.loading = false;
        state.categories = [];
      })
      .addCase(getDataPerCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDataPerCategory.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(getDataPerCategory.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch games";
        state.loading = false;
        state.games = [];
      })
      .addCase(getImportantData.fulfilled, (state, action) => {
        state.totalgames = action.payload;
      });
  },
});

export const getCategories = createAsyncThunk(
  "casinoGames/getCategories",
  async () => {
    try {
      const res = await axios.get<configMenu>(`${API_URL}/en/config`);
      const lobbyItems = res.data.menu.lobby.items || [];

      const categoriesArray: CategoryProps[] = lobbyItems
        .map((item) => ({
          id: item.id,
          name: item.name,
          getPage: item.links.getPage,
          path: item.path.replace(/^\/casino\//, "").replace(/\//g, ""),
        }))
        .toSorted((a, b) => a.name.localeCompare(b.name));

      return categoriesArray;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
);

export const getImportantData = createAsyncThunk(
  "casinoGames/getImportantData",
  async (url: string) => {
    try {
      const res = await axios.get(url);
      const components = res.data.components || [];
      const totalgames = components.flatMap(
        (total: { total: number }) => total.total || 0
      )[0];
      return totalgames;
    } catch (error) {
      console.error(`Error fetching Important Data ${error}`);
      throw error;
    }
  }
);

export const getDataPerCategory = createAsyncThunk(
  "casinoGames/getDataPerCategory",
  async (url: string) => {
    try {
      const res = await axios.get(url);
      const items = res.data.items || [];

      return items;
    } catch (error) {
      console.error(`Error fetching games by category ${error}`);
      throw error;
    }
  }
);

export const { setSelectedCategory, setSearchText, setCurrentPage } =
  casinoGamesSlice.actions;
export default casinoGamesSlice.reducer;
