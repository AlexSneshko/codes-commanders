import { PostsList } from "../../features/posts/postsList/PostsList";

import styles from "./HomePage.module.css"

export const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <PostsList />
    </div>
  );
};
