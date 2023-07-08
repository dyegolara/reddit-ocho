import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddComment from "./index";

test("calls onSubmit with the comment when Comment button is clicked", () => {
  const onSubmit = jest.fn();
  render(<AddComment onSubmit={onSubmit} />);

  const comment = "Test comment";
  fireEvent.change(screen.getByPlaceholderText("What are your thoughts?"), {
    target: { value: comment },
  });
  fireEvent.click(screen.getByText("Comment"));

  expect(onSubmit).toHaveBeenCalledWith(comment);
});

test("calls cancel when Cancel button is clicked", () => {
  const cancel = jest.fn();
  render(<AddComment onSubmit={() => {}} cancel={cancel} />);

  fireEvent.click(screen.getByText("Cancel"));

  expect(cancel).toHaveBeenCalled();
});

test("does not call onSubmit when comment field is empty", () => {
  const onSubmit = jest.fn();
  render(<AddComment onSubmit={onSubmit} />);

  fireEvent.click(screen.getByText("Comment"));

  expect(onSubmit).not.toHaveBeenCalled();
});

test("renders Cancel button when cancel function is provided", () => {
  const { rerender } = render(<AddComment onSubmit={() => {}} />);

  expect(screen.queryByText("Cancel")).toBeNull();

  rerender(<AddComment onSubmit={() => {}} cancel={() => {}} />);

  expect(screen.getByText("Cancel")).toBeInTheDocument();
});
