import React from "react";
import { DOWN, HUMAN_READABLE_UNITS, UP } from "@/const";
import styles from "./Votes.module.css";
import cn from "classnames";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

type VotesProps = {
  score: number;
  voted: string;
  onVote: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showScore: boolean;
};

const getHumanReadableScore = (score?: number, unit = 0): string => {
  if (!score) return "0";
  if (score < 1000) return `${score}${HUMAN_READABLE_UNITS[unit]}`;
  const abbreviatedScore = Math.round((score / 1000) * 10) / 10;
  return getHumanReadableScore(abbreviatedScore, unit + 1);
};

const Votes: React.FC<VotesProps> = ({ score, voted, onVote, showScore }) => {
  return (
    <div className={styles.votes}>
      <button
        name={UP}
        onClick={onVote}
        className={cn(styles.voteButton, styles.upvote, {
          [styles.voted]: voted === UP,
        })}
      >
        <ArrowBigUp size={24} />
      </button>
      {showScore && (
        <span
          className={cn(styles.score, {
            [styles.up]: voted === UP,
            [styles.down]: voted === DOWN,
          })}
        >
          {getHumanReadableScore(score)}
        </span>
      )}
      <button
        name={DOWN}
        onClick={onVote}
        className={cn(styles.voteButton, styles.downvote, {
          [styles.voted]: voted === DOWN,
        })}
      >
        <ArrowBigDown size={24} />
      </button>
    </div>
  );
};

export default Votes;
