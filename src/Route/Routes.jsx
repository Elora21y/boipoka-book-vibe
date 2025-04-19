import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import ListBook from "../pages/ListBook/ListBook";
import PageToRead from "../pages/PageToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('booksData.json'),
        Component: Home
      },
      {
        path: 'listed-books',
        loader: () => fetch('../booksData.json'),
        Component: ListBook
      },
      {
        path: 'pages-to-read',
        loader : () => fetch('../booksData.json'),
        Component : PageToRead,
      },
      {
        path: 'book-details/:bookId',
        loader: () => fetch('../booksData.json'),
        Component: BookDetails,
      }
    ]
  }
])