import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";

export default function KuisSiswa({ auth }) {
    const data = [
        { nama: "Pre-Test", total_soal: "25", durasi: "25", nilai: "95" },
        {
            nama: "Post-Test Terakhir Gk Bohong Suerrrrrr",
            total_soal: "15",
            durasi: "60",
            nilai: "",
        },
    ];

    return (
        <MainLayout>
            <Head title="Kuis" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">Kuis Pembelajaran</h1>
            {data.map((item, index) => {
                return (
                    <div key={index} className="p-6 bg-white rounded-2xl mb-4">
                        <div className="w-[91%] flex items-center">
                            <div className="bg-green-500 size-10 rounded-lg mr-16"></div>
                            <div className="w-[65%] flex justify-between">
                                <div className="w-60 relative">
                                    <p className="break-words text-ellipsis whitespace-nowrap overflow-hidden hover:text-wrap hover:absolute">
                                        {item.nama}
                                    </p>
                                </div>
                                <p>{item.total_soal} Soal</p>
                                <p>{item.durasi} Menit</p>
                            </div>
                            {item.nilai === "" ? (
                                <Link
                                    className="ml-auto"
                                    href={route("mulai-kuis")}
                                >
                                    <button className="font-bold py-2 px-5 bg-primary text-white rounded-[0.625rem]">
                                        Mulai
                                    </button>
                                </Link>
                            ) : (
                                <p className="ml-auto">{item.nilai}</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </MainLayout>
    );
}
