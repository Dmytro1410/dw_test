import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { getFilteredDefinitions } from "../store/selectors/Definitions";
import AllDefinitions from "../taskpane/components/AllDefinitions";

const mockStore = configureStore([]);

jest.mock("../store/selectors/Definitions", () => ({
  getFilteredDefinitions: jest.fn(),
}));

describe("AllDefinitions Component", () => {
  let store;

  beforeEach(() => {
    getFilteredDefinitions.mockReturnValue([]);
  });

  it("should render the AllDefinitions component with empty state", () => {
    store = mockStore({ definitions: { allDefinitions: [{}] } });
    render(
      <Provider store={store}>
        <AllDefinitions />
      </Provider>
    );

    expect(screen.getByText("There are no definitions in this document")).toBeInTheDocument();
  });

  it("should render the AllDefinitions component with definitions", () => {
    getFilteredDefinitions.mockReturnValue([{ term: "TERM 1" }]);
    const { getAllByRole, getByTestId } = render(
      <Provider store={store}>
        <AllDefinitions />
      </Provider>
    );

    expect(getByTestId("definition-list")).toBeInTheDocument();
    const termElements = getAllByRole("listitem");

    expect(termElements).toHaveLength(1);
  });
});
