import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
    const books = useSelector((state) => state.books.items);
    const popular = books.filter((book) => book.popular);
    const categories = ['Self-Help', 'Finance', 'Business', 'Fiction'];

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-cyan-600">Welcome to the Online Library</h1>

            {/* Displaying the categories list */}
            <h2 className="text-xl pt-4 pb-3 font-bold text-fuchsia-800">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cate) => (
                    <Link to={`books/${cate}`} key={cate} className="text-center bg-violet-100 p-5 rounded hover:bg-violet-200">{cate}</Link>
                ))}
            </div>

            {/* Displaying the popular books */}
            <h2 className="text-xl pt-7 pb-2 font-bold text-fuchsia-800">Popular Books</h2>
            <ul className="list-disc pl-7">
                {popular.map((book) => (
                    <li key={book.id}>
                        <Link to={`/book/${book.id}`} className="text-emerald-600 hover:text-emerald-800 hover:underline">{book.title}</Link> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;