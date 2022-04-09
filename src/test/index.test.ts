import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import App from "../App.svelte";
import "./setup";

describe("check jest", () => {
  it("should be able to run jest", () => {
    expect(true).toBe(true);
  });

  it("should be able to check svelte files", () => {
    const { getByTestId } = render(App, {
      props: {},
    });

    expect(getByTestId("app")).toBeInTheDocument();
  });
});
