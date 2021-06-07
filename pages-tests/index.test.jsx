import { render } from "@testing-library/react";

import Home from "../pages/index";

test("App renders user name", () => {
  render(<Home />);
});
