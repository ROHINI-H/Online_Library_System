import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function BookDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = useSelector((state) => state.books.items.find((book) => book.id == id));

    if (!book) {
        return <p className="p-7">Book not found</p>
    }

    return (
        <div className="p-7">
            <h2 className="text-2xl font-bold text-teal-600">{book.title}</h2>
            <p className="text-lg mb-2">by {book.author}</p>
            <img className="mb-2" src={book.coverImage} alt="" width="200px" />
            <p className="mb-2">{book.description}</p>
            <p className="mb-2">Category: {book.category}</p>
            <p className="mb-2">Rating: {book.rating || 'N/A'}</p>
            <p className="mb-2">Published Date: {book.publishedDate}</p>
            <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline">← Back to Browse</button>
        </div>
    )
}

export default BookDetails;