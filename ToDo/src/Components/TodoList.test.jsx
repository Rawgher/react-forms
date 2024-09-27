import { it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a task", function () {
  const { container, queryByText, getByLabelText } = render(<TodoList />);
  const taskInput = getByLabelText("Task");
  const addButton = container.querySelector("button");

  expect(queryByText("Push to github")).not.toBeInTheDocument();

  fireEvent.change(taskInput, { target: { value: "Push to github" } });
  fireEvent.click(addButton);

  expect(queryByText("Push to github")).toBeInTheDocument();
});

it("should remove a task", function () {
  const { container, queryByText, getByLabelText } = render(<TodoList />);
  const taskInput = getByLabelText("Task");
  const addButton = container.querySelector("button");

  fireEvent.change(taskInput, { target: { value: "Push to github" } });
  fireEvent.click(addButton);

  expect(queryByText("Push to github")).toBeInTheDocument();

  const taskToRemove = queryByText("Push to github");
  const removeBtn = taskToRemove.nextSibling;

  fireEvent.click(removeBtn);
  expect(queryByText("Push to github")).not.toBeInTheDocument();
});
