import ActionButton from "@/Components/GeneralComponents/ActionButton";
import Pagination from "@/Components/GeneralComponents/Pagination";
import ProgressBar from "@/Components/GeneralComponents/ProgressBar";
import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import TambahAbsensi from "@/Components/GuruComponents/TambahAbsensi";
import WelcomeBannerGuru from "@/Components/GuruComponents/WelcomeBannerGuru";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function DashboardGuru({ auth }) {
    const { barMateri } = usePage().props;

    useEffect(() => {
        console.log(barMateri);
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const head_title = ["No", "Nama", "Materi", "Kuis", "Tugas", "Aksi"];
    const data = [
        {
            no: "1",
            nama: "Febrian Daffa",
            progres_materi: 50,
            kuis: "Selesai",
            progres_tugas: 25,
        },
        {
            no: "2",
            nama: "Eka Putra",
            progres_materi: 10,
            kuis: "Selesai",
            progres_tugas: 100,
        },
        {
            no: "3",
            nama: "Wacana Forever",
            progres_materi: 25,
            kuis: "Belum",
            progres_tugas: 75,
        },
    ];

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <MainGuruLayout>
            <Head title="Dashboard" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <div className="mb-8">
                <WelcomeBannerGuru />
            </div>
            <TambahAbsensi />
            <h1 className="font-semibold text-2xl my-8">Statistik Siswa</h1>
            <Table>
                <TableHead head={head_title} />
                <TableBody>
                    {data &&
                        currentItems.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableItem item={item.no} />
                                    <TableItem item={item.nama} />
                                    <TableItem
                                        item={
                                            <ProgressBar
                                                progres={item.progres_materi}
                                            />
                                        }
                                        className="w-48"
                                    />
                                    <TableItem
                                        item={item.kuis}
                                        className={`font-semibold ${
                                            item.kuis === "Selesai"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    />
                                    <TableItem
                                        item={
                                            <ProgressBar
                                                progres={item.progres_tugas}
                                            />
                                        }
                                        className="w-48"
                                    />
                                    <TableItem item={<ActionButton />} />
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </MainGuruLayout>
    );
}
