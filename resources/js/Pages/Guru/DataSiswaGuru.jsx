import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, router } from "@inertiajs/react";
import { imageKonten1, imageNoData } from "../../../assets";
import ActionButton from "@/Components/GeneralComponents/ActionButton";

export default function DataSiswaGuru({ auth }) {
    const head_title = ["No", "Nama", "Email", "Alamat", "Aksi"];
    const data = [
        {
            no: "1",
            nama: "Febrian Daffa",
            email: "daffa123@gmail.com",
            alamat: "Jl. Malik Ibrahim",
        },
    ];

    return (
        <MainLayout>
            <Head title="Data Siswa" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <div className="flex justify-between items-center mb-10">
                <h1 className="font-semibold text-2xl">Data Siswa</h1>
                {/* <Link href={route("tambah-materi")}>
                    <button className="flex items-center gap-1 w-fit py-3 px-5 rounded-[0.625rem] bg-primary text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                        Tambah
                    </button>
                </Link> */}
            </div>
            <Table>
                <TableHead head={head_title} />
                <TableBody>
                    {data.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableItem item={item.no} />
                                <TableItem item={item.nama} />
                                <TableItem item={item.email} />
                                <TableItem item={item.alamat} />
                                <TableItem
                                    item={
                                        <div className="flex items-center gap-4">
                                            <Link href={route("detail-siswa")}>
                                                <button
                                                    className="flex items-center"
                                                    type="button"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                        />
                                                    </svg>
                                                </button>
                                            </Link>
                                            <ActionButton
                                                handleEdit={() =>
                                                    router.visit(
                                                        "/data-siswa/edit-siswa"
                                                    )
                                                }
                                            />
                                        </div>
                                    }
                                />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {data.length > 0 ? null : (
                <img
                    className="w-80 mx-auto mt-8"
                    src={imageNoData}
                    alt="Tidak Ada Data"
                />
            )}
        </MainLayout>
    );
}
