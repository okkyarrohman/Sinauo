import { Head, Link } from "@inertiajs/react";
import { imageBelumKuis } from "../../../assets";
import MainLayout from "@/Layouts/MainLayout";

export default function MulaiKuisSiswa() {
    return (
        <MainLayout>
            <Head title="Kuis" />
            <div className="flex flex-col items-center justify-center">
                <img className="w-[28rem]" src={imageBelumKuis} alt="" />
                <p className="text-xl text-center w-2/3 mb-5">
                    Uji kemampuan Anda dalam kuis ini dan dapatkan poin
                    penguasaan atas apa yang telah Anda ketahui
                </p>
                <p className="text-lg mb-3">25 Soal - 60 Menit</p>
                <Link href={route("soal-kuis")}>
                    <button className="bg-primary py-3 px-12 text-white font-bold rounded-[0.625rem]">
                        Mulai
                    </button>
                </Link>
            </div>
        </MainLayout>
    );
}
