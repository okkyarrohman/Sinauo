import BackButton from "@/Components/GeneralComponents/BackButton";
import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function DetailHasilTugasSiswaGuru() {
    const head_title = ["Tahap", "Tanggal", "Hasil"];
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const data = [
        {
            tanggal: "22/11/2024",
            hasil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perferendis.",
        },
        {
            tanggal: "22/11/2024",
            hasil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perferendis.",
        },
        {
            tanggal: "22/11/2024",
            hasil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perferendis.",
        },
        {
            tanggal: "22/11/2024",
            hasil: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perferendis.",
        },
    ];

    const optionDropdown = ["Terima", "Tolak"];

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setSelectedValue(option);
        setIsOpen(false);
    };

    return (
        <MainGuruLayout>
            <Head title="Tugas" />
            <div className="mb-10">
                <BackButton />
            </div>
            <Table>
                <TableHead head={head_title} />
                <TableBody>
                    {data.map((item, index) => {
                        const incrementedStep = step + index;
                        return (
                            <TableRow key={index}>
                                <TableItem item={`Step ${incrementedStep}`} />
                                <TableItem item={item.tanggal} />
                                <TableItem item={item.hasil} />
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <h1 className="font-semibold text-2xl mt-10 mb-4">Konfirmasi</h1>
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
                    placeholder="Masukkan Jawaban..."
                    name="jawaban"
                    id="jawaban"
                    rows="7"
                    // value={data.jawaban}
                    // onChange={(e) => setData("jawaban", e.target.value)}
                ></textarea>
            </div>
            <Link href={route("tugas-guru")}>
                <button className="w-full bg-primary text-white font-medium text-xl rounded-lg py-2">
                    Submit
                </button>
            </Link>
        </MainGuruLayout>
    );
}
