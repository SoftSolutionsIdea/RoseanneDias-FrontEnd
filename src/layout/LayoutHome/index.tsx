import { TemplateHome } from "./styles"

import Sidebar from "../../components/SideBar"
import { Outlet } from "react-router-dom"

const LayoutApp = () => {
    return (
        <TemplateHome>
            <Sidebar />
            <Outlet />
        </TemplateHome>
    )
}

export default LayoutApp
