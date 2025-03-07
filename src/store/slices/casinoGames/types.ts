

export interface GameProps {
  id: string;
  gameText: string;
  provider: string;
  image: {
    original: {
      src: string;
    };
  };
}

export interface StateProps {
  games: GameProps[];
  categories: CategoryProps[];
  selectedCategory: string | null;
  searchText: string;
  loading: boolean;
  error: string | null;
  currentPage: number;
  itemsPerPage: number;
  totalgames: number;
}

export interface Item {
  path: string;
  id: string;
  name: string;
  links: {
    getPage: string;
  };
}

export interface configMenu {
  menu: {
    lobby: {
      items: Item[];
    };
  };
}

export interface CategoryProps {
  id: string;
  name: string;
  getPage: string;
  path: string;
}
