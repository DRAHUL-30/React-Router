import { useHistory } from "react-router";

function About() {
    const history=useHistory();
    return(
        <>
        <p>About page!</p>
        <button onClick={history.back}>Back</button>
        <button onClick={history.forward}>Forward</button>
        </>
    )
}

export default About;