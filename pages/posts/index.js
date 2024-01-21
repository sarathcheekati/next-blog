import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";
import Head from "next/head";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all technologies" />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return { props: { posts: allPosts }, revalidate: 60 };
}

export default AllPostsPage;
