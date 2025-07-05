import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className=" p-10 flex justify-between">
            <h1>📚BookShelf</h1>
            <div className="space-x-5">
                <Link to="/">Home</Link>
                <Link to="/books">Browse Books</Link>
                <Link to="/addBook">Add Book</Link>
            </div>
        </nav>
    )
}

export default Header;