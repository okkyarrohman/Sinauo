import ProgressBar from "@/Components/GeneralComponents/ProgressBar";
import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { imageNoData } from "../../../assets";

export default function HasilTugasSiswaGuru({ auth }) {
    const { tugas } = usePage().props;

    const head_title = [
        "No",
        "Nama",
        "Tugas",
        "Progres",
        "Status",
        "Konfirmasi",
    ];

    useEffect(() => {
        console.log(tugas);
    }, []);

    const handleLihatTugas = (userId, tugasId, id) => {
        localStorage.setItem("USER_ID", userId);
        localStorage.setItem("TUGAS_ID", tugasId);
        router.visit(`/tugas-guru/detail-tugas-siswa/${id}`);
    };

    return (
        <MainGuruLayout>
            <Head title="Tugas" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">Hasil Tugas</h1>
            <Table>
                <TableHead head={head_title} />
                <TableBody>
                    {tugas.map((item, index) => {
                        const totalAnswers = [
                            "answer1",
                            "answer2",
                            "answer3",
                            "answer4",
                        ];
                        const filledAnswers = totalAnswers.filter(
                            (answer) => item[answer]
                        );

                        const percentage =
                            (filledAnswers.length / totalAnswers.length) * 100;

                        let status;
                        if (
                            item.konfirmasi1 !== "Belum Diterima" &&
                            item.konfirmasi2 === "Belum Diterima" &&
                            item.konfirmasi3 === "Belum Diterima" &&
                            item.konfirmasi4 === "Belum Diterima"
                        ) {
                            status = "Tahap 1 Dikonfirmasi";
                        } else if (
                            item.konfirmasi1 !== "Belum Diterima" &&
                            item.konfirmasi2 !== "Belum Diterima" &&
                            item.konfirmasi3 === "Belum Diterima" &&
                            item.konfirmasi4 === "Belum Diterima"
                        ) {
                            status = "Tahap 2 Dikonfirmasi";
                        } else if (
                            item.konfirmasi1 !== "Belum Diterima" &&
                            item.konfirmasi2 !== "Belum Diterima" &&
                            item.konfirmasi3 !== "Belum Diterima" &&
                            item.konfirmasi4 === "Belum Diterima"
                        ) {
                            status = "Tahap 3 Dikonfirmasi";
                        } else if (
                            item.konfirmasi1 !== "Belum Diterima" &&
                            item.konfirmasi2 !== "Belum Diterima" &&
                            item.konfirmasi3 !== "Belum Diterima" &&
                            item.konfirmasi4 !== "Belum Diterima"
                        ) {
                            status = "Tahap 4 Dikonfirmasi";
                        }

                        return (
                            <TableRow key={index}>
                                <TableItem item={index + 1} />
                                <TableItem
                                    item={item.user.name}
                                    className="w-72"
                                    wrap
                                />
                                <TableItem item={item.tugas.nama} />
                                <TableItem
                                    item={<ProgressBar progres={percentage} />}
                                />
                                <TableItem item={status} wrap />
                                <TableItem
                                    item={
                                        <button
                                            type="button"
                                            className="bg-primary rounded-[0.625rem] py-2 px-6 font-bold text-white"
                                            onClick={() =>
                                                handleLihatTugas(
                                                    item.user_id,
                                                    item.tugas_id,
                                                    item.id
                                                )
                                            }
                                        >
                                            Lihat
                                        </button>
                                        // </Link>
                                    }
                                />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {tugas.length > 0 ? null : (
                <img
                    className="w-80 mx-auto mt-8"
                    src={imageNoData}
                    alt="Tidak Ada Data"
                />
            )}
        </MainGuruLayout>
    );
}
