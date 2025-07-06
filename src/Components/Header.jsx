import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="bg-yellow-900 text-white p-7 flex justify-between">
            <h1 className="font-bold">📚BookShelf</h1>
            <div className="space-x-5">
                <Link to="/" className="hover:text-red-100 hover:underline">Home</Link>
                <Link to="/books" className="hover:text-red-100 hover:underline">Browse Books</Link>
                <Link to="/addBook" className="hover:text-red-100 hover:underline">Add Book</Link>
            </div>
        </nav>
    )
}

export default Header;