import { SinglePost } from "./SinglePost";

import styles from "./../../styles/Post.module.css";
export type PostProps = {
  _id: string;
  name: string;
  avatar: string;
  description: string;
};

export interface PostsProps {
  data:
    | {
        status: number;
        data: PostProps[];
      }
    | undefined;
}

export const Post = ({ data }: PostsProps) => {
  return (
    <div className={styles.container}>
      {/* <h1>Posts</h1> */}
      {data?.data.map((post: PostProps, index: number) => {
        // if (index >= 2) return;
        return <SinglePost key={post._id} post={post} />;
      })}
    </div>
  );
};
