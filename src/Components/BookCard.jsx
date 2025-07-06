import { Link } from "react-router-dom";

function BookCard({ book }) {
    return (
        <div className="border p-3 rounded shadow hover:shadow-md">
            <h3 className="text-lg font-medium text-pink-600">{book.title}</h3>
            <p className="text-gray-700 pb-3">by {book.author}</p>
            <Link to={`/book/${book.id}`} className="text-emerald-600 hover:text-emerald-800 hover:underline">View Details</Link>
        </div>
    )
}

export default BookCard;