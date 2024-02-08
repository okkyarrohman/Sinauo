import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function HasilKuis({ auth }) {
    const { hasil } = usePage().props;

    const head_title = ["No", "Pertanyaan", "Poin"];

    return (
        <MainGuruLayout>
            <Head title="Kuis" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-4">
                Detail Hasil Kuis Pembelajaran
            </h1>
            <h1 className="font-semibold text-2xl mb-10">
                Total Poin : {hasil[0].total_points}
            </h1>
            <Table>
                <TableHead head={head_title} />
                <TableBody>
                    {hasil[0].soal.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableItem item={index + 1} />
                                <TableItem item={item.soal} />
                                <TableItem item={item.pivot.point} />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </MainGuruLayout>
    );
}
