import Sidebar from "../components/Sidebar.jsx"
import MainDealer from "../components/MainDealer.jsx"

function Home() {
    return (
        <div className="flex max-w-full h-screen mx-auto justify-between">
            <Sidebar />
            <MainDealer />
        </div>
    )
}

export default Home