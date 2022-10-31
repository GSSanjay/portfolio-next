import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
// import axios from "axios";
import { Post, PostsProps } from "../components/Post/Post";

import http from "./../lib/axiosCommon";

export default function Home({ data }: PostsProps) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Contact />
      <Post data={data} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await http.get(
    "https://main--fascinating-bonbon-6a9cdc.netlify.app/api/mongodbData"
  );
  const data = await response.data;
  return {
    props: {
      data,
    },
  };
}
