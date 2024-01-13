import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function EditOpsiKuis() {
    const { opsi } = usePage().props;
    useEffect(() => {
        console.log(opsi);
    }, []);

    const { data, setData, post, processing, errors } = useForm({
        id: opsi.id,
        soal_id: opsi.soal_id,
        opsi: opsi.opsi,
        point: opsi.point,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        triggerAlert();
        post(route("update.opsi"));
    };

    const triggerAlert = () => {
        Swal.fire({
            icon: "success",
            title: "Opsi Berhasil Diedit",
            showConfirmButton: false,
            customClass: {
                title: "block text-lg w-3/4 text-center mx-auto",
            },
            timer: 1000,
        });
    };

    return (
        <MainGuruLayout>
            <Head title="Opsi Kuis" />
            <h1 className="font-semibold text-2xl mb-10">Edit Opsi Kuis</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="kategori_kuis_id"
                    >
                        Pertanyaan
                    </label>
                    <div className="relative">
                        <select
                            className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full`}
                            id="soal_id"
                            name="soal_id"
                            type="text"
                            value={data.soal_id}
                            // onChange={(e) => handleChange(e)}
                            onChange={(e) => setData("soal_id", e.target.value)}
                        >
                            <option value="">{opsi.soal.soal}</option>
                            {/* {soal?.map((items, index) => (
                                <option
                                    className="capitalize"
                                    key={index}
                                    value={items?.id}
                                >
                                    {items.soal}
                                </option>
                            ))} */}
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="opsi"
                    >
                        Opsi Jawaban
                    </label>
                    <textarea
                        className="w-full rounded-lg border border-[#D1D1D1]"
                        placeholder="Masukkan Opsi Jawaban..."
                        name="opsi"
                        id="opsi"
                        rows="7"
                        value={data.opsi}
                        onChange={(e) => setData("opsi", e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-12">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="point"
                    >
                        Poin
                    </label>
                    <TextInput
                        id="point"
                        type="number"
                        name="point"
                        placeholder="Masukkan Poin..."
                        className="w-full border-[#353535]"
                        value={data.point}
                        onChange={(e) => setData("point", e.target.value)}
                    />
                </div>
                <div className="flex gap-5 justify-end">
                    <Link href={route("referensi-guru")}>
                        <SecondaryButton text="Tutup" />
                    </Link>
                    {/* <Link href={route("referensi-guru")}> */}
                    <PrimaryButton text="Simpan" onClick={handleSubmit} />
                    {/* </Link> */}
                </div>
            </form>
        </MainGuruLayout>
    );
}
