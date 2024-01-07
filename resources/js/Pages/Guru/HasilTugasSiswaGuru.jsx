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
import { Head, Link, usePage } from "@inertiajs/react";

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

    const data = [
        {
            no: "1",
            nama: "Daffa",
            tugas: "ReactJS Portfolio",
            progres: "25",
            status: "Belum Diterima",
        },
        {
            no: "2",
            nama: "Febrian",
            tugas: "ReactJS Portfolio",
            progres: "25",
            status: "Sudah Diterima",
        },
    ];

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
                        return (
                            <TableRow key={index}>
                                <TableItem item={item.no} />
                                <TableItem item={item.user.name} />
                                <TableItem item={item.tugas.nama} />
                                <TableItem
                                    item={
                                        <ProgressBar progres={item.progres} />
                                    }
                                />
                                <TableItem item={item.konfirmasi} />
                                <TableItem
                                    item={
                                        <Link
                                            href={route(
                                                "detail-tugas-siswa",
                                                item.id
                                            )}
                                        >
                                            <button className="bg-primary rounded-[0.625rem] py-2 px-6 font-bold text-white">
                                                Lihat
                                            </button>
                                        </Link>
                                    }
                                />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </MainGuruLayout>
    );
}
