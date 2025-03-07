import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Pagination } from "./Pagination"; // Adjust the import path
import { setCurrentPage } from "@/store/slices/casinoGames/casinoGamesSlice"; // Adjust the import path

// Mock Redux store
const mockStore = configureStore([]);

describe("Pagination", () => {
  const initialState = {
    casinoGames: {
      currentPage: 2,
      itemsPerPage: 10,
      totalGames: 50,
    },
  };

  const store = mockStore(initialState);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the current page and total pages correctly", () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    expect(screen.getByText(/Page 2/)).toBeInTheDocument();
  });

  it("dispatches setCurrentPage with the correct page number when Previous is clicked", () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    const previousButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(previousButton);


    const actions = store.getActions();
    expect(actions).toContainEqual(setCurrentPage(1));
  });

  it("dispatches setCurrentPage with the correct page number when Previous is clicked", () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );


    const previousButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(previousButton);

    const actions = store.getActions();
    expect(actions).toContainEqual(setCurrentPage(3));
  });
  
});