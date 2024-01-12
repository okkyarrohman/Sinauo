import BackButton from "@/Components/GeneralComponents/BackButton";
import MainLayout from "@/Layouts/MainLayout";
import { Head, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { url } from "../../../assets/url";

export default function ViewIsiMateriSiswa() {
    const { submateri } = usePage().props;

    useEffect(() => {
        console.log(submateri);
    }, []);

    return (
        <MainLayout>
            <Head title="Materi" />
            <div className="mb-10">
                <BackButton />
            </div>
            <embed
                className="rounded-xl w-full h-screen bg-[#D9D9D9]"
                src={`${url}subMateri/file/${submateri[0].file}`}
                type="application/pdf"
            >
                {/* <span className="h-full text-5xl flex justify-center items-center">
                    Isi Referensi
                </span> */}
            </embed>
        </MainLayout>
    );
}
