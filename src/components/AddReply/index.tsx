import React, { useCallback, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddComment from "@/components/AddComment";
import { CommentType } from "@/types";

import styles from "./AddReply.module.css";

interface AddReplyProps {
  setReplies: (
    f: (prevReplies: { data: CommentType }[]) => { data: CommentType }[]
  ) => void;
}

const AddReply: React.FC<AddReplyProps> = ({ setReplies }) => {
  const commentBoxRef = useRef<HTMLTextAreaElement>(null);
  const [expanded, setExpanded] = useState(false);

  const expandCommentBox = () => {
    setExpanded(true);
    setTimeout(() => {
      if (commentBoxRef.current) {
        commentBoxRef.current.focus();
      }
    }, 0);
  };

  const closeCommentBox = useCallback(() => {
    setExpanded(false);
  }, []);

  const handleCommentSubmit = useCallback(
    (comment: string) => {
      const newComment = {
        data: {
          id: uuidv4(),
          score: 0,
          author: "You",
          body: comment,
          replies: { data: { children: [] } },
        } as CommentType,
      };
      setReplies((prevReplies) => [newComment, ...prevReplies]);
      closeCommentBox();
    },
    [closeCommentBox, setReplies]
  );

  if (expanded) {
    return (
      <AddComment
        textareaRef={commentBoxRef}
        onSubmit={handleCommentSubmit}
        cancel={closeCommentBox}
      />
    );
  } else {
    return (
      <button className={styles.addReplyButton} onClick={expandCommentBox}>
        Reply
      </button>
    );
  }
};

export default AddReply;
