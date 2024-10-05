import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Employees from '../pages/Employees';
import Client from '../pages/Client';
import Stock from '../pages/Stock';
import Rent from '../pages/Rent';
import Beginning from '../pages/Beginning';

import LayoutApp from '../layout/LayoutHome';
import PrivateRoute from './privateRoute';



const Router: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/comeco" element={<PrivateRoute element={<Beginning />} />} />

            <Route element={<PrivateRoute element={<LayoutApp />} />} >
                <Route path="/funcionarios" element={<PrivateRoute element={<Employees />} />} />
                <Route path="/cliente" element={<PrivateRoute element={<Client />} />} />
                <Route path="/estoque" element={<PrivateRoute element={<Stock />} />} />
                <Route path="/aluguel" element={<PrivateRoute element={<Rent />} />} />

            </Route>
        </Routes>
    );
};

export default Router;
