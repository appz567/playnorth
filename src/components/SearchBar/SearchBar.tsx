import { ChangeEvent, useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  getDataPerCategory,
  setCurrentPage,
  setSearchText,
} from "@/store/slices/casinoGames/casinoGamesSlice";
import { debounce } from "@/utils/debounce";
import { AppDispatch } from "@/store/types";
import { SEARCH_ALL_GAMES_API_URL } from "@/constants";

export const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const debouncedDispatch = useCallback(
    debounce((inputValue: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchText(inputValue.target.value));
      dispatch(setCurrentPage(1));
      dispatch(
        getDataPerCategory(`${SEARCH_ALL_GAMES_API_URL}${inputValue.target.value}`)
      );
    }, 500),
    [dispatch]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedDispatch(e);
  };

  return (
    <div className="search-container ">
      <input
        className="search-input"
        type="text"
        placeholder="Are you looking for a specific game?"
        aria-label="Search for games"
        onChange={handleChange}
      />
    </div>
  );
};
