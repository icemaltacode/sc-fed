import { render, screen, within } from "@testing-library/react";
import MenuItem from "../components/MenuItem";

test("MenuItem renders a link in a list item", () => {
  // ARRANGE
  render(<MenuItem href="/blog" label="Blog" />);

  // ASSERT
  const listItem = screen.getByRole("listitem");
  const link = within(listItem).getByRole("link");

  expect(link).toHaveAttribute("href", "/blog");
  expect(link).toHaveAttribute("title", "Blog");
  expect(link).toHaveTextContent("Blog");
});