import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
    const books = useSelector((state) => state.books.items);
    const popular = books.filter((book) => book.popular);
    const categories = ['Self-Help', 'Finance', 'Business', 'Fiction'];

    return (
        <div>
            <h1 className="text-3xl font-bold">Welcome to the Online Library</h1>

            {/* Displaying the categories list */}
            <h2 className="text-xl py-4">Categories</h2>
            <div className="flex flex-col">
                {categories.map((cate) => (
                    <Link to={`books/${cate}`} key={cate}>{cate}</Link>
                ))}
            </div>

            {/* Displaying the popular books */}
            <h2 className="text-xl py-4">Popular Books</h2>
            <ul className="mx-7">
                {popular.map((book) => (
                    <li key={book.id} className="list-disc">
                        <Link to={`/book/${book.id}`}>{book.title}</Link> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;