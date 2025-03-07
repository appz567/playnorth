import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SearchBar } from "./SearchBar"; // Adjust the import path

const mockStore = configureStore([]);

describe("SearchBar", () => {
  it("renders the search input correctly", () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(
      "Are you looking for a specific game?"
    );
    expect(inputElement).toBeInTheDocument();
  });
});
