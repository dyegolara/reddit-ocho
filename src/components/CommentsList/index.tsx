import React from "react";

import Comment from "@/components/Comment";
import { CommentType } from "@/types";

import styles from "./CommentsList.module.css";

const CommentsList = ({ comments }: { comments: { data: CommentType }[] }) => {
  return (
    <ul className={styles.ul}>
      {comments.map(({ data: comment }) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
