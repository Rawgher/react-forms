import { it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", function () {
  const { container, getByLabelText } = render(<BoxList />);
  const colorInput = getByLabelText("Box Color");
  const widthInput = getByLabelText("Box Width");
  const heightInput = getByLabelText("Box Height");
  const addButton = container.querySelector("button");

  const boxes = container.querySelectorAll(".Box-div");
  const lastBox = boxes[boxes.length - 1];
  expect(lastBox).not.toHaveStyle("background-color: blue");

  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "150" } });

  fireEvent.click(addButton);
  const newBoxes = container.querySelectorAll(".Box-div");
  const newLastBox = newBoxes[newBoxes.length - 1];
  expect(newLastBox).toHaveStyle("background-color: rgb(0, 0, 255)");
  expect(newLastBox).toHaveStyle("width: 100px");
  expect(newLastBox).toHaveStyle("height: 150px");
});
