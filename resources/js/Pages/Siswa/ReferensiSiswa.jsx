import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function ReferensiSiswa({ auth }) {
    return (
        <MainLayout>
            <Head title="Referensi" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
        </MainLayout>
    );
}
