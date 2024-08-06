import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
    // Retrieve the authentication token from context
    const { token } = useStateContext();

    // If a token is present, redirect to the home page
    if (token) {
        return <Navigate to="/" />;
    }

    // If no token is present, render the children components
    return (
        <div>
            {/* The Outlet component renders the matched child route */}
            <Outlet />
        </div>
    );
}
