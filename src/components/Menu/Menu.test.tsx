import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { useRouter } from "next/router";
import { Menu } from "./Menu"; // Adjust the import path
import { setCurrentPage } from "@/store/slices/casinoGames/casinoGamesSlice"; // Adjust the import path
import { mockCategories } from "@/mock/mockData";

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock Redux store
const mockStore = configureStore([]);

describe("Menu", () => {

  const store = mockStore({
    casinoGames: {
      categories: mockCategories,
    },
  });

  const mockPush = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push: mockPush,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the menu with categories", () => {
    render(
      <Provider store={store}>
        <Menu />
      </Provider>
    );

    
    expect(screen.getByText("Game Categories")).toBeInTheDocument();
    mockCategories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });


  it("navigates to the correct category and dispatches setCurrentPage when a category is clicked", () => {
    render(
      <Provider store={store}>
        <Menu />
      </Provider>
    );


    const categoryButton = screen.getByText("Slots");
    fireEvent.click(categoryButton);

    expect(mockPush).toHaveBeenCalledWith("/casino/Slots");

    const actions = store.getActions();
    expect(actions).toContainEqual(setCurrentPage(1));
  });
});