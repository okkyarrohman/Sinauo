import { Head, Link, usePage } from "@inertiajs/react";
import { imageBelumKuis } from "../../../assets";
import MainLayout from "@/Layouts/MainLayout";
import { useEffect } from "react";

export default function MulaiKuisSiswa() {
    const { kategori } = usePage().props;

    useEffect(() => {
        console.log(kategori);
    }, []);

    return (
        <MainLayout>
            <Head title="Kuis" />
            <div className="flex flex-col items-center justify-center">
                <img className="w-[28rem]" src={imageBelumKuis} alt="" />
                <p className="text-xl text-center w-2/3 mb-5">
                    Uji kemampuan Anda dalam kuis ini dan dapatkan poin
                    penguasaan atas apa yang telah Anda ketahui
                </p>
                <p className="text-lg mb-3">
                    {kategori[0].soal.length} Soal - {kategori[0].waktu} Menit
                </p>
                <Link href={route("soal-kuis", kategori[0].id)}>
                    <button className="bg-primary py-3 px-12 text-white font-bold rounded-[0.625rem]">
                        Mulai
                    </button>
                </Link>
            </div>
        </MainLayout>
    );
}
