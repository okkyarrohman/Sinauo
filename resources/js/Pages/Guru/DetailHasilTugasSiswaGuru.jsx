import BackButton from "@/Components/GeneralComponents/BackButton";
import Table from "@/Components/GeneralComponents/Table";
import TableBody from "@/Components/GeneralComponents/TableBody";
import TableHead from "@/Components/GeneralComponents/TableHead";
import TableItem from "@/Components/GeneralComponents/TableItem";
import TableRow from "@/Components/GeneralComponents/TableRow";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { url } from "../../../assets/url";
import Swal from "sweetalert2";
import CheckBoxKonfirmasiTugas from "@/Components/GuruComponents/CheckBoxKonfirmasiTugas";
import DropdownKonfirmasiTugas from "@/Components/GuruComponents/DropdownKonfirmasiTugas";

export default function DetailHasilTugasSiswaGuru() {
    const { tugas } = usePage().props;

    const userId = localStorage.getItem("USER_ID");
    const tugasId = localStorage.getItem("TUGAS_ID");

    const filteredTugas = tugas.filter(
        (item) => item.tugas_id == tugasId && item.user_id == userId
    );

    const { data, setData, post, processing, error } = useForm({
        id: filteredTugas[0].id,
        tugas_id: filteredTugas[0].tugas_id,
        konfirmasi1: filteredTugas[0].konfirmasi1,
        konfirmasi2: filteredTugas[0].konfirmasi2,
        konfirmasi3: filteredTugas[0].konfirmasi3,
        konfirmasi4: filteredTugas[0].konfirmasi4,
        feedback: filteredTugas[0].feedback,
    });

    const head_title = ["Tahap", "Tanggal", "Hasil", "Konfirmasi"];
    // const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    // const optionDropdown = ["Terima", "Tolak"];

    // const handleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

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
        // console.log("TUGAS ISI :", tugas);
        // console.log("TUGAS ISI TERFILTER :", filteredTugas);
        console.log(data.konfirmasi1);
    }, []);

    return (
        <MainGuruLayout>
            <Head title="Tugas" />
            <div className="mb-10">
                <BackButton />
            </div>
            <form onSubmit={handleSubmit}>
                <Table>
                    <TableHead head={head_title} />
                    <TableBody>
                        {filteredTugas.map((item, index) => {
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
                                            className="block w-72"
                                            wrap
                                        />
                                        <TableItem
                                            item={
                                                <DropdownKonfirmasiTugas
                                                    id="konfirmasi1"
                                                    selectedValue={
                                                        data.konfirmasi1
                                                    }
                                                    onSelect={(value) =>
                                                        setData(
                                                            "konfirmasi1",
                                                            value
                                                        )
                                                    }
                                                />
                                            }
                                        />
                                    </TableRow>
                                    <TableRow>
                                        <TableItem item={`Step 2`} />
                                        <TableItem item={item.updated_at} />
                                        <TableItem
                                            item={
                                                item.answer2 === null ? (
                                                    "Belum Terjawab"
                                                ) : (
                                                    <a
                                                        href={`${url}tugas/answer2/${item.answer2}`}
                                                        target="_blank"
                                                        className="text-primary block w-72 overflow-ellipsis overflow-hidden"
                                                    >
                                                        {item.answer2}
                                                    </a>
                                                )
                                            }
                                        />
                                        <TableItem
                                            item={
                                                <DropdownKonfirmasiTugas
                                                    id="konfirmasi2"
                                                    selectedValue={
                                                        data.konfirmasi2
                                                    }
                                                    onSelect={(value) =>
                                                        setData(
                                                            "konfirmasi2",
                                                            value
                                                        )
                                                    }
                                                />
                                            }
                                        />
                                    </TableRow>
                                    <TableRow>
                                        <TableItem item={`Step 3`} />
                                        <TableItem item={item.updated_at} />
                                        <TableItem
                                            item={
                                                item.answer3 === null ? (
                                                    "Belum Terjawab"
                                                ) : (
                                                    <a
                                                        href={`${url}tugas/answer3/${item.answer3}`}
                                                        target="_blank"
                                                        className="text-primary block w-72 overflow-ellipsis overflow-hidden"
                                                    >
                                                        {item.answer3}
                                                    </a>
                                                )
                                            }
                                        />
                                        <TableItem
                                            item={
                                                <DropdownKonfirmasiTugas
                                                    id="konfirmasi3"
                                                    selectedValue={
                                                        data.konfirmasi3
                                                    }
                                                    onSelect={(value) =>
                                                        setData(
                                                            "konfirmasi3",
                                                            value
                                                        )
                                                    }
                                                />
                                            }
                                        />
                                    </TableRow>
                                    <TableRow>
                                        <TableItem item={`Step 4`} />
                                        <TableItem item={item.updated_at} />
                                        <TableItem
                                            item={
                                                item.answer4 === null ? (
                                                    "Belum Terjawab"
                                                ) : (
                                                    <a
                                                        href={`${url}tugas/answer4/${item.answer4}`}
                                                        target="_blank"
                                                        className="text-primary block w-72 overflow-ellipsis overflow-hidden"
                                                    >
                                                        {item.answer4}
                                                    </a>
                                                )
                                            }
                                        />
                                        <TableItem
                                            item={
                                                <DropdownKonfirmasiTugas
                                                    id="konfirmasi4"
                                                    selectedValue={
                                                        data.konfirmasi4
                                                    }
                                                    onSelect={(value) =>
                                                        setData(
                                                            "konfirmasi4",
                                                            value
                                                        )
                                                    }
                                                />
                                            }
                                        />
                                    </TableRow>
                                </>
                            );
                        })}
                    </TableBody>
                </Table>
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
                <button
                    className="w-full bg-primary text-white font-medium text-xl rounded-lg py-2"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </MainGuruLayout>
    );
}
