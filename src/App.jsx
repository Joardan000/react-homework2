import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Delivery from "./pages/Delivery.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="delivery" element={<Delivery/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App