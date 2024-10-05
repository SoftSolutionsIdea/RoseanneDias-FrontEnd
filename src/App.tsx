import NavigationRoutes from "./routes/index"
import { GlobalStyles } from "./styles/GlobalStyles"
import { SidebarProvider } from "./context/sidebarContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PopupProvider } from './context/PopUpContext';


export default function App() {
  return (
    <>
      <SidebarProvider>
        <PopupProvider>
          <NavigationRoutes />
          <ToastContainer />
          <GlobalStyles />
        </PopupProvider>
      </SidebarProvider>
    </>
  )
}
