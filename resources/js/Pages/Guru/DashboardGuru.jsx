import TambahAbsensi from "@/Components/GuruComponents/TambahAbsensi";
import WelcomeBannerGuru from "@/Components/GuruComponents/WelcomeBannerGuru";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import { Head, usePage } from "@inertiajs/react";
import FormatWaktu from "../../../assets/formatdate";
import { url } from "../../../assets/url";

export default function DashboardGuru({ auth }) {
    const { absensis } = usePage().props;

    const currentDate = new Date();

    return (
        <MainGuruLayout>
            <Head title="Dashboard" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <div className="mb-8">
                <WelcomeBannerGuru />
            </div>
            <div className="flex justify-evenly">
                <TambahAbsensi />
                <div className="p-7 bg-white rounded-[0.625rem] w-96">
                    <div className="flex justify-between mb-6">
                        <h1 className="text-xl font-bold">Absensi Hari Ini</h1>
                        <p className="text-[#8A8A8A] font-bold">
                            {FormatWaktu(currentDate)}
                        </p>
                    </div>
                    {absensis ? (
                        <img
                            src={`${url}absensi/barcode/${absensis.barcode}`}
                            alt="barcode absensi"
                            className="w-40 mx-auto"
                        />
                    ) : (
                        <div className="h-fit mt-14">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-16 h-16 mx-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                                />
                            </svg>
                            <p className="text-center font-semibold text-lg">
                                Belum Ada Absensi Hari Ini
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </MainGuruLayout>
    );
}
