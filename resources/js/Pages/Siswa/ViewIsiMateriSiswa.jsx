import BackButton from "@/Components/GeneralComponents/BackButton";
import MainLayout from "@/Layouts/MainLayout";

export default function ViewIsiMateriSiswa() {
    return (
        <MainLayout>
            <div className="mb-10">
                <BackButton />
            </div>
            <div className="rounded-xl w-full h-screen bg-[#D9D9D9]">
                <span className="h-full text-5xl flex justify-center items-center">
                    Isi Materi
                </span>
            </div>
        </MainLayout>
    );
}
