import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

test("renders home page title", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const title = screen.getByText(/track your developer projects/i);
  expect(title).toBeInTheDocument();
});