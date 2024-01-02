import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function TambahReferensiGuru() {
    return (
        <MainLayout>
            <Head title="Referensi" />
            <h1 className="font-semibold text-2xl mb-10">Tambah Referensi</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="email"
                    >
                        Judul Referensi
                    </label>
                    <TextInput
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Masukkan Nama Materi..."
                        className="w-full border-[#353535]"
                        isFocused={true}
                        // value={data.email}
                        // onChange={(e) => setData("email", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="email"
                    >
                        Sumber
                    </label>
                    <TextInput
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Masukkan Nama Materi..."
                        className="w-full border-[#353535]"
                        // value={data.email}
                        // onChange={(e) => setData("email", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="foto"
                    >
                        Cover
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
                <div className="mb-12">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="foto"
                    >
                        File Referensi
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
                <div className="flex gap-5 justify-end">
                    <Link href={route("referensi-guru")}>
                        <SecondaryButton text="Tutup" />
                    </Link>
                    <Link href={route("referensi-guru")}>
                        <PrimaryButton text="Simpan" />
                    </Link>
                </div>
            </form>
        </MainLayout>
    );
}
