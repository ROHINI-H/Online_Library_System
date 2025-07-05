import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/bookSlice";

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Fiction');
    const [rating, setRating] = useState('');
    const [popular, setPopular] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author) return alert('Enter title or author to search books');
        dispatch(addBook({ title, author, description, category, rating, popular }));
        navigate('/books');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a new Book</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Self-Help</option>
                <option>Finance</option>
                <option>Business</option>
                <option>Fiction</option>
            </select>
            <input type="number" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} />
            <label>
                <input type="checkbox" checked={popular} onChange={(e) => setPopular(e.target.value)} />
                <span>Mark as Popular</span>
            </label>
            <button type="submit">Add Book</button>
        </form>
    )
}

export default AddBook;