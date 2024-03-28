import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should have load button in Header Component", () => {
  render(
    <Provider store={appStore}>
      //To make Header.test.js understand Redux(useSelector)
      <BrowserRouter> //To make Header.test.js understand Link
        <Header />
      </BrowserRouter>
    </Provider>
  );

  //Quering
  const button = screen.getByRole("button",{name:"Login"});

  //Assersion
  expect(button).toBeInTheDocument();
});
it("Should have load cart in Header Component", () => {
  render(
    <Provider store={appStore}>
      //To make Header.test.js understand Redux(useSelector)
      <BrowserRouter> //To make Header.test.js understand Link
        <Header />
      </BrowserRouter>
    </Provider>
  );

  //Quering
  const cart = screen.getByText(/Cart/);   //  /Cart/ -> It is Rejex means it will check weather "Cart" string is present in the header

  //Assersion
  expect(cart).toBeInTheDocument();
});
it("Should change Login button to Logout button on click", () => {
  render(
    <Provider store={appStore}>
      //To make Header.test.js understand Redux(useSelector)
      <BrowserRouter> //To make Header.test.js understand Link
        <Header />
      </BrowserRouter>
    </Provider>
  );

  //Quering
  const login = screen.getByRole("button",{name:"Login"});
  
  fireEvent.click(login);
  
  const logout = screen.getByRole("button",{name:"Logout"});

  //Assersion
  expect(logout).toBeInTheDocument();
});
