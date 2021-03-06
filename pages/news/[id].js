import Head from "next/head";
import PostInfo from "../../components/PostInfo";

// export const getStaticPaths = async () => {
//   const response = await fetch(`http://${process.env.APIpath}/api/news/`);
//   const data = await response.json();

//   const paths = data.response.map(({ id }) => ({
//     params: { id: id.toString() }
//   }));

//   return {
//     paths,
//     fallback: false,
//   }
// };

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`http://${process.env.APIpath}/api/news/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: JSON.parse(JSON.stringify(data))},
  }
};

const NewsItem = ({ post }) => (
  <>
    <Head>
      <title>Новость #{post.id}</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default NewsItem;