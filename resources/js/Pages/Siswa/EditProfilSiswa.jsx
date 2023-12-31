import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { imageKonten1 } from "../../../assets";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";

export default function EditProfilSiswa() {
    const user = usePage().props.auth.user;

    const { data, setData, patch, processing, errors, reset } = useForm({
        name: user.name,
        email: user.email,
    });

    const submitEditProfil = () => {
        patch(route("edit-profil.update"));
    };

    return (
        <MainLayout>
            <Head title="Profil" />
            <section className="w-4/5">
                <div className="flex justify-between mb-10">
                    <h1 className="font-semibold text-3xl">Edit Profil</h1>
                    <img
                        className="size-28 rounded-full"
                        src={imageKonten1}
                        alt="foto profil"
                    />
                </div>
                <form>
                    <div className="mb-4">
                        <label
                            className="block text-lg font-semibold mb-2"
                            htmlFor="name"
                        >
                            Nama Siswa
                        </label>
                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Masukkan name..."
                            className="w-full border-[#353535]"
                            isFocused={true}
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-lg font-semibold mb-2"
                            htmlFor="ttl"
                        >
                            Tempat dan Tanggal Lahir
                        </label>
                        <TextInput
                            id="ttl"
                            type="text"
                            name="ttl"
                            placeholder="Masukkan Tempat dan Tanggal Lahir..."
                            className="w-full border-[#353535]"
                            // value={data.ttl}
                            // onChange={(e) => setData("ttl", e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-lg font-semibold mb-2"
                            htmlFor="alamat"
                        >
                            Alamat
                        </label>
                        <TextInput
                            id="alamat"
                            type="text"
                            name="alamat"
                            placeholder="Masukkan Alamat..."
                            className="w-full border-[#353535]"
                            // value={data.alamat}
                            // onChange={(e) => setData("alamat", e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-lg font-semibold mb-2"
                            htmlFor="foto"
                        >
                            Foto Profil (.jpg)
                        </label>
                        <div className="flex items-center gap-3">
                            <label
                                className="block w-fit py-3 px-5 rounded-[0.625rem] bg-primary cursor-pointer"
                                htmlFor="foto"
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
                                    id="foto"
                                    type="file"
                                    name="foto"
                                    className="hidden"
                                />
                            </label>
                            <p className="font-light text-sm">nama file</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-lg font-semibold mb-2"
                            htmlFor="email"
                        >
                            No. Telepon
                        </label>
                        <TextInput
                            id="no_telp"
                            type="number"
                            name="no_telp"
                            placeholder="Masukkan No. Telepon..."
                            className="w-full border-[#353535]"
                            // value={data.no_telp}
                            // onChange={(e) => setData("no_telp", e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-lg font-semibold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Masukkan Email..."
                            className="w-full border-[#353535]"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end gap-5 mt-16">
                        <Link
                            className="rounded-[0.625rem] py-3 px-12 text-lg font-bold border border-black"
                            href={route("dashboard")}
                            disabled={processing}
                        >
                            Tutup
                        </Link>
                        <PrimaryButton
                            text="Simpan"
                            disabled={processing}
                            onClick={submitEditProfil}
                        />
                    </div>
                </form>
            </section>
        </MainLayout>
    );
}
