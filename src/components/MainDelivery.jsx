import {useState} from "react";

import Calendar from "../assets/calendar.svg"
import Plus from "../assets/plus.svg"
import Up from "../assets/up.svg"
import Down from "../assets/down.svg"
import searchDelivery from "../assets/search-delivery.svg"
import Filter from "../assets/filter.svg"
import Set from "../assets/set.svg"

import {options, stats, statusConfig} from "../data/data.js";
import {deliveries} from "../data/data.js";
import TablePagination from "@mui/material/TablePagination";

function MainDelivery() {
    const [deliveryOption, setDeliveryOption] = useState("Filter")

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [deliveryData, setDeliveryData] = useState(deliveries);

    const mapOptions = options.delivery.map(delivery => (
        <option value={delivery}>{delivery}</option>
    ))

    function deliveryFilter(e) {
        setDeliveryOption(e.target.value)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    function searchFilter(e) {
        if (deliveryOption === "Filter") {
            setDeliveryData(deliveries)
            return
        }
        if (deliveryOption === "ID") {
            const res = deliveries.filter(d => d.id.toLowerCase().includes(e.target.value.toLowerCase()))
            setDeliveryData(res)
        }
        if (deliveryOption === "Dealer") {
            const res = deliveries.filter(d => d.jonatuvchi.toLowerCase().includes(e.target.value.toLowerCase()))
            setDeliveryData(res)
        }
        if (deliveryOption === "Do'kon") {
            const res = deliveries.filter(d => d.qabulQiluvchi.toLowerCase().includes(e.target.value.toLowerCase()))
            setDeliveryData(res)
        }
        setPage(0)
    }

    const mapStats = stats
        .map(({id, label, value, trend, trendUp, trendLabel, icon}) => (
            <div
                className="mains w-full h-[162px] object-cover border border-[#E5E7EB] rounded-[12px] bg-white p-5"
                key={id}>
                <div className="flex items-center pb-[18px] justify-between">
                    <img src={icon} alt={'icon-' + id}/>
                    <div className="text-end">
                        <p className="font-medium text-[14px] leading-5 text-[#6B7280] mb-[1px]">
                            {label}
                        </p>
                        <p className="font-bold text-2xl text-[#111827]">{value}</p>
                    </div>
                </div>
                <div className="flex gap-[7.6px] items-center">
                    <div className="flex items-center gap-1">
                        <img src={trendUp ? Up : Down} alt={trendUp ? "up-icon" : "down-icon"}/>
                        <p className={trendUp ? "text-[#16A34A] font-medium text-[14px] leading-5" : "text-[#DC2626] font-medium text-[14px] leading-5"}>{trendUp ? `+${trend}%` : `-${trend}%`}</p>
                    </div>
                    <p className="text-[14px] leading-5 text-[#6B7280]">{trendLabel}</p>
                </div>
            </div>
        ))

    const mock = deliveryData
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((d) => (
            <tr
                key={d.id}
                className="border-b border-[#E5E7EB]">
                <td className="pt-[18.5px] pb-[19.5px] pl-6 font-medium text-[14px] leading-5 text-[#374151]">{d.id}</td>
                <td className="pt-[18.5px] pb-[19.5px] text-[14px] leading-5 text-[#374151]">{d.date}</td>
                <td className="pt-[18.5px] pb-[19.5px] text-[#111827] font-medium text-[14px] leaidng-5">{d.jonatuvchi}</td>
                <td className="pt-[18.5px] pb-[19.5px] text-[14px] leading-5 text-[#374151]">{d.qabulQiluvchi}</td>
                <td className="pt-[18.5px] pb-[19.5px] text-[14px] leading-5 text-[#374151]">{d.products.join(", ")}</td>
                <td className="pt-[18.5px] pb-[19.5px] text-center font-semibold text-[14px] leading-5 text-[#111827]">{d.quantity}</td>
                <td className="pt-[18.5px] pb-[19.5px]">
                    <div className="flex justify-center">
                        <div className={statusConfig[d.status]}>
                            {d.status}
                        </div>
                    </div>
                </td>
            </tr>
        ))

    return (
        <>
            <section
                className="main bg-[#F6F6F8] max-w-full w-full overflow-x-hidden overflow-y-auto border-l h-screen border-[#E5E7EB]">
                <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <p className="font-bold text-3xl leading-[37.5px] -tracking-[0.45px] text-[#111827] mb-1">Yetkazib
                                berish</p>
                            <p className="text-base text-[#6B7280]">Barcha mahsulot yetkazib berishlarini kuzatib
                                boring.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div
                                className="w-[190px] py-[9px] text-center cursor-pointer flex gap-2 items-center justify-center rounded-lg bg-[#F3F4F6]">
                                <img src={Calendar} alt="calendar-icon"/>
                                <select
                                    className="text-[14px] cursor-pointer leading-[21px] bg-[#F3F4F6] tracking-[0.21px] fint-bold text-[#111827]">
                                    <option value="30">Oxirgi 30 kun</option>
                                    <option value="15">Oxirgi 15 kun</option>
                                    <option value="7">Oxirgi hafta</option>
                                </select>
                            </div>
                            <button
                                className="w-[190px] cursor-not-allowed rounded-lg bg-[#135BEC] flex items-center justify-center py-[9px] gap-2">
                                <img src={Plus} alt="plus-icon"/>
                                <p className="font-bold text-[14px] leading-[21px] text-white">Yangi yetkazib be…</p>
                            </button>
                        </div>
                    </div>
                    <div className="mb-8 flex items-center gap-6 justify-center">
                        {mapStats}
                    </div>

                    <div
                        className="px-4 dealers bg-white max-w-full rounded-[12px] shadow-[box-shadow: 0px 1px 2px 0px #0000000D] overflow-y-auto overflow-x-hidden">
                        <div className="sticky py-4 top-0 bg-white">
                            <p className="font-bold text-xl leaidng-[25px] -tracking-[0.3px] text-[#111827] mb-6">Barcha
                                yetkazib berishlar</p>
                            <div className="flex items-center bg-white gap-4 mb-4 sticky top-0">
                                <div
                                    className="flex items-center bg-white w-full rounded-lg border border-[#D1D5DB] py-[7px] px-3">
                                    <img className="mr-[5px]" src={searchDelivery} alt="search-delivery"/>
                                    <input className="w-full" onChange={searchFilter} type="text"/>
                                </div>
                                <div
                                    className="flex gap-2 w-[94.75px] cursor-pointer rounded-lg overflow-x-hidden border pl-[13px] border-[#D1D5DB] py-[11px] justify-center">
                                    <img src={Filter} alt="filter-icon"/>
                                    <select
                                        onChange={deliveryFilter}
                                        className="text-base text-[#1F2937]">
                                        {mapOptions}
                                    </select>
                                </div>
                                <div
                                    className="flex cursor-not-allowed justify-center gap-2 w-[121.63px] rounded-lg border border-[#D1D5DB] py-[9px]">
                                    <img src={Set} alt="set-icon"/>
                                    <p className="text-base text-[#1F2937]">Saralash</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            {
                                deliveryData.length === 0 ? (
                                    <div className="mx-auto bg-white h-[300px] items-center flex"><p className="mx-auto text-red-500 font-bold text-xl">hech nima juq</p></div>
                                ) : (
                                    <table className="w-full">
                                        <thead>
                                        <tr>
                                            <th className="pt-[18.5px] pb-[19.5px] pl-6 text-left font-semibold text-[14px] leading-5 tracking-[0.7px] text-[#4B5563]">Yetkazib
                                                berish ID
                                            </th>
                                            <th className="pt-[18.5px] pb-[19.5px] text-left font-semibold text-[14px] leading-5 tracking-[0.7px] text-[#4B5563]">Sana</th>
                                            <th className="pt-[18.5px] pb-[19.5px] text-left font-semibold text-[14px] leading-5 tracking-[0.7px] text-[#4B5563]">Jo'natuvchi</th>
                                            <th className="pt-[18.5px] pb-[19.5px] text-left font-semibold text-[14px] leading-5 tracking-[0.7px] text-[#4B5563]">Qabul
                                                qiluvchi
                                            </th>
                                            <th className="pt-[18.5px] pb-[19.5px] text-left font-semibold text-[14px] leading-5 tracking-[0.7px] text-[#4B5563]">Mahsulotlar</th>
                                            <th className="pt-[18.5px] pb-[19.5px] text-left font-semibold text-[14px] leading-5 tracking-[0.7px] text-[#4B5563]">Miqdori</th>
                                            <th className="pt-[18.5px] pb-[19.5px] text-center font-semibold text-[14px] leading-5 tracking-[0.7px] text-[#4B5563]">Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {mock}
                                        </tbody>
                                    </table>
                                )
                            }
                        </div>
                        <TablePagination
                            component="div"
                            count={deliveryData.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainDelivery