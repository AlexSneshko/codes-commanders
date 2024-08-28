import { Post } from '../../../types/post'

import styles from './PostCard.module.css'

interface PostCardProps {
    post: Post
}

export const PostCard = ({
    post
}: PostCardProps) => {
  return (
    <div className={styles["post-card"]}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}
