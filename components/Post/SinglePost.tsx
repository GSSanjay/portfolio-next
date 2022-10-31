// import Image from "next/image";
import { PostProps, PostsProps } from "./Post";
import { Image } from "./Image";

export const SinglePost = ({ post }: { post: PostProps }) => {
  console.log(post);
  return (
    <div className="container">
      <h4 className="title">{post.name}</h4>
      {/* <Image src={post.avatar} alt="alt" className="" width={50} height={50} /> */}
      <Image />
      <p className="">{post.name}</p>
    </div>
  );
};
