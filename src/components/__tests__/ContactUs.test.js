import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  test("Should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("Should load contact us component", () => {
    //Same as test

    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("should load 2 inputs in contact us component", () => {
    render(<ContactUs />);

    //Quering
    const input = screen.getAllByRole("textbox");

    //Assersion
    expect(input.length).toBe(2);
  });
});
