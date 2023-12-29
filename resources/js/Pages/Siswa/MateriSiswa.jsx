import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function MateriSiswa({ auth }) {
    return (
        <MainLayout>
            <Head title="Materi" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <div className="w-96">
                    <ProfileInfo name={auth.user.name} />
                </div>
            </div>
        </MainLayout>
    );
}
