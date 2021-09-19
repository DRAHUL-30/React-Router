import { Link } from "react-router-dom";

const posts= [
  {
    id: 1,
    title: "sunt occaecati excepturi optio reprehenderit",
  },
  {
    id: 2,
    title: "qui est esse",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  },
];

function Posts({history}) {
    return(
        <>
        <p>Posts page!</p>
        <button onClick={history.back}>Back</button>
        <button onClick={history.forward}>Forward</button>
        <button onClick={() => history.push("/about")}>Go to Post page-Push</button>
        <button onClick={() => history.replace("/home")}>Go to Post page-Replace</button>
        {posts.map((post) => {
            return <p key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </p>;
        })}
        </>
    )
}

export default Posts;