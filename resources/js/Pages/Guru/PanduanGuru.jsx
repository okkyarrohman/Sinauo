import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import panduanGuru from "../../../../public/Panduan Guru SinauO!.pdf";

export default function PanduanGuru() {
    return (
        <MainGuruLayout>
            <Head title="Panduan" />
            <h1 className="font-semibold text-2xl mb-10 text-center">
                Panduan Website
            </h1>
            <embed
                className="rounded-xl w-full h-screen bg-[#D9D9D9]"
                src={panduanGuru}
                type="application/pdf"
            ></embed>
        </MainGuruLayout>
    );
}
