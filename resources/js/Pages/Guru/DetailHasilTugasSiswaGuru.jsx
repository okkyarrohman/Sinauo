import BackButton from "@/Components/GeneralComponents/BackButton";
import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function DetailHasilTugasSiswaGuru() {
    const { tugas } = usePage().props;

    const { data, setData, post, processing, error } = useForm({
        id: tugas[0].id,
        tugas_id: tugas.tugas_id,
        konfirmasi: tugas.konfirmasi,
        feedback: tugas.feedback,
    });

    const head_title = ["Tahap", "Tanggal", "Hasil"];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const optionDropdown = ["Terima", "Tolak"];

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setSelectedValue(option);
        setData("konfirmasi", option);
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Value Yang Tersubmit", data);
        triggerAlert();
        post(route("updateFeedback.tugas"));
    };

    const triggerAlert = () => {
        Swal.fire({
            icon: "success",
            title: "Tugas Berhasil Dinilai",
            showConfirmButton: false,
            customClass: {
                title: "block text-lg w-3/4 text-center mx-auto",
            },
            timer: 1000,
        });
    };

    useEffect(() => {
        console.log("TUGAS ISI :", tugas);
    }, []);

    return (
        <MainGuruLayout>
            <Head title="Tugas" />
            <div className="mb-10">
                <BackButton />
            </div>
            <Table>
                <TableHead head={head_title} />
                <TableBody>
                    {tugas.map((item, index) => {
                        return (
                            <>
                                <TableRow>
                                    <TableItem item={`Step 1`} />
                                    <TableItem item={item.updated_at} />
                                    <TableItem
                                        item={
                                            item.answer1 === null
                                                ? "Belum Terjawab"
                                                : item.answer1
                                        }
                                    />
                                </TableRow>
                                <TableRow>
                                    <TableItem item={`Step 2`} />
                                    <TableItem item={item.updated_at} />
                                    <TableItem
                                        item={
                                            item.answer2 === null
                                                ? "Belum Terjawab"
                                                : item.answer2
                                        }
                                    />
                                </TableRow>
                                <TableRow>
                                    <TableItem item={`Step 3`} />
                                    <TableItem item={item.updated_at} />
                                    <TableItem
                                        item={
                                            item.answer3 === null
                                                ? "Belum Terjawab"
                                                : item.answer3
                                        }
                                    />
                                </TableRow>
                                <TableRow>
                                    <TableItem item={`Step 4`} />
                                    <TableItem item={item.updated_at} />
                                    <TableItem
                                        item={
                                            item.answer4 === null
                                                ? "Belum Terjawab"
                                                : item.answer4
                                        }
                                    />
                                </TableRow>
                            </>
                        );
                    })}
                </TableBody>
            </Table>
            <form onSubmit={handleSubmit}>
                <h1 className="font-semibold text-2xl mt-10 mb-4">
                    Konfirmasi
                </h1>
                <div className="relative">
                    <div className="px-4 py-3 bg-white border border-[#BDBDBD] w-60 rounded">
                        <button
                            className="flex items-center justify-between w-full"
                            type="button"
                            onClick={handleDropdown}
                        >
                            <span>{selectedValue || "Konfirmasi Tugas"}</span>
                            <div>
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                        />
                                    </svg>
                                )}
                            </div>
                        </button>
                    </div>
                    {isOpen && (
                        <div className="w-60 mt-2 rounded border border-[#BDBDBD] bg-white">
                            {optionDropdown.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        className="block w-full text-left px-4 py-3 border-b border-[#BDBDBD]"
                                        onClick={() => handleSelectOption(item)}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
                <h1 className="font-semibold text-2xl mt-10 mb-4">Feedback</h1>
                <div className="mb-6">
                    <textarea
                        className="w-full rounded-lg border border-[#D1D1D1]"
                        placeholder="Masukkan Feedback..."
                        name="feedback"
                        id="feedback"
                        rows="7"
                        value={data.feedback}
                        onChange={(e) => setData("feedback", e.target.value)}
                    ></textarea>
                </div>
                {/* <Link href={route("tugas-guru")}> */}
                <button
                    className="w-full bg-primary text-white font-medium text-xl rounded-lg py-2"
                    // onClick={handleSubmit}
                    type="submit"
                >
                    Submit
                </button>
                {/* </Link> */}
            </form>
        </MainGuruLayout>
    );
}
