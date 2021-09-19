import { useParams, useRouteMatch } from "react-router";

function Post() {
    const match = useRouteMatch();
    const params = useParams();
    return(
        <>
        console.log(match.params.id)
        <p>post App!</p>
        </>
    )
}

export default Post;