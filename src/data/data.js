import Truck from '../assets/truck.svg'
import Clock from '../assets/clock.svg'
import Check from '../assets/check.svg'
import Canceled from '../assets/canceled.svg'

export const dealers = [
    {
        id: 73456,
        name: "Premium Motors",
        contact: "Akmal Valiev",
        phone: "+998 90 123 45 67",
        address: "Toshkent",
        active: true
    },
    {
        id: 29871,
        name: "Avto Lider",
        contact: "Dilshod Karimov",
        phone: "+998 93 987 65 43",
        address: "Samarqand",
        active: true
    },
    {
        id: 55432,
        name: "Mega Avto",
        contact: "Farida Azimova",
        phone: "+998 91 321 98 76",
        address: "Buxoro",
        active: false
    },
    {
        id: 88901,
        name: "Vodiy Auto Trade",
        contact: "Olimjon Rashidov",
        phone: "+998 94 456 12 34",
        address: "Farg'ona",
        active: true
    },
    {
        id: 12345,
        name: "Silk Road Motors",
        contact: "Sardor Nazarov",
        phone: "+998 97 234 56 78",
        address: "Namangan",
        active: true
    },
    {
        id: 34567,
        name: "Capital Cars",
        contact: "Nodira Yusupova",
        phone: "+998 90 345 67 89",
        address: "Toshkent",
        active: false
    },
    {
        id: 67890,
        name: "Zarafshon Auto",
        contact: "Bahrom Toshmatov",
        phone: "+998 93 456 78 90",
        address: "Samarqand",
        active: true
    },
    {
        id: 11223,
        name: "Fergana Drive",
        contact: "Malika Abdullayeva",
        phone: "+998 91 567 89 01",
        address: "Farg'ona",
        active: true
    },
    {
        id: 44556,
        name: "Oʻzbekiston Avto",
        contact: "Jasur Mirzayev",
        phone: "+998 94 678 90 12",
        address: "Buxoro",
        active: false
    },
    {
        id: 77889,
        name: "North Star Auto",
        contact: "Shahlo Qodirov",
        phone: "+998 97 789 01 23",
        address: "Namangan",
        active: true
    },
    {
        id: 99001,
        name: "Toshkent Premium",
        contact: "Rustam Holiqov",
        phone: "+998 90 890 12 34",
        address: "Toshkent",
        active: true
    },
    {
        id: 22334,
        name: "Samarqand Elite",
        contact: "Zulfiya Ergasheva",
        phone: "+998 93 901 23 45",
        address: "Samarqand",
        active: false
    },
];

export const stats = [
    {
        id: 1,
        label: "Barcha yetkazib berishlar",
        value: 1420,
        trend: "+5.2%",
        trendUp: true,
        trendLabel: "o'tgan oyga nisbatan",
        icon: Truck,
    },
    {
        id: 2,
        label: "Jarayonda",
        value: 85,
        trend: "+3",
        trendUp: true,
        trendLabel: "bugun qo'shilgan",
        icon: Clock,
    },
    {
        id: 3,
        label: "Yetkazilgan",
        value: 1289,
        trend: "+8.2%",
        trendUp: true,
        trendLabel: "o'tgan oyga nisbatan",
        icon: Check,
    },
    {
        id: 4,
        label: "Bekor qilingan",
        value: 46,
        trend: "-1.5%",
        trendUp: false,
        trendLabel: "o'tgan oyga nisbatan",
        icon: Canceled,
    },
];

export const deliveries = [
    {
        id: "#DLV-001254",
        date: "2024-07-21",
        jonatuvchi: "Asosiy ombor",
        qabulQiluvchi: "Diler: Aziz Ahmedov",
        products: ["Coca-Cola", "Oreo"],
        quantity: 150,
        status: "Yetkazilgan",
    },
    {
        id: "#DLV-001253",
        date: "2024-07-20",
        jonatuvchi: "Diler: Aziz Ahmedov",
        qabulQiluvchi: "Do'kon: Korzinka",
        products: ["Sultan Choy (qora)"],
        quantity: 50,
        status: "Yo'lda",
    },
    {
        id: "#DLV-001252",
        date: "2024-07-20",
        jonatuvchi: "Asosiy ombor",
        qabulQiluvchi: "Diler: Sardor Komilov",
        products: ["Alpen Gold", "Oreo"],
        quantity: 80,
        status: "Yetkazilgan",
    },
    {
        id: "#DLV-001251",
        date: "2024-07-19",
        jonatuvchi: "Diler: Aziz Ahmedov",
        qabulQiluvchi: "Do'kon: Makro",
        products: ["Nestle Sut 1L"],
        quantity: 200,
        status: "Bekor qilingan",
    },
    {
        id: "#DLV-001250",
        date: "2024-07-18",
        jonatuvchi: "Asosiy ombor",
        qabulQiluvchi: "Diler: Aziz Ahmedov",
        products: ["Sultan Choy (yashil)"],
        quantity: 40,
        status: "Yetkazilgan",
    },
    {
        id: "#DLV-001249",
        date: "2024-07-18",
        jonatuvchi: "Diler: Sardor Komilov",
        qabulQiluvchi: "Do'kon: Havas",
        products: ["Coca-Cola"],
        quantity: 500,
        status: "Tayyorlanmoqda",
    },
    {
        id: "#DLV-001248",
        date: "2024-07-17",
        jonatuvchi: "Asosiy ombor",
        qabulQiluvchi: "Diler: Sardor Komilov",
        products: ["Alpen Gold"],
        quantity: 120,
        status: "Yetkazilgan",
    },
    {
        id: "#DLV-001247",
        date: "2024-07-17",
        jonatuvchi: "Diler: Aziz Ahmedov",
        qabulQiluvchi: "Do'kon: Korzinka",
        products: ["Coca-Cola", "Nestle Sut 1L"],
        quantity: 90,
        status: "Yo'lda",
    },
    {
        id: "#DLV-001246",
        date: "2024-07-16",
        jonatuvchi: "Asosiy ombor",
        qabulQiluvchi: "Diler: Aziz Ahmedov",
        products: ["Oreo", "Sultan Choy (qora)"],
        quantity: 300,
        status: "Yetkazilgan",
    },
    {
        id: "#DLV-001245",
        date: "2024-07-16",
        jonatuvchi: "Diler: Sardor Komilov",
        qabulQiluvchi: "Do'kon: Makro",
        products: ["Alpen Gold"],
        quantity: 60,
        status: "Bekor qilingan",
    },
    {
        id: "#DLV-001244",
        date: "2024-07-15",
        jonatuvchi: "Asosiy ombor",
        qabulQiluvchi: "Diler: Sardor Komilov",
        products: ["Coca-Cola"],
        quantity: 250,
        status: "Tayyorlanmoqda",
    },
    {
        id: "#DLV-001243",
        date: "2024-07-15",
        jonatuvchi: "Diler: Aziz Ahmedov",
        qabulQiluvchi: "Do'kon: Havas",
        products: ["Nestle Sut 1L", "Oreo"],
        quantity: 75,
        status: "Yetkazilgan",
    },
];

export const statusConfig = {
    "Yetkazilgan": "bg-[#DCFCE7] rounded-[9999px] text-[#166534] font-medium text-[12px] leading-4 w-fit px-[10px] pt-[1px] pb-[2px]",
    "Yo'lda": "bg-[#DBEAFE] rounded-[9999px] text-[#1E40AF] font-medium text-[12px] leading-4 w-fit px-[10px] pt-[1px] pb-[2px]",
    "Bekor qilingan": "bg-[#FEE2E2] rounded-[9999px] text-[#991B1B] font-medium text-[12px] leading-4 w-fit px-[10px] pt-[1px] pb-[2px]",
    "Tayyorlanmoqda": "bg-[#FEF9C3] rounded-[9999px] text-[#854D0E] font-medium text-[12px] leading-4 w-fit px-[10px] pt-[1px] pb-[2px]",
};