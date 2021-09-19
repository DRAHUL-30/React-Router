import { useHistory, useLocation } from "react-router-dom";

function Home() {
    const history = useHistory();
    const location = useLocation();
    return(
        <>
        <p>Home page!</p>

        {/*history using props */}
        {/* <button onClick={props.history.goBack}>go Back</button>
        <button onClick={props.history.goForward}>go Forward</button>
        <button onClick={()=>props.history.push("/about")}>Push about</button>
        <button onClick={()=>props.history.replace("/about")}>Replace about</button> */}

        {/* history through hooks */}
        <button onClick={history.goBack}>Back</button>
        <button onClick={history.goForward}>Forward</button>
        <button onClick={() => history.push("/posts")}>Go to Post page-Push</button>
        <button onClick={() => history.replace("/posts")}>Go to Post page-Replace</button>
        
        {/* useLocation */}
        <p>{location.search}</p>
        </>
    )
}

export default Home;