import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function TambahMateriGuru() {
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        jumlah: "",
        deskripsi: "",
        cover: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        triggerAlert();
        post(route("store.materi"));
    };

    const triggerAlert = () => {
        Swal.fire({
            icon: "success",
            title: "Materi Berhasil Ditambahkan",
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
            <h1 className="font-semibold text-2xl mb-10">Tambah Materi</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="nama"
                    >
                        Nama Materi
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
                        htmlFor="jumlah"
                    >
                        Jumlah Konten
                    </label>
                    <TextInput
                        id="jumlah"
                        type="number"
                        name="jumlah"
                        placeholder="Masukkan Jumlah Konten..."
                        className="w-full border-[#353535]"
                        value={data.jumlah}
                        onChange={(e) => setData("jumlah", e.target.value)}
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
                <div className="mb-12">
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
