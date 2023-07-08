import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddReply from "@/components/AddReply";
import "@testing-library/jest-dom";

test("renders Reply button initially", () => {
  render(<AddReply setReplies={() => {}} />);

  expect(screen.getByText("Reply")).toBeInTheDocument();
  expect(
    screen.queryByPlaceholderText("What are your thoughts?")
  ).not.toBeInTheDocument();
});

test("renders AddComment when Reply button is clicked", async () => {
  render(<AddReply setReplies={() => {}} />);

  userEvent.click(screen.getByText("Reply"));

  await waitFor(() =>
    expect(
      screen.getByPlaceholderText("What are your thoughts?")
    ).toBeInTheDocument()
  );
});

test("updates replies state and unmounts AddComment when comment is submitted", async () => {
  const setReplies = jest.fn();
  render(<AddReply setReplies={setReplies} />);

  userEvent.click(screen.getByText("Reply"));
  await waitFor(() => {
    expect(
      screen.getByPlaceholderText("What are your thoughts?")
    ).toBeInTheDocument();
  });

  userEvent.type(
    screen.getByPlaceholderText("What are your thoughts?"),
    "Test reply"
  );

  userEvent.click(screen.getByText("Comment"));

  await waitFor(() => {
    expect(setReplies).toHaveBeenCalled();
    expect(screen.getByText("Reply")).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("What are your thoughts?")
    ).not.toBeInTheDocument();
  });
});

test("unmounts AddComment and re-renders Reply button when Cancel is clicked", async () => {
  render(<AddReply setReplies={() => {}} />);

  userEvent.click(screen.getByText("Reply"));
  await waitFor(() => {
    expect(
      screen.getByPlaceholderText("What are your thoughts?")
    ).toBeInTheDocument();
  });

  userEvent.click(screen.getByText("Cancel"));

  await waitFor(() => {
    expect(screen.getByText("Reply")).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("What are your thoughts?")
    ).not.toBeInTheDocument();
  });
});
