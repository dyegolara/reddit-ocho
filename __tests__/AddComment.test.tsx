import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddComment from "@/components/AddComment";
import "@testing-library/jest-dom";

test("calls onSubmit with the comment when Comment button is clicked", async () => {
  const onSubmit = jest.fn();
  render(<AddComment onSubmit={onSubmit} />);

  const comment = "Test comment";
  userEvent.type(
    screen.getByPlaceholderText("What are your thoughts?"),
    comment
  );
  userEvent.click(screen.getByText("Comment"));

  await waitFor(() => expect(onSubmit).toHaveBeenCalledWith(comment));
});

test("calls cancel when Cancel button is clicked", async () => {
  const cancel = jest.fn();
  render(<AddComment onSubmit={() => {}} cancel={cancel} />);

  userEvent.click(screen.getByText("Cancel"));

  await waitFor(() => expect(cancel).toHaveBeenCalled());
});

test("does not call onSubmit when comment field is empty", async () => {
  const onSubmit = jest.fn();
  render(<AddComment onSubmit={onSubmit} />);

  userEvent.click(screen.getByText("Comment"));

  await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
});

test("renders Cancel button when cancel function is provided", async () => {
  const { rerender } = render(<AddComment onSubmit={() => {}} />);

  await waitFor(() => expect(screen.queryByText("Cancel")).toBeNull());

  rerender(<AddComment onSubmit={() => {}} cancel={() => {}} />);

  await waitFor(() => expect(screen.getByText("Cancel")).toBeInTheDocument());
});
