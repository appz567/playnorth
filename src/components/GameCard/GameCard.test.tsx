import { render, screen } from "@testing-library/react";

import { mockGameCardProps } from "@/mock/mockData";
import { GameCard } from "./GameCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("GameCard", () => {
  it("renders the game text and image correctly", () => {
    render(<GameCard {...mockGameCardProps} />);

    // Check if the game text is rendered
    const gameTextElement = screen.getByText(mockGameCardProps.gameText);
    expect(gameTextElement).toBeInTheDocument();
    expect(gameTextElement).toHaveClass("game-title");
  });
});
