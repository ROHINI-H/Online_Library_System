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
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handles the error message inline
    function validate() {
        const error = {};
        if (!title.trim()) error.title = 'Title is required';
        if (!author.trim()) error.author = 'Author is required';
        if (rating && (rating < 1 || rating > 5)) error.rating = 'Rating must be 1 to 5';
        return error;
    }

    // Handles the data after submitting the form 
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate());

        //checks for error. If there is error, then stops the form submission
        if (Object.keys(validate().length > 0)) return;

        dispatch(addBook({ title, author, description, category, rating, popular }));
        navigate('/books');
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-12 p-7 bg-grey rounded shadow space-y-5">
            <h2 className="text-xl font-bold text-amber-900">Add a new Book</h2>
            <div>
                <input className="w-full border p-1.5" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
            </div>
            <div>
                <input className="w-full border p-1.5" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                {errors.author && <p className="text-red-600 text-sm">{errors.author}</p>}
            </div>

            <textarea className="w-full border p-1.5" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <select className="w-full border p-1.5" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Self-Help</option>
                <option>Finance</option>
                <option>Business</option>
                <option>Fiction</option>
            </select>
            <div>
                <input className="w-full border p-1.5" type="number" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} />
                {errors.rating && <p className="text-red-600 text-sm">{errors.rating}</p>}
            </div>
            <label className="flex items-center space-x-1.5">
                <input type="checkbox" checked={popular} onChange={(e) => setPopular(e.target.value)} />
                <span>Mark as Popular</span>
            </label>
            <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-800">Add Book</button>
        </form>
    )
}

export default AddBook;