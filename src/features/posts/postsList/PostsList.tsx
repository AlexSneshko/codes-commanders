import { PostCard } from '../postCard/PostCard';
import { useGetPostsQuery } from '../postsApi';

import styles from './PostsList.module.css'

export const PostsList = () => {
  const { data: posts, isLoading, error } =  useGetPostsQuery();

  console.log(posts)

  return (
    <div className={styles["posts-list"]}>
    {posts?.map(post => (
      <PostCard key={post.id} post={post}/>
    ))}
    </div>
  )
}
