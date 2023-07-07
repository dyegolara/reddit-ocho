import styles from "./AddReply.module.css";
import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import AddComment from "@/components/AddComment";

interface AddReplyProps {
  setReplies: (f: (prevReplies: Array<{}>) => Array<{}>) => void;
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

  const closeCommentBox = () => {
    setExpanded(false);
  };

  const handleCommentSubmit = (comment: string) => {
    const newComment = {
      data: {
        id: uuidv4(),
        score: 0,
        author: "You",
        body: comment,
        replies: { data: { children: [] } },
      },
    };
    setReplies((prevReplies) => [newComment, ...prevReplies]);
    closeCommentBox();
  };

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
