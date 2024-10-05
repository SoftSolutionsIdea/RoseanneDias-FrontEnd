import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { AuthProvider } from '../context/AuthContext';
import { FormProvider } from '../context/ApiContext';


const NavigationRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <FormProvider>
                <AuthProvider>
                    <Router />
                </AuthProvider>
            </FormProvider>
        </BrowserRouter>
    );
};

export default NavigationRoutes;
