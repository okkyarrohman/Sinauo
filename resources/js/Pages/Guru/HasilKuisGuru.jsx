import ActionButton from "@/Components/GeneralComponents/ActionButton";
import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function HasilKuisGuru({ auth }) {
    const head_title = ["No", "Nama", "Kuis", "Status", "Nilai", "Aksi"];

    const data = [
        {
            no: "1",
            nama: "Bobi",
            kuis: "Pre-Test",
            status: "Selesai",
            nilai: "75",
        },
        {
            no: "2",
            nama: "Dawwas",
            kuis: "Pre-Test",
            status: "Selesai",
            nilai: "25",
        },
    ];

    return (
        <MainGuruLayout>
            <Head title="Kuis" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">
                Hasil Kuis Pembelajaran
            </h1>
            <Table>
                <TableHead head={head_title} />
                <TableBody>
                    {data.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableItem item={item.no} />
                                <TableItem item={item.nama} />
                                <TableItem item={item.kuis} />
                                <TableItem item={item.status} />
                                <TableItem item={item.nilai} />
                                <TableItem item={<ActionButton />} />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </MainGuruLayout>
    );
}
