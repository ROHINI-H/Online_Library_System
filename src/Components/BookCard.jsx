import { Link } from "react-router-dom";

function BookCard({ book }) {
    return (
        <div className="border p-3 rounded-2xl shadow-md hover:scale-105">
            <img src={book.coverImage} alt={book.title} className="w-1/2 h-60 object-cover mx-auto border" />
            <div className="text-center mb-5">
                <h3 className="mt-3 text-lg font-medium text-pink-600">{book.title}</h3>
                <p className="text-amber-700">{book.author}</p>
                <p className="m-2 text-justify pb-3 h-21 text-gray-600">{book.description}</p>
                <Link to={`/book/${book.id}`} className="text-emerald-600 hover:text-emerald-800 hover:underline">View Details</Link>
            </div>
        </div>
    )
}

export default BookCard;