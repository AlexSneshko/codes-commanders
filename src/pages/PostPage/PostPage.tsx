import { useParams } from "react-router-dom";

import { useGetCommentsByPostIdQuery, useGetPostByIdQuery } from "../../features/posts/postsApi";

import styles from "./PostPage.module.css";

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading: postLoading, error: postError } = useGetPostByIdQuery(Number(id));
  const { data: comments, isLoading: commentsLoading, error: commentsError } = useGetCommentsByPostIdQuery(Number(id));

  if (postLoading || commentsLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (postError || commentsError) {
    return (
      <div className={styles.error}>Failed to load post or comments. Please try again later.</div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <h1 className={styles.title}>{post?.title}</h1>
        <p className={styles.body}>{post?.body}</p>
      </div>
      <div className={styles.commentsSection}>
        <h2 className={styles.commentsTitle}>Comments</h2>
        <ul className={styles.commentsList}>
          {comments?.map((comment) => (
            <li key={comment.id} className={styles.comment}>
              <h3 className={styles.commentName}>{comment.name}</h3>
              <p className={styles.commentEmail}>{comment.email}</p>
              <p className={styles.commentBody}>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
