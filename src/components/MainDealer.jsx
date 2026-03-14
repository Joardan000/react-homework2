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
    const [status, setStatus] = useState("Status")
    const [address, setAddress] = useState("Manzil")
    const [searchText, setSearchText] = useState("")
    const [data, setData] = useState(dealers)
    const [dealerContact, setDealerContact] = useState("")
    const [dealerName, setDealerName] = useState("")
    const [dealerId, setDealerId] = useState(null)
    const [dealerStatus, setDealerStatus] = useState(null)
    const [checkedIds, setCheckedIds] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const filteredData = data.filter(item => {
        const searchFind = item.name.toLowerCase().includes(searchText.toLowerCase()) || item.contact.toLowerCase().includes(searchText.toLowerCase());
        const statusFind = status === "Status" || item.active === (status === "Faol");
        const addressFind = address === "Manzil" || item.address === address;
        return searchFind && statusFind && addressFind;
    });

    function searchFilter(e) {
        setSearchText(e.target.value)
    }

    function filterStatus(e) {
        setStatus(e.target.value)
    }

    function filterAddress(e) {
        setAddress(e.target.value)
    }

    function deleteDealer(id) {
        const dealer = data.filter(item => item.id !== id)
        setData(dealer)
    }

    function editStatus(e) {
        if (e.target.value === "Status") return
        setDealerStatus(e.target.value === "Faol")
    }

    function findDealer(id) {
        const dealer = data.find(item => item.id === id)
        setDealerContact(dealer.contact)
        setDealerName(dealer.name)
        setDealerStatus(dealer.active)
        setDealerId(id)
        setIsOpen(true)
    }

    function editDealer() {
        const dealer = data.map(item =>
            item.id === dealerId ? {
                ...item, name: dealerName, contact: dealerContact, active: dealerStatus ?? item.active
            } : item
        )
        setData(dealer)
    }

    function submitDealer(e) {
        e.preventDefault()
        editDealer()
        setDealerContact("")
        setDealerName("")
        setDealerStatus(null)
        setDealerId(null)
        setIsOpen(false)
    }

    return (
        <>
            <section className="main bg-gray-100 max-w-full w-full overflow-hidden border-l h-screen border-[#E5E7EB]">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6 from-top">
                        <p className="font-extrabold text-[30px] leading-[37.5px] -tracking-[0.75px] text-[#111827]">Diller
                            ro'yxati</p>
                        <div
                            className="flex items-center hover:bg-blue-700 cursor-not-allowed gap-2 py-[6px] justify-center max-w-[197.14px] w-full rounded-lg bg-[#135BEC]">
                            <img src={plus} alt="plus-icon"/>
                            <p className="font-bold text-[14px] leading-5 tracking-[0.21px] text-white">
                                Yangi diller qo'shish
                            </p>
                        </div>
                    </div>
                    <div className="bg-white px-6 max-w-full flex rounded-lg from-top border mb-4 border-[#E5E7EB]">
                        <label className="cursor-pointer py-[10px]" htmlFor="input">
                            <img src={search} alt="search-icon"/>
                        </label>
                        <input onChange={searchFilter} className="w-full py-[10px] border-l pl-[9px]"
                               placeholder="Diler nomi yoki mas'ul shaxs bo'yicha qidirish..." id="input" type="text"/>
                    </div>
                    <div className="flex items-center gap-3 mb-4 from-top">
                        <select
                            onChange={filterStatus}
                            className="cursor-pointer font-medium leading-[21px] text-[#1F2937] pr-5 rounded-lg border border-[#E5E7EB] py-2">
                            <option value="Status">Status</option>
                            <option value="Faol">Faol</option>
                            <option value="Faol emas">Faol emas</option>
                        </select>
                        <select
                            onChange={filterAddress}
                            className="cursor-pointer font-medium leading-[21px] text-[#1F2937] pr-5 rounded-lg border border-[#E5E7EB] py-2">
                            <option value="Manzil">Manzil</option>
                            <option value="Toshkent">Toshkent</option>
                            <option value="Samarqand">Samarqand</option>
                            <option value="Buxoro">Buxoro</option>
                            <option value="Farg'ona">Farg'ona</option>
                            <option value="Namangan">Namangan</option>
                        </select>

                        {
                            isOpen ? (
                                <form className="flex items-center gap-3" onSubmit={submitDealer}>
                                    <input
                                        className="cursor-pointer font-medium leading-[21px] text-[#1F2937] px-5 rounded-lg border border-[#E5E7EB] py-2"
                                        value={dealerName} onChange={(e) => setDealerName(e.target.value)}
                                        placeholder="Diller nomi..." type="text"/>
                                    <input
                                        className="cursor-pointer font-medium leading-[21px] text-[#1F2937] px-5 rounded-lg border border-[#E5E7EB] py-2"
                                        value={dealerContact} onChange={(e) => setDealerContact(e.target.value)}
                                        placeholder="Mas'ul shaxs..." type="text"/>
                                    <select
                                        value={dealerStatus === null ? "Status" : dealerStatus ? "Faol" : "Faol emas"}
                                        onChange={editStatus}
                                        className="cursor-pointer font-medium leading-[21px] text-[#1F2937] pr-5 rounded-lg border border-[#E5E7EB] py-2">
                                        <option value="Status">Statusni o'zgartirish</option>
                                        <option value="Faol">Faol</option>
                                        <option value="Faol emas">Faol emas</option>
                                    </select>
                                    <button type="submit"
                                            className="cursor-pointer font-medium leading-[21px] text-[#1F2937] bg-white px-5 rounded-lg border border-[#E5E7EB] py-2">submit
                                    </button>
                                </form>
                            ) : (null)
                        }

                    </div>
                    <div className="h-[738px] rounded-[12px] overflow-y-auto overflow-x-hidden">
                        <table
                            className="dealers table-fixed rounded-[12px] border border-[#E5E7EB] w-full overflow-hidden bg-white">
                            <thead className="uppercase font-bold text-[12px] leading-4 text-[#374151] bg-[#F9FAFB]">
                            <tr>
                                <th className="pl-4 text-center py-4 w-1/6">
                                    <div className="flex items-center gap-10">
                                        <input
                                            className="cursor-pointer w-4 h-4"
                                            type="checkbox"
                                            checked={checkedIds.length === filteredData.length && filteredData.length > 0}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setCheckedIds(filteredData.map(item => item.id))
                                                } else {
                                                    setCheckedIds([])
                                                }
                                            }}
                                        />
                                        <p>Diller nomi</p>
                                    </div>
                                </th>
                                <th className=" mx-auto justify-center text-center py-4 w-1/6">Mas'ul shaxs</th>
                                <th className=" mx-auto justify-center text-center py-4 w-1/6">Manzil</th>
                                <th className=" mx-auto justify-center text-center py-4 w-1/6">Status</th>
                                <th className=" mx-auto justify-center text-center py-4 w-1/6">Harakatlar</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                filteredData.length === 0 ? (
                                    <div><p className="text-red-500 font-bold text-xl">hech nima juq</p></div>
                                ):(

                                        filteredData.map(({id, name, contact, phone, address, active}) => (
                                            <tr key={id} className="p-4 border-b border-[#E5E7EB]">
                                                <td className="p-4">
                                                    <div className="flex items-center gap-10">
                                                        <input className="cursor-pointer w-4 h-4"
                                                               type="checkbox"
                                                               checked={checkedIds.includes(id)}
                                                               onChange={(e) => {
                                                                   if (e.target.checked) {
                                                                       setCheckedIds([...checkedIds, id])
                                                                   } else {
                                                                       setCheckedIds(checkedIds.filter(i => i !== id))
                                                                   }
                                                               }}
                                                        />
                                                        <div className="max-w-full">
                                                            <p className="font-medium text-[14px] leading-5 text-[#111827]">{name}</p>
                                                            <p className="font-medium text-[12px] text-[#6B7280] leading-4">ID: {id}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="max-w-full text-center  text-[#6B7280]">
                                                    <p className="font-normal text-[14px] leading-5">{contact}</p>
                                                    <p className="font-normal text-[14px] leading-4">{phone}</p>
                                                </td>

                                                <td><p
                                                    className="text-center">{address === "Toshkent" ? `${address} sh.` : `${address} v.`}</p>
                                                </td>

                                                <td>
                                                    <img className="mx-auto" src={active ? Active : unActive}
                                                         alt="status-icon"/>
                                                </td>

                                                <td>
                                                    <div className="flex justify-center items-center gap-2">
                                                        <img src={see} alt="see-icon"/>
                                                        <img className="cursor-pointer" onClick={() => findDealer(id)} src={pen} alt="pen-icon"/>
                                                        <img className="cursor-pointer" onClick={() => deleteDealer(id)} src={remove} alt="remove-icon"/>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))

                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainDealer;