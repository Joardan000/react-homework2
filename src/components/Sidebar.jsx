import logo from '../assets/logo.svg'
import settings from '../assets/settings.svg'
import exit from '../assets/exit.svg'
import side1 from '../assets/side1.svg'
import side2 from '../assets/side2.svg'
import side3 from '../assets/side3.svg'
import side4 from '../assets/side4.svg'
import side5 from '../assets/side5.svg'
import side6 from '../assets/side6.svg'
import side7 from '../assets/side7.svg'
import side1Active from '../assets/side1Active.svg'
import side3Active from '../assets/side3Active.svg'
import {Link, NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <>
            <section className="sidebar relative">
                <div className="p-4 max-w-[256px] w-full flex flex-col justify-between h-full">
                    <div>
                        <div className="pl-3 flex gap-3 items-center mb-10">
                            <img src={logo} alt="logo-icon"/>
                            <p className="font-bold text-[18px] leading-[23px] -tracking-[0.27px]">DMS Portal</p>
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <NavLink
                                to="/"
                                end
                                className={({isActive}) =>
                                    `rounded-lg cursor-pointer flex px-3 py-[10px] items-center gap-3 ${
                                        isActive ? "bg-[#135BEC1A]" : "hover:bg-[#E5E7EB] bg-white"
                                    }`
                                }
                            >
                                {({isActive}) => (
                                    <>
                                        <img src={isActive ? side1Active : side1} alt="side-icon1"/>
                                        <p className={`font-medium text-[14px] leading-[21px] ${isActive ? "text-[#135BEC]" : "text-[#475569]"}`}>
                                            Dashboard
                                        </p>
                                    </>
                                )}
                            </NavLink>
                            <div
                                className="rounded-lg hover:bg-[#E5E7EB] cursor-not-allowed bg-white flex px-3 py-[10px] items-center gap-3">
                                <img src={side2} alt="side-icon1"/>
                                <p className="font-medium text-[14px] leading-[21px] text-[#475569]">Dillerlar</p>
                            </div>
                            <NavLink
                                to="delivery"
                                className={({isActive}) =>
                                    `rounded-lg cursor-pointer flex px-3 py-[10px] items-center gap-3 ${
                                        isActive ? "bg-[#135BEC1A]" : "hover:bg-[#E5E7EB] bg-white"
                                    }`
                                }
                            >
                                {({isActive}) => (
                                    <>
                                        <img src={isActive ? side3Active : side3} alt="side-icon1"/>
                                        <p className={`font-medium text-[14px] leading-[21px] ${isActive ? "text-[#135BEC]" : "text-[#475569]"}`}>
                                            Ombor va inventarizatsiya
                                        </p>
                                    </>
                                )}
                            </NavLink>
                            <div
                                className="rounded-lg bg-white flex px-3 py-[10px] hover:bg-[#E5E7EB] cursor-not-allowed items-center gap-3">
                                <img src={side4} alt="side-icon1"/>
                                <p className="font-medium text-[14px] leading-[21px] text-[#475569]">Do'konlar</p>
                            </div>
                            <div
                                className="rounded-lg bg-white flex px-3 py-[10px] hover:bg-[#E5E7EB] cursor-not-allowed items-center gap-3">
                                <img src={side5} alt="side-icon1"/>
                                <p className="font-medium text-[14px] leading-[21px] text-[#475569]">Savdo va
                                    to'lovlar</p>
                            </div>
                            <div
                                className="rounded-lg bg-white flex px-3 py-[10px] hover:bg-[#E5E7EB] cursor-not-allowed items-center gap-3">
                                <img src={side6} alt="side-icon1"/>
                                <p className="font-medium text-[14px] leading-[21px] text-[#475569]">Hisobotlar</p>
                            </div>
                            <div
                                className="rounded-lg bg-white flex px-3 py-[10px] hover:bg-[#E5E7EB] cursor-not-allowed items-center gap-3">
                                <img src={side7} alt="side-icon1"/>
                                <p className="font-medium text-[14px] leading-[21px] text-[#475569]">Admin</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-2">
                        <div
                            className="rounded-lg bg-white flex px-3 py-[10px] hover:bg-[#E5E7EB] cursor-not-allowed items-center gap-3">
                            <img src={settings} alt="side-icon1"/>
                            <p className="font-medium text-[14px] leading-[21px] text-[#475569]">Sozlamalar</p>
                        </div>
                        <div
                            className="rounded-lg bg-white flex px-3 py-[10px] hover:bg-[#E5E7EB] cursor-not-allowed items-center gap-3">
                            <img src={exit} alt="side-icon1"/>
                            <p className="font-medium text-[14px] leading-[21px] text-[#475569]">Chiqish</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sidebar;