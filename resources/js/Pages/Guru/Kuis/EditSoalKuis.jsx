import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function SoalKuis() {
    const { soal } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        id: soal.id,
        kategori_kuis_id: soal.kategori_kuis_id,
        soal: soal.soal,
        gambar: soal.gambar,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        triggerAlert();
        post(route("update.soal"));
    };

    const triggerAlert = () => {
        Swal.fire({
            icon: "success",
            title: "Soal Berhasil Diedit",
            showConfirmButton: false,
            customClass: {
                title: "block text-lg w-3/4 text-center mx-auto",
            },
            timer: 1000,
        });
    };

    return (
        <MainGuruLayout>
            <Head title="Soal Kuis" />
            <h1 className="font-semibold text-2xl mb-10">Edit Soal Kuis</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="kategori_kuis_id"
                    >
                        Nama Kategori
                    </label>
                    <div className="relative">
                        <select
                            className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full`}
                            id="kategori_kuis_id"
                            name="kategori_kuis_id"
                            type="text"
                            value={data.kategori_kuis_id}
                            // onChange={(e) => handleChange(e)}
                            onChange={(e) =>
                                setData("kategori_kuis_id", e.target.value)
                            }
                        >
                            <option value="">{soal.kategori.kuis}</option>
                            {/* {soal.map((items, index) => (
                                <option
                                    className="capitalize"
                                    key={index}
                                    value={items.id}
                                >
                                    {items.kuis}
                                </option>
                            ))} */}
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="soal"
                    >
                        Pertanyaan
                    </label>
                    <textarea
                        className="w-full rounded-lg border border-[#D1D1D1]"
                        placeholder="Masukkan Pertanyaan..."
                        name="soal"
                        id="soal"
                        rows="7"
                        value={data.soal}
                        onChange={(e) => setData("soal", e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-12">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="gambar"
                    >
                        Gambar
                    </label>
                    <div className="flex items-center gap-3">
                        <label
                            className="block w-fit py-3 px-5 rounded-[0.625rem] bg-primary cursor-pointer"
                            htmlFor="gambar"
                        >
                            <span className="text-white flex items-center gap-1">
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
                                Pilih File
                            </span>
                            <input
                                id="gambar"
                                type="file"
                                name="gambar"
                                className="hidden"
                                accept=".png, .jpg, .jpeg"
                                onChange={(e) =>
                                    setData("gambar", e.target.files[0])
                                }
                            />
                        </label>
                        <p className="font-light text-sm">
                            {data.gambar ? data.gambar.name : "Nama File"}
                        </p>
                    </div>
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
