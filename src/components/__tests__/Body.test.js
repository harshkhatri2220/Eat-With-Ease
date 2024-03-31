import { render , screen} from "@testing-library/react";
import MOCK_DATA from "../mocks/BodyMock.json";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; //for using toBeInTheDocument

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load body component with search element", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    // const searchBtn = screen.getByTestId("search");
    // console.log(searchBtn)

    // expect(searchBtn).toBeInTheDocument();
  });
});
