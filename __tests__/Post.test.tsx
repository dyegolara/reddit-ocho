import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Post from "@/components/Post";
import "@testing-library/jest-dom";

const postMock = {
  subreddit: "testSubreddit",
  author: "testAuthor",
  title: "testTitle",
  url: "testUrl",
  score: 10,
  permalink: "testPermalink",
  is_video: false,
  is_reddit_media_domain: false,
  is_self: false,
  is_gallery: false,
  post_hint: "",
};

test("renders subreddit, author, title and score", () => {
  render(<Post post={postMock} clickable={true} />);

  expect(screen.getByText(/r\/testSubreddit/i)).toBeInTheDocument();
  expect(screen.getByText(/u\/testAuthor/i)).toBeInTheDocument();
  expect(screen.getByText(/testTitle/i)).toBeInTheDocument();
  expect(screen.getByText("10")).toBeInTheDocument();
});

test("renders self text when post is a self post", () => {
  render(
    <Post
      post={{ ...postMock, is_self: true, selftext: "Test selftext" }}
      clickable={true}
    />
  );

  expect(screen.getByText(/Test selftext/i)).toBeInTheDocument();
});

test("renders Gallery when post is a gallery", () => {
  render(
    <Post
      post={{ ...postMock, is_gallery: true, gallery_data: { items: [] } }}
      clickable={true}
    />
  );

  expect(screen.getByTestId("gallery")).toBeInTheDocument();
});
