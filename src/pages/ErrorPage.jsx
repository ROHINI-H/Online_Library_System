import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
    const err = useRouteError();

    return (
        <div>
            <h1>Oops!</h1>
            <h2>{err.status} {err.statusText}</h2>
            <h3>{err.data}</h3>
            <Link to="/">Go back to Home</Link>
        </div>
    )
}

export default ErrorPage;