import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ Component }) => {
    const isAuthenticated = true; // Replace with your authentication logic
    return isAuthenticated ? Component : <Navigate to="/" />;
}

