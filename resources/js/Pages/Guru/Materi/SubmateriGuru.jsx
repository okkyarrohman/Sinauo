import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import { Head, Link, usePage } from "@inertiajs/react";
import { imageKonten1, imageNoData } from "../../../../assets";
import ActionButton from "@/Components/GeneralComponents/ActionButton";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import { useEffect } from "react";

export default function SubmateriGuru({ auth }) {
    const { subMateri } = usePage().props;

    useEffect(() => {
        console.log(subMateri);
    }, []);

    const head_title = [
        "No",
        "Materi",
        "Submateri",
        "Deskripsi",
        "Cover",
        "File",
        "Aksi",
    ];

    return (
        <MainGuruLayout>
            <Head title="Materi" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <div className="flex justify-between items-center mb-10">
                <h1 className="font-semibold text-2xl">
                    Submateri Pembelajaran
                </h1>
                <Link href={route("create.submateri")}>
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
                </Link>
            </div>
            <Table>
                <TableHead head={head_title} />
                <TableBody>
                    {subMateri.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableItem item={index + 1} />
                                <TableItem item={item.materi.nama} />
                                <TableItem item={item.nama} />
                                <TableItem item={item.deskripsi} wrap />
                                <TableItem item={item.cover} wrap />
                                <TableItem item={item.file} wrap />
                                <TableItem
                                    item={
                                        <ActionButton
                                            handleDelete={route(
                                                "destroy.submateri",
                                                item.id
                                            )}
                                            handleEdit={route(
                                                "edit.submateri",
                                                item.id
                                            )}
                                        />
                                    }
                                />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {subMateri.length > 0 ? null : (
                <img
                    className="w-80 mx-auto mt-8"
                    src={imageNoData}
                    alt="Tidak Ada Data"
                />
            )}
        </MainGuruLayout>
    );
}
