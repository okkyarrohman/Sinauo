import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function TambahSubmateriGuru() {


    const { materi } = usePage().props;
    useEffect(() => {
        console.log(materi);
    }, []);

    const { data, setData, post, processing, errors } = useForm({
        materi_id: "",
        nama: "",
        deskripsi: "",
        cover: null,
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        triggerAlert();
        post(route("store.submateri"));
    };

    const triggerAlert = () => {
        Swal.fire({
            icon: "success",
            title: "Submateri Berhasil Ditambahkan",
            showConfirmButton: false,
            customClass: {
                title: "block text-lg w-3/4 text-center mx-auto",
            },
            timer: 1000,
        });
    };

    return (
        <MainGuruLayout>
            <Head title="Materi" />
            <h1 className="font-semibold text-2xl mb-10">Tambah Submateri</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="materi_id"
                    >
                        Nama Materi
                    </label>
                    <div className="relative">

                        <select
                            className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full`}
                            id="materi_id"
                            name="materi_id"
                            type="text"
                            value={data.materi_id}
                            // onChange={(e) => handleChange(e)}
                            onChange={(e) => setData("materi_id", e.target.value)}
                        >
                            <option value="">Pilih Materi</option>
                            {materi?.map((items, index) => (
                            <option
                                className="capitalize"
                                key={index}
                                value={items.id}
                            >
                                {items.nama}
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
                        htmlFor="nama"
                    >
                        Nama Submateri
                    </label>
                    <TextInput
                        id="nama"
                        type="text"
                        name="nama"
                        placeholder="Masukkan Nama Materi..."
                        className="w-full border-[#353535]"
                        isFocused={true}
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="deskripsi"
                    >
                        Deskripsi
                    </label>
                    <textarea
                        className="w-full rounded-lg border border-[#D1D1D1]"
                        placeholder="Masukkan Deskripsi..."
                        name="deskripsi"
                        id="deskripsi"
                        rows="7"
                        value={data.deskripsi}
                        onChange={(e) => setData("deskripsi", e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="cover"
                    >
                        Cover
                    </label>
                    <div className="flex items-center gap-3">
                        <label
                            className="block w-fit py-3 px-5 rounded-[0.625rem] bg-primary cursor-pointer"
                            htmlFor="cover"
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
                                id="cover"
                                type="file"
                                name="cover"
                                className="hidden"
                                accept=".png, .jpg, .jpeg"
                                onChange={(e) =>
                                    setData("cover", e.target.files[0])
                                }
                            />
                        </label>
                        <p className="font-light text-sm">
                            {data.cover ? data.cover.name : "Nama File"}
                        </p>
                    </div>
                </div>
                <div className="mb-12">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="file"
                    >
                        File
                    </label>
                    <div className="flex items-center gap-3">
                        <label
                            className="block w-fit py-3 px-5 rounded-[0.625rem] bg-primary cursor-pointer"
                            htmlFor="file"
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
                                id="file"
                                type="file"
                                name="file"
                                className="hidden"
                                accept=".pdf"
                                onChange={(e) =>
                                    setData("file", e.target.files[0])
                                }
                            />
                        </label>
                        <p className="font-light text-sm">
                            {data.file ? data.file.name : "Nama File"}
                        </p>
                    </div>
                </div>
                <div className="flex gap-5 justify-end">
                    <Link href={route("materi-guru")}>
                        <SecondaryButton text="Tutup" />
                    </Link>
                    {/* <Link href={route("create.submateri")}> */}
                    <PrimaryButton text="Simpan" onClick={handleSubmit} />
                    {/* </Link> */}
                </div>
            </form>
        </MainGuruLayout>
    );
}
