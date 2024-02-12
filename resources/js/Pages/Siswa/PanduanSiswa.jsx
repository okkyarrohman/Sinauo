import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import panduanSiswa from "../../../../public/Panduan Siswa SinauO!.pdf";

export default function PanduanSiswa() {
    return (
        <MainLayout>
            <Head title="Panduan" />
            <h1 className="font-semibold text-2xl mb-10 text-center">
                Panduan Website
            </h1>
            <embed
                className="rounded-xl w-full h-screen bg-[#D9D9D9]"
                src={panduanSiswa}
                type="application/pdf"
            ></embed>
        </MainLayout>
    );
}
