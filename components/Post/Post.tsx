import { SinglePost } from "./SinglePost";
export type PostProps = {
  _id: string;
  name: string;
  avatar: string;
};

export interface PostsProps {
  data: {
    status: number;
    data: PostProps[];
  };
}

export const Post = ({ data }: PostsProps) => {
  return (
    <div>
      <h1>Posts</h1>
      {data.data.map((post: PostProps) => {
        return <SinglePost key={post._id} post={post} />;
      })}
    </div>
  );
};
