export const mockCategories = [
  { id: "1", name: "Slots", getPage: "/slots", path: "/" },
  { id: "2", name: "Table Games", getPage: "/table-games", path: "/" },
  { id: "3", name: "Live Casino", getPage: "/live-casino", path: "/" },
];

export const mockGameCardProps = {
  gameText: "Test Game",
  imageUrl: "/test-image.jpg",
};

export const mockGames = [
  {
    id: "1",
    gameText: "Game One",
    provider: "",
    image: {
      original: {
        src: "https://example.com/game-one.jpg",
      },
    },
  },
  {
    id: "2",
    gameText: "Game Two",
    provider: "",
    image: {
      original: {
        src: "https://example.com/game-two.jpg",
      },
    },
  },
];
