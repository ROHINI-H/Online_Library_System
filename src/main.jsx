import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./pages/Home.jsx"
import BrowseBooks from './pages/BrowseBooks.jsx'
import BookDetails from "./pages/BookDetails.jsx"
import AddBook from "./pages/AddBook.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

// Creating the router configuration
const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/books",
          element: <BrowseBooks />
        },
        {
          path: "/books/:category",
          element: <BrowseBooks />
        },
        {
          path: "/book/:id",
          element: <BookDetails />
        },
        {
          path: "/addBook",
          element: <AddBook />
        }
      ],
      errorElement: <ErrorPage />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
