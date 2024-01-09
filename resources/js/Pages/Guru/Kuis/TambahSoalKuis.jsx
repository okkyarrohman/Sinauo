import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import Swal from "sweetalert2";



export default function SoalKuis() {
    const { kategori } = usePage().props;
    useEffect(() => {
        console.log(kategori);
    }, []);

    const { data, setData, post, processing, errors } = useForm({
        kategori_kuis_id: "",
        soal: "",
        gambar: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        triggerAlert();
        post(route("store.soal"));
    };

    const triggerAlert = () => {
        Swal.fire({
            icon: "success",
            title: "Soal Berhasil Ditambahkan",
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
            <h1 className="font-semibold text-2xl mb-10">Tambah Soal Kuis</h1>
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
                            onChange={(e) => setData("kategori_kuis_id", e.target.value)}
                        >
                            <option value="">Pilih Kategori</option>
                            {kategori?.map((items, index) => (
                            <option
                                className="capitalize"
                                key={index}
                                value={items.id}
                            >
                                {items.kuis}
                            </option>
                            ))}
                        </select>
                        {/* <svg
                            className="absolute w-5 h-5 top-2 right-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                fill="black"
                            />
                        </svg> */}
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
                            {data.cover ? data.cover.name : "Nama File"}
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
