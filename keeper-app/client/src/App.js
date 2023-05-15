import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from "./scenes/Home";
import Register from "./scenes/Register";
import Login from "./scenes/Login";
import ShowNote from "./scenes/ShowNote";
import WriteNote from "./scenes/WriteNote";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"

const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/write-note/:id",
        element: <WriteNote/>
      },
      {
        path: "/write-note/",
        element: <WriteNote/>
      },
      {
        path: "/note/:id",
        element: <ShowNote/>,
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/write-note",
    element: <WriteNote/>,
  },
  {
    path: "/note",
    element: <ShowNote/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
