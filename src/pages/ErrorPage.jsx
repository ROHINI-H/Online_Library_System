import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
    const err = useRouteError();

    return (
        <div className="text-center p-12">
            <h1 className="text-3xl font-bold text-red-950 mb-1">Oops!</h1>
            <h2 className="text-2xl font-bold text-red-500">{err.status} {err.statusText}</h2>
            <Link to="/" className="text-blue-500 hover:underline block mt-5">Go back to Home</Link>
        </div>
    )
}

export default ErrorPage;