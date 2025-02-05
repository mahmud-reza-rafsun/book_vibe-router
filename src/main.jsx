import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import ListedBook from './components/ListedBook/ListedBook.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import BookDetail from './components/BookDetail/BookDetail.jsx'
import { ToastContainer, toast } from 'react-toastify';

const notify = () => toast('Wow so easy !');

let router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'books/:bookId',
        element: <BookDetail/>,
        loader: () => fetch(`/booksData.json`)
      },
      {
        path: '/listed-book',
        element: <ListedBook/>,
        loader: () => fetch(`/booksData.json`)
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer />
  </StrictMode>,
)


export default router;