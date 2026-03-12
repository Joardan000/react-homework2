import {Link} from "react-router-dom";

function NotFound() {
    return (
        <>
            <p className="text-8xl font-extrabold text-center mx-auto items-center mt-[200px] max-w-7xl leading-[120px]">
                Bratan manzilda adashdizoov🙃
            </p>

            <Link className="text-5xl text-red-500 font-black flex justify-center mt-[100px]" to="/">Mana eshik🚪</Link>
        </>
    )
}

export default NotFound;