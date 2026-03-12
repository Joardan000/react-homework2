import Sidebar from "../components/Sidebar.jsx"
import MainDealer from "../components/MainDealer.jsx"

function Home() {
    return (
        <div className="flex mt-[50px] max-w-[1440px] h-[900px] mx-auto justify-between">
            <Sidebar />
            <MainDealer />
        </div>
    )
}

export default Home