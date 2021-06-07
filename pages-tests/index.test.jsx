import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

test("App renders user name", () => {
  render(<Home />);
  const welcomeMessage = screen.getByRole("heading", {
    name: /Welcome to Next.js/,
  });
  expect(welcomeMessage).toBeInTheDocument();
});
