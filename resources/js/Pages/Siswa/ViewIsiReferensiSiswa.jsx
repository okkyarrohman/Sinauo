import BackButton from "@/Components/GeneralComponents/BackButton";
import MainLayout from "@/Layouts/MainLayout";
import { Head, usePage } from "@inertiajs/react";
import { useEffect } from "react";

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
            <div className="rounded-xl w-full h-screen bg-[#D9D9D9]">
                <span className="h-full text-5xl flex justify-center items-center">
                    Isi Referensi
                </span>
            </div>
        </MainLayout>
    );
}
