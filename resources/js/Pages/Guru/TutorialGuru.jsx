import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { imageKonten1, imageNoData } from "../../../assets";
import ActionButton from "@/Components/GeneralComponents/ActionButton";
import MainGuruLayout from "@/Layouts/MainGuruLayout";

export default function TutorialGuru({ auth }) {
    const head_title = ["No", "Judul", "Cover", "Sumber", "Aksi"];
    const data = [
        {
            no: "1",
            judul: "ReactJS Basic",
            cover: imageKonten1,
            sumber: "youtube.com",
        },
    ];

    return (
        <MainGuruLayout>
            <Head title="Tutorial" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <div className="flex justify-between items-center mb-10">
                <h1 className="font-semibold text-2xl">
                    Tutorial Pembelajaran
                </h1>
                <Link href={route("tambah-tutorial")}>
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
                    {data.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableItem item={item.no} />
                                <TableItem item={item.judul} />
                                <TableItem
                                    item={
                                        <img
                                            className="size-20"
                                            src={item.cover}
                                            alt="Cover Materi"
                                        />
                                    }
                                />
                                <TableItem item={item.sumber} />
                                <TableItem item={<ActionButton />} />
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
        </MainGuruLayout>
    );
}
