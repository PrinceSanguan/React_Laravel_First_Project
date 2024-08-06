import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />, // GuestLayout for guest routes
        children: [
            {
                path: "login", // Nested route for login
                element: <Login />,
            },
            {
                path: "signup", // Nested route for signup
                element: <Signup />,
            },
        ],
    },
    {
        path: "/", // This should be the default layout for authenticated routes
        element: <DefaultLayout />,
        children: [
            {
                path: "/users", // Redirect to /users
                element: <Navigate to="/users" />,
            },
            {
                path: "dashboard", // Route for dashboard
                element: <Dashboard />,
            },
            {
                path: "users", // Route for users
                element: <Users />,
            },
        ],
    },
    {
        path: "*", // Catch-all route for 404 Not Found
        element: <NotFound />,
    },
]);

export default router;
