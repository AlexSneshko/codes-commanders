import { PostCard } from "../postCard/PostCard";
import { useGetPostsQuery } from "../postsApi";

import styles from "./PostsList.module.css";

export const PostsList = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return <div className={styles.loading}>Loading posts...</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        Failed to load posts. Please try again later.
      </div>
    );
  }

  return (
    <div className={styles["posts-list"]}>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
