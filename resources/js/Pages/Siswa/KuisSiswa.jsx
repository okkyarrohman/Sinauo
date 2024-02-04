import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import { useEffect } from "react";

export default function KuisSiswa({ auth }) {
    const { kategori, hasilKuis } = usePage().props;

    const filteredHasilKuisById = hasilKuis.filter(
        (hasil) => hasil.user_id == auth.user.id
    );

    const isTenggatPassed = (deadline) => {
        const currentDateTime = new Date();
        const tenggatDateTime = new Date(deadline);

        return currentDateTime.getTime() >= tenggatDateTime.getTime();
    };

    useEffect(() => {
        console.log("Kategori", kategori);
        console.log("Result", hasilKuis);
    }, []);

    return (
        <MainLayout>
            <Head title="Kuis" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">Kuis Pembelajaran</h1>
            {kategori.map((item, index) => {
                const pointUserByKategori = filteredHasilKuisById.find(
                    (hasil) => hasil.kategori_kuis_id == item.id
                );

                return (
                    <div key={index} className="p-6 bg-white rounded-2xl mb-4">
                        <div className="w-[91%] flex items-center">
                            <div className="bg-green-500 size-10 rounded-lg mr-16"></div>
                            <div className="w-[65%] flex justify-between">
                                <div className="w-60 relative">
                                    <p className="break-words text-ellipsis whitespace-nowrap overflow-hidden hover:text-wrap hover:absolute">
                                        {item.kuis}
                                    </p>
                                </div>
                                <p>{item.soal.length} Soal</p>
                                <p>{item.waktu} Menit</p>
                            </div>
                            <p className="ml-auto">
                                {pointUserByKategori &&
                                pointUserByKategori.length != 0
                                    ? pointUserByKategori.total_points
                                    : 0}
                                /100
                            </p>
                            <Link
                                className={`font-bold py-2 px-5 text-white rounded-[0.625rem] ml-auto ${
                                    isTenggatPassed(item.tenggat) ||
                                    pointUserByKategori
                                        ? "bg-primary-light"
                                        : "bg-primary"
                                }`}
                                href={route("mulai-kuis", item.id)}
                                as="button"
                                disabled={
                                    isTenggatPassed(item.tenggat) ||
                                    pointUserByKategori
                                }
                            >
                                Mulai
                            </Link>
                            {/* {item.total_points === "" ? (
                                <Link
                                    className="ml-auto"
                                    href={route("mulai-kuis")}
                                >
                                    <button className="font-bold py-2 px-5 bg-primary text-white rounded-[0.625rem]">
                                        Mulai
                                    </button>
                                </Link>
                            ) : (
                                <p className="ml-auto">{item.total_points}</p>
                            )} */}
                        </div>
                    </div>
                );
            })}
        </MainLayout>
    );
}
