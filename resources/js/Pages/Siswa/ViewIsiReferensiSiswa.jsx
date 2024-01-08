import BackButton from "@/Components/GeneralComponents/BackButton";
import MainLayout from "@/Layouts/MainLayout";
import { Head, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { url } from "../../../assets/url";

export default function ViewIsiReferensiSiswa() {
    const { referensi } = usePage().props;

    useEffect(() => {
        console.log(referensi);
    }, []);

    return (
        <MainLayout>
            <Head title="Referensi" />
            <div className="mb-10">
                <BackButton />
            </div>
            <embed
                className="rounded-xl w-full h-screen bg-[#D9D9D9]"
                src={`${url}referensi/file/${referensi.file}`}
                type="application/pdf"
            >
                {/* <span className="h-full text-5xl flex justify-center items-center">
                    Isi Referensi
                </span> */}
            </embed>
        </MainLayout>
    );
}
