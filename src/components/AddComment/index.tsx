"use client";
import React, { FormEvent } from "react";
import styles from "./AddComment.module.css";

type AddCommentProps = {
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
  onSubmit: (comment: string) => void;
  cancel?: () => void;
};

const AddComment: React.FC<AddCommentProps> = ({
  textareaRef,
  onSubmit,
  cancel,
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const comment = event.currentTarget.comment?.value;
    if (comment) onSubmit?.(comment);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        name="comment"
        ref={textareaRef}
        placeholder="What are your thoughts?"
        className={styles.textarea}
        rows={5}
      />
      <div className={styles.buttonWrapper}>
        {cancel && (
          <button
            className={styles.cancelButton}
            type="button"
            onClick={cancel}
          >
            Cancel
          </button>
        )}
        <button className={styles.submitButton} type="submit">
          Comment
        </button>
      </div>
    </form>
  );
};

export default AddComment;
