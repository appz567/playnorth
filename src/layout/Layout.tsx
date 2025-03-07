import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SearchBar } from "@/components/SearchBar/SearchBar";
import { getCategories } from "@/store/slices/casinoGames/casinoGamesSlice";
import { Pagination } from "@/components/Pagination/Pagination";
import { Menu } from "@/components/Menu/Menu";
import { AppDispatch } from "@/store/types";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="layout">
      <SearchBar />
      <Pagination />
      <div className="main-screen-wrapper">
        <Menu />
        {children}
      </div>
    </div>
  );
};
