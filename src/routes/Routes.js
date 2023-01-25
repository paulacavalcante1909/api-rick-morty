import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Character from "../pages/character/Character";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/character/:id",
        element: <Character/>,
    },
]);


export default router;