import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // Mock the Image component as a simple img tag
    return <img {...props} />;
  },
}));

describe("Loading", () => {
  it("renders the loading GIF with the correct attributes", () => {
    render(<Loading />);

    const imageElement = screen.getByRole("img", { name: /loading/i });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "/assets/loading.gif");
    expect(imageElement).toHaveAttribute("alt", "Loading...");
    expect(imageElement).toHaveAttribute("width", "300");
    expect(imageElement).toHaveAttribute("height", "200");
  });
});
