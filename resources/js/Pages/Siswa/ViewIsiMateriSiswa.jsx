import BackButton from "@/Components/GeneralComponents/BackButton";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { url } from "../../../assets/url";
import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import { useEffect } from "react";

export default function ViewIsiMateriSiswa({ auth }) {
    const { submateri, submateriSeens } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        submateri_id: submateri.id,
        is_seen: submateriSeens ? submateriSeens.is_seen : "Belum",
    });

    const handleMarkDone = (e) => {
        e.preventDefault();
        post(route("tandai.submateri"), {
            onSuccess: () => window.location.reload(),
        });
    };

    return (
        <MainLayout>
            <Head title="Materi" />
            <div className="mb-10">
                <BackButton />
            </div>
            {data.is_seen === "Selesai" ? (
                <p className="text-primary font-semibold text-xl flex gap-3 items-center justify-end mb-10">
                    Selesai Dibaca
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                        />
                    </svg>
                </p>
            ) : (
                <form className="ml-auto w-fit mb-10">
                    <input
                        type="hidden"
                        id="submateri_id"
                        name="submateri_id"
                        value={data.submateri_id}
                    />
                    <input
                        type="hidden"
                        id="is_seen"
                        name="is_seen"
                        value={data.is_seen}
                    />
                    <PrimaryButton
                        text="Tandai Selesai"
                        onClick={handleMarkDone}
                    />
                </form>
            )}
            <embed
                className="rounded-xl w-full h-screen bg-[#D9D9D9]"
                src={`${url}subMateri/file/${submateri.file}`}
                type="application/pdf"
            ></embed>
        </MainLayout>
    );
}
