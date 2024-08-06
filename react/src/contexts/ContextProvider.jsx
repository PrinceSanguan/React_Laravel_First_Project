import { createContext, useContext, useState } from "react";

// Create a context with default values
const StateContext = createContext({
    user: null, // Changed from currentUser to user to match the state
    token: null,
    setUser: () => {}, // Placeholder function
    setToken: () => {}, // Placeholder function
});

export const ContextProvider = ({ children }) => {
    // State to hold user information
    const [user, setUser] = useState({}); // Initialize with null

    // State to hold authentication token
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    // Function to update token and handle localStorage
    const setToken = (newToken) => {
        _setToken(newToken); // Update the state
        if (newToken) {
            localStorage.setItem("ACCESS_TOKEN", newToken); // Save to localStorage
        } else {
            localStorage.removeItem("ACCESS_TOKEN"); // Remove from localStorage
        }
    };

    return (
        <StateContext.Provider
            value={{
                user, // Provide user state
                token, // Provide token state
                setUser, // Provide function to update user
                setToken, // Provide function to update token
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

// Custom hook to use the state context
export const useStateContext = () => useContext(StateContext);
