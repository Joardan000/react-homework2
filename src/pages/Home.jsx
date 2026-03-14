import Sidebar from "../components/Sidebar.jsx"
import {Outlet} from "react-router-dom";

function Home() {
    return (
        <div className="flex max-w-full h-screen mx-auto justify-between">
            <Sidebar />
            <Outlet/>
        </div>
    )
}

export default Home