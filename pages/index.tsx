import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
// import axios from "axios";
import { Post, PostsProps } from "../components/Post/Post";

import http from "./../lib/axiosCommon";
import { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "../components/Sidebar/Sidebar";

import styles from "./../styles/Home.module.css";

export default function Home({ data }: PostsProps) {
  /*   const [posts, setPosts] = useState();

  const fetchData = async () => {
    const response = await http.get("http://localhost:3000/api/mongodbData");
    const posts = await response.data;
    return posts;
  };

  useEffect(() => {
    fetchData().then((posts) => {
      setPosts(posts);
    });
  }, []); */

  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      {/* <Contact /> */}
      <div className={styles.main}>
        <Sidebar />
        <Post data={data} />
        <Sidebar />
      </div>
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
    // revalidate: 5,
  };
}
