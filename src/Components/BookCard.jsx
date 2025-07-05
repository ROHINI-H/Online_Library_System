import { Link } from "react-router-dom";

function BookCard({ book }) {
    return (
        <div>
            <img src={book.coverImage} alt="book cover" width="200px" />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <Link to={`book/${book.id}`}>View Details</Link>
        </div>
    )
}

export default BookCard;