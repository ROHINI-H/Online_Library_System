import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/bookSlice";

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [category, setCategory] = useState('Fiction');
    const [rating, setRating] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [popular, setPopular] = useState(false);
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // setting the sample image if not uploaded by user
    const defaultImage = "https://images.unsplash.com/photo-1739994885725-0a772884d66c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FtcGxlJTIwYm9vayUyMGNvdmVyfGVufDB8fDB8fHwy";

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

        const errors = validate();
        setErrors(errors);

        //checks for error. If there is error, then stops the form submission
        if (Object.keys(errors).length > 0) return;

        const finalImage = coverImage.trim() != '' ? coverImage : defaultImage;

        dispatch(addBook({ title, author, coverImage: finalImage, description, category, rating, popular, publishedDate, }));
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
            <input type="text" className="w-full border p-1.5" placeholder="Image URL (optional)" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
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
            <div className="flex items-center gap-4">
                <label className="w-2/9">Published Date: </label>
                <input className="w-7/9 border p-1.5" type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
            </div>
            <label className="flex items-center space-x-1.5">
                <input type="checkbox" checked={popular} onChange={(e) => setPopular(e.target.checked)} />
                <span>Mark as Popular</span>
            </label>
            <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-800">Add Book</button>
        </form>
    )
}

export default AddBook;