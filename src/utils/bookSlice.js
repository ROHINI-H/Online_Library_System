import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const bookSlice = createSlice({
    name: "books",
    initialState: {
        items: [
            {
                id: nanoid(),
                title: "Rich Dad, Poor Dad",
                author: "Robert T. Kiyosaki",
                publishedDate: "April 8, 1997",
                pages: 195,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470282721i/29502358.jpg",
                description: "A tale of two fathers and the lessons they taught about money, work, and financial freedom.",
                category: 'Finance',
                rating: 5,
                popular: true,
            },
            {
                id: nanoid(),
                title: "Think and Grow Rich",
                author: "Napoleon Hill",
                publishedDate: "January 1, 1937",
                pages: 233,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg",
                description: "Think and Grow Rich is a guide to success by Napoleon Hill, which was first published in 1937 following the Great Depression.",
                category: 'Finance',
                rating: 4.5,
                popular: true,
            },
            {
                id: nanoid(),
                title: "How to Win Friends & Influence People",
                author: "Dale Carnegie",
                publishedDate: "October 1, 1936",
                pages: 288,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442726934i/4865.jpg",
                description: "Timeless advice on how to connect with others, gain trust, and influence behavior positively.",
                category: 'Self-Help',
                rating: 3,
                popular: false,
            },
            {
                id: nanoid(),
                title: "The Lean Startup",
                author: "Eric Ries",
                publishedDate: "January 1, 2011",
                pages: 299,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019.jpg",
                description: "Most startups fail. Build startups efficiently by testing, learning, and innovating with minimal resources.",
                category: 'Business',
                rating: 4,
                popular: false,
            },
            {
                id: nanoid(),
                title: "The Alchemist",
                author: "Paulo Coelho",
                publishedDate: "January 1, 1988",
                pages: 182,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
                description: "A shepherd’s mystical journey to follow his dream and discover his true personal legend.",
                category: 'Fiction',
                rating: 4,
                popular: true,
            },
            {
                id: nanoid(),
                title: "Zero to One: How to Build the Future",
                author: "Peter Thiel",
                publishedDate: "September 16, 2014",
                pages: 195,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630663027i/18050143.jpg",
                description: "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create.",
                category: 'Business',
                rating: 4,
                popular: false,
            },
            {
                id: nanoid(),
                title: "The 4-Hour Workweek",
                author: "Timothy Ferriss",
                publishedDate: "June 25, 2007",
                pages: 308,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442957271i/368593.jpg",
                description: "Escape the 9–5, automate income, and live a life of freedom and purpose on your own terms.",
                category: 'Self-Help',
                rating: 4,
                popular: false,
            },
            {
                id: nanoid(),
                title: "Atomic Habits",
                author: "James Clear",
                publishedDate: "October 18, 2018",
                pages: 319,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
                description: "Improve daily habits with small changes that compound into significant personal success.",
                category: 'Self-Help',
                rating: 5,
                popular: true,
            },
            {
                id: nanoid(),
                title: "The Psychology of Money",
                author: "Morgan Housel",
                publishedDate: "January 1, 2020",
                pages: 242,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg",
                description: "Money behavior matters more than knowledge—this book reveals how emotions drive decisions.",
                category: 'Finance',
                rating: 5,
                popular: true,
            },
            {
                id: nanoid(),
                title: "The Richest Man in Babylon",
                author: "George S. Clason",
                publishedDate: "January 1, 1926",
                pages: 160,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1543897827i/43097201.jpg",
                description: "Financial wisdom from ancient Babylon teaches saving, investing, and growing your wealth.",
                category: 'Business',
                rating: 4,
                popular: false,
            },
            {
                id: nanoid(),
                title: 'Dune',
                author: 'Frank Herbert',
                publishedDate: "June 1, 1965",
                pages: 658,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
                description: 'On Arrakis, Paul Atreides leads a rebellion to control the life-extending, mind-enhancing spice melange.',
                category: 'Fiction',
                rating: 5,
                popular: true,
            },
            {
                id: nanoid(),
                title: '1984',
                author: 'George Orwell',
                publishedDate: "June 8, 1949",
                pages: 368,
                coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
                description: 'A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching.',
                category: 'Fiction',
                rating: 4,
                popular: false,
            },
        ],
    },
    reducers: {
        addBook: (state, action) => {
            state.items.push({ id: nanoid(), ...action.payload });
        },
    },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;