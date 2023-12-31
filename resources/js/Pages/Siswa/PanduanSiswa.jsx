import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function PanduanSiswa() {
    return (
        <MainLayout>
            <Head title="Panduan" />
            <h1 className="font-semibold text-2xl mb-10 text-center">
                Panduan Website
            </h1>
            <div className="rounded-xl w-full h-screen bg-[#D9D9D9]">
                <span className="h-full text-5xl flex justify-center items-center">
                    Isi Panduan
                </span>
            </div>
        </MainLayout>
    );
}
