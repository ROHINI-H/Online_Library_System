import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function BookDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = useSelector((state) => state.books.items.find((book) => book.id == id));

    if (!book) {
        return <p>Book not found</p>
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
            <p>{book.description}</p>
            <p>Category: {book.category}</p>
            <img src={book.coverImage} alt="" width="200px" />
            <p>Rating: {book.rating || 'N/A'}</p>
            <p>Published Date: {book.publishedDate}</p>
            <button onClick={() => navigate(-1)}>Back to Browse</button>
        </div>
    )
}

export default BookDetails;