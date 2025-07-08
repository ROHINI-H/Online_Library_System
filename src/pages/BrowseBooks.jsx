import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookCard from "../Components/BookCard";

function BrowseBooks() {
    const { category } = useParams();
    const books = useSelector((state) => state.books.items);
    const [searchText, setSearchText] = useState('');

    const filtered = books.filter((book) => !category || book.category == category)
        .filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()) || book.author.toLowerCase().includes(searchText.toLowerCase()));


    return (
        <div className="p-7">
            <h2 className="text-xl font-bold">{category ? `${category} Books` : `All Books`}</h2>
            <input className="w-full border my-4 p-1.5" type="text" placeholder="Search by title or author" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                {filtered.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}

export default BrowseBooks;