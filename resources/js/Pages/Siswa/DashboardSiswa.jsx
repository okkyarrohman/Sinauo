import TextInput from "@/Components/TextInput";
import MainLayout from "@/Layouts/MainLayout";
import { imageKonten1, imageNoData, imageWelcomeBanner } from "../../../assets";
import { Head, Link, usePage } from "@inertiajs/react";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import WelcomeBanner from "@/Components/SiswaComponents/WelcomeBanner";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import QRAbsensi from "@/Components/SiswaComponents/QRAbsensi";
import InformasiBaru from "@/Components/SiswaComponents/InformasiBaru";
import TesStatistik from "@/Components/SiswaComponents/TesStatistik";
import ProgresMateri from "@/Components/SiswaComponents/ProgresMateri";
import ProgresTugas from "@/Components/SiswaComponents/ProgresTugas";
import { url } from "../../../assets/url";
import FormatWaktu from "../../../assets/formatdate";

export default function DashboardSiswa({ auth }) {
    const { barcode, tugasBaru, tugasResult, chartKuis, chartMateri } =
        usePage().props;

    let percentage = 0;
    let sortedTugasTerbaru = [];
    let filledAnswers = [];

    if (
        tugasResult.filter((item) => item.user_id == auth.user.id).length != 0
    ) {
        sortedTugasTerbaru = tugasResult.sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );

        const totalAnswers = ["answer1", "answer2", "answer3", "answer4"];
        filledAnswers = totalAnswers.filter((answer) => tugasResult[0][answer]);

        percentage = (filledAnswers.length / totalAnswers.length) * 100;
    }

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
                        <TesStatistik data={chartKuis} />
                        <ProgresMateri data={chartMateri} />
                    </div>
                    {tugasResult.filter((item) => item.user_id == auth.user.id)
                        .length != 0 && (
                        <ProgresTugas
                            nama={sortedTugasTerbaru[0].tugas.nama}
                            tenggat={FormatWaktu(
                                sortedTugasTerbaru[0].tugas.tenggat
                            )}
                            progress={percentage}
                            link={route(
                                "detail-tugas",
                                sortedTugasTerbaru[0].tugas.id
                            )}
                        />
                    )}
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
                            <QRAbsensi
                                qr={
                                    barcode
                                        ? `${url}absensi/barcode/${barcode.barcode}`
                                        : imageNoData
                                }
                                tanggal={
                                    barcode
                                        ? FormatWaktu(barcode.created_at)
                                        : "Belum Ada Absensi"
                                }
                                link={barcode.link}
                            />
                        </div>
                        <InformasiBaru data={tugasBaru} />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
