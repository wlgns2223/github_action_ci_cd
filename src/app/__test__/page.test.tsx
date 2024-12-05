import { describe } from "node:test";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
  it("should render without crashing", () => {
    expect(1).toBe(1);
  });

  it("shuold render main", () => {
    const { getByText } = render(<Page />);
    const main = getByText(/Deploy now/);
    expect(main).toBeInTheDocument();
  });
});
