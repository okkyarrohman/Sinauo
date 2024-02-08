import BackButton from "@/Components/GeneralComponents/BackButton";
import MainLayout from "@/Layouts/MainLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { url } from "../../../assets/url";
import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";

export default function ViewIsiMateriSiswa({ auth }) {
    const { submateri } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        id: submateri[0].id,
        user_id: auth.user.id,
        status: submateri[0].status,
    });

    const handleMarkDone = (e) => {
        e.preventDefault();
        post(route("update.submateri"));
    };

    return (
        <MainLayout>
            <Head title="Materi" />
            <div className="mb-10">
                <BackButton />
            </div>
            {data.status === "Selesai" ? (
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
                        id="status"
                        name="status"
                        value={(data.status = "Selesai")}
                    />
                    <PrimaryButton
                        text="Tandai Selesai"
                        onClick={handleMarkDone}
                    />
                </form>
            )}
            <embed
                className="rounded-xl w-full h-screen bg-[#D9D9D9]"
                src={`${url}subMateri/file/${submateri[0].file}`}
                type="application/pdf"
            ></embed>
        </MainLayout>
    );
}
