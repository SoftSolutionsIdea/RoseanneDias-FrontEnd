import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const PrivateRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
    const { isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(true);
    const [hasShownToast, setHasShownToast] = useState(false);

    useEffect(() => {

        const checkAuth = () => {
            setLoading(false);
            if (!isAuthenticated && !hasShownToast) {
                toast.error("Você não tem acesso a esta página.");
                setHasShownToast(true);
            }
        };

        checkAuth();
    }, [isAuthenticated, hasShownToast]);

    if (loading) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return element;
};

export default PrivateRoute;
