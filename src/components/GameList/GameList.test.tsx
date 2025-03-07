import { render, screen } from "@testing-library/react";
import { GameList } from "./GameList";
import { mockGames } from "@/mock/mockData";

jest.mock("../GameCard/GameCard", () => ({
  __esModule: true,
  GameCard: ({ gameText, imageUrl }: any) => (
    <div>
      <h2>{gameText}</h2>
      <img src={imageUrl} alt="game image" />
    </div>
  ),
}));

describe("GameList", () => {

  it("renders the correct number of GameCards", () => {
    render(<GameList games={mockGames} />);

    // Check that there are 2 GameCards rendered
    const gameCards = screen.getAllByRole("heading"); // GameCard should render an <h2> for the title
    expect(gameCards).toHaveLength(2);
  });

  it("renders the correct game text and image for each GameCard", () => {
    render(<GameList games={mockGames} />);

    // Check the game text for both GameCards
    const gameOneText = screen.getByText("Game One");
    const gameTwoText = screen.getByText("Game Two");
    const images = screen.getAllByAltText("game image");
    
    // Check the images for both GameCards
    expect(gameOneText).toBeInTheDocument();
    expect(gameTwoText).toBeInTheDocument();
    expect(images[0]).toHaveAttribute("src", mockGames[0].image.original.src);
    expect(images[1]).toHaveAttribute("src", mockGames[1].image.original.src);
  });
});
