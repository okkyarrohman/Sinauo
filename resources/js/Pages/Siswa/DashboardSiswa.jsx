import TextInput from "@/Components/TextInput";
import MainLayout from "@/Layouts/MainLayout";
import { imageKonten1, imageWelcomeBanner } from "../../../assets";
import { Head, Link } from "@inertiajs/react";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import WelcomeBanner from "@/Components/SiswaComponents/WelcomeBanner";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import QRAbsensi from "@/Components/SiswaComponents/QRAbsensi";
import InformasiBaru from "@/Components/SiswaComponents/InformasiBaru";
import TesStatistik from "@/Components/SiswaComponents/TesStatistik";
import ProgresMateri from "@/Components/SiswaComponents/ProgresMateri";
import ProgresTugas from "@/Components/SiswaComponents/ProgresTugas";

export default function DashboardSiswa({ auth }) {
    return (
        <MainLayout>
            <Head title="Dashboard" />
            <div className="flex mr-[22.5rem]">
                <section>
                    <div className="mb-10">
                        <SearchBar />
                    </div>
                    <div className="mb-12">
                        <WelcomeBanner />
                    </div>
                    <div className="grid grid-cols-2 gap-x-12 mb-8">
                        <TesStatistik />
                        <ProgresMateri />
                    </div>
                    <ProgresTugas />
                </section>
                <section className="w-96 h-screen pl-4 pr-12 py-10 bg-white fixed top-0 bottom-0 right-0 rounded-l-3xl shadow-custom">
                    <div className="mb-9">
                        <ProfileInfo name={auth.user.name} />
                    </div>
                    <div
                        className="overflow-y-auto pr-2"
                        style={{ height: "calc(100% - 5.5rem)" }}
                    >
                        <div className="mb-8">
                            <QRAbsensi />
                        </div>
                        <InformasiBaru />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
