import plus from '../assets/plus.svg'
import see from '../assets/see.svg'
import pen from '../assets/pen.svg'
import remove from '../assets/remove.svg'
import Active from '../assets/active.svg'
import unActive from '../assets/unactive.svg'
import search from '../assets/search.svg'

import {dealers} from "../data/data.js";
import {useState} from "react";

function MainDealer() {
    const [data, setData] = useState(dealers);

    function searchFilter(e){
        const res = dealers.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setData(res)
    }
    function filterAddress(e) {
        if (e.target.value === "Manzil") {
            setData(dealers)
        } else {
            const res = dealers.filter(item => item.address.includes(e.target.value));
            setData(res);
        }
    }
    function filterStatus(e) {
        if (e.target.value === "Status") {
            setData(dealers);
        } else {
            const isActive = e.target.value === "Faol";
            const res = dealers.filter(item => item.active === isActive);
            setData(res);
        }
    }
    return (
        <>
            <section className="main bg-gray-100 max-w-[1184px] w-full overflow-x-hidden">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6 from-top">
                        <p className="font-extrabold text-[30px] leading-[37.5px] -tracking-[0.75px] text-[#111827]">Diller
                            ro'yxati</p>
                        <div
                            className="flex items-center hover:bg-blue-700 cursor-not-allowed gap-2 py-[6px] justify-center max-w-[197.14px] w-full rounded-lg bg-[#135BEC]">
                            <img src={plus} alt="plus-icon"/>
                            <p className="font-bold text-[14px] leading-5 tracking-[0.21px] text-white">Yangi diller
                                qo'shish</p>
                        </div>
                    </div>
                    <div className="bg-white px-6 max-w-full flex rounded-lg from-top border mb-4 border-[#E5E7EB]">
                        <label className="py-[10px]" for="input">
                            <img src={search} alt="search-icon"/>
                        </label>
                        <input onChange={searchFilter} className="w-full py-[10px] border-l pl-[9px]"
                               placeholder="Diler nomi yoki mas'ul shaxs bo'yicha qidirish..." id="input" type="text"/>
                    </div>
                    <div className="flex items-center gap-3 mb-4 from-top">
                        <select
                            onChange={filterStatus}
                            className="font-medium leading-[21px] text-[#1F2937] pr-5 rounded-lg border border-[#E5E7EB] py-2">
                            <option value="Status">Status</option>
                            <option value="Faol">Faol</option>
                            <option value="Faol emas">Faol emas</option>
                        </select>
                        <select
                            onChange={filterAddress}
                            className="font-medium leading-[21px] text-[#1F2937] pr-5 rounded-lg border border-[#E5E7EB] py-2">
                            <option value="Manzil">Manzil</option>
                            <option value="Toshkent">Toshkent</option>
                            <option value="Samarqand">Samarqand</option>
                            <option value="Buxoro">Buxoro</option>
                            <option value="Farg'ona">Farg'ona</option>
                            <option value="Namangan">Namangan</option>
                        </select>
                    </div>
                    <div className="dealers rounded-[12px] border border-[#E5E7EB] overflow-hidden bg-white">
                        <div
                            className="p-4 uppercase font-bold text-[12px] leading-4 text-[#374151] bg-[#F9FAFB] flex items-center">
                            <input className="w-4 h-4 mr-10" type="checkbox"/>
                            <p className="mr-[166.82px]">Diller nomi</p>
                            <p className="mr-[148.37px]">Mas'ul shaxs</p>
                            <p className="mr-[153.74px]">Manzil</p>
                            <p className="mr-[137.21px]">Status</p>
                            <p>Harakatlar</p>
                        </div>
                        <div>
                            {
                                data.map(({id, name, contact, phone, address, active}) => (
                                    <div key={id} className="p-4 flex items-center ">
                                        <input className="w-4 h-4 mr-10" type="checkbox"/>
                                        <div className="max-w-[185.89px] w-full mr-12">
                                            <p className="font-medium text-[14px] leading-5 text-[#111827]">{name}</p>
                                            <p className="font-medium text-[12px] text-[#6B7280] leading-4">ID: {id}</p>
                                        </div>
                                        <div className="max-w-[186.75px] w-full mr-12 text-[#6B7280]">
                                            <p className="font-normal text-[14px] leading-5">{contact}</p>
                                            <p className="font-normal text-[14px] leading-4">{phone}</p>
                                        </div>

                                        {address === "Toshkent" ? (
                                            <p className="max-w-[86.42px] w-full mr-[112.32px] font-normal text-[14px] leading-5 text-[#6B7280]">{address} sh.</p>
                                        ) : (
                                            <p className="max-w-[86.42px] w-full mr-[112.32px] font-normal text-[14px] leading-5 text-[#6B7280]">{address} v.</p>
                                        )
                                        }

                                        {active ? (
                                            <img className="mr-[140.42px]" src={Active} alt="active-icon"/>
                                        ) : (
                                            <img className="mr-[107.61px]" src={unActive} alt="un-active-icon"/>
                                        )}

                                        <div className="flex items-center gap-2">
                                            <img src={see} alt="see-icon"/>
                                            <img src={pen} alt="pen-icon"/>
                                            <img src={remove} alt="remove-icon"/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainDealer;