import BackButton from "@/Components/GeneralComponents/BackButton";
import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function DetailDataSiswaGuru() {
    const { siswa } = usePage().props;

    useEffect(() => {
        console.log(siswa);
    });

    const head_title = ["Data Siswa", "Keterangan"];

    return (
        <MainGuruLayout>
            <Head title="Data Siswa" />
            <div className="mb-10">
                <BackButton />
            </div>
            <div className="w-4/5">
                <Table>
                    <TableHead head={head_title} />
                    <TableBody>
                        <TableRow>
                            <TableItem item="Nama Siswa" />
                            <TableItem item={siswa.name} />
                        </TableRow>
                        <TableRow>
                            <TableItem item="Foto Profil" />
                            <TableItem item="foto.png" />
                        </TableRow>
                        <TableRow>
                            <TableItem item="Tempat & Tanggal Lahir" />
                            <TableItem item="Jombang, 28 Februari 2004" />
                        </TableRow>
                        <TableRow>
                            <TableItem item="Alamat" />
                            <TableItem item="Jl. Indonesia" />
                        </TableRow>
                        <TableRow>
                            <TableItem item="No. Telepon" />
                            <TableItem item="087759018317" />
                        </TableRow>
                        <TableRow>
                            <TableItem item="Email" />
                            <TableItem item={siswa.email} />
                        </TableRow>
                        {/* <TableRow>
                            <TableItem item="Password" />
                            <TableItem item={siswa.password} />
                        </TableRow> */}
                        <TableRow>
                            <TableItem item="Jumlah Waktu Akses " />
                            <TableItem item="12:12:12" />
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </MainGuruLayout>
    );
}
