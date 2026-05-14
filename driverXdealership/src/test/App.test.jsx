import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

test("renders dealership title", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const text = screen.getByText(/DriverXDealership/i);

  expect(text).toBeInTheDocument();
});