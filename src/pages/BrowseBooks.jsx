import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookCard from "../Components/BookCard";

function BrowseBooks() {
    const { category } = useParams();
    const books = useSelector((state) => state.books.items);
    const [searchText, setSearchText] = useState('');

    const filtered = books.filter((book) => !category || book.category == category)
        .filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()) || book.author.toLowerCase());


    return (
        <div>
            <h2>{category ? `${category} Books` : `All Books`}</h2>
            <input className="border m-4 p-1.5" type="text" placeholder="Search by title or author" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <div>
                {filtered.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}

export default BrowseBooks;