import { PostProps } from "./Post";
import styles from "./../../styles/SinglePost.module.css";

export const SinglePost = ({ post }: { post: PostProps }) => {
  console.log(post);
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{post.name}</h4>
      <p className={styles.description}>{post.description}</p>
    </div>
  );
};
