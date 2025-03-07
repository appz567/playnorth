import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { selectCategories } from "@/store/slices/casinoGames/selectors";
import { setCurrentPage } from "@/store/slices/casinoGames/casinoGamesSlice";
import { AppDispatch } from "@/store/types";

export const Menu = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectCategories);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false); // State to control menu expansion

  const handleCategoryClick = (path: string) => {
    router.push(`/casino/${path}`);
     dispatch(setCurrentPage(1));
  };

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded); // Toggle menu state
  };

  return (
    <div className='menu'>
      <h2 className='title'>Game Categories</h2>
      {/* Mobile toggle button */}
      <button className='mobile-toggle-button' onClick={toggleMenu}>
        {isMenuExpanded ? "Close Menu" : "Open Menu"}
      </button>
      {/* Menu content */}
      <div className={`category-list ${isMenuExpanded ? 'expanded' : ""}`}>
        {categories?.map((category) => (
          <button
            className='category-button'
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
