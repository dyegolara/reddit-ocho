import React, { useState } from "react";
import { DOWN, UP } from "@/const";

export const useVotes = (score: number) => {
  const [voted, setVoted] = useState("");

  const handleVoteButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    if (voted === name) {
      setVoted("");
    } else {
      setVoted(name);
    }
  };

  let updatedScore = score;
  if (voted === UP) updatedScore = score + 1;
  if (voted === DOWN) updatedScore = score - 1;

  return { voted, handleVoteButtonClick, updatedScore };
};