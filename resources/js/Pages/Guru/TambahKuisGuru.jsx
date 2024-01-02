import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function TambahKuisGuru() {
    const [number, setNumber] = useState(1);

    const handleNumberChange = (newNumber) => {
        setNumber(newNumber);
    };

    return (
        <MainLayout>
            <Head title="Kuis" />
            <h1 className="font-semibold text-2xl mb-10">Tambah Kuis</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="email"
                    >
                        Kuis
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
                        Jumlah Soal
                    </label>
                    <TextInput
                        id="email"
                        type="number"
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
                        htmlFor="email"
                    >
                        Tanggal
                    </label>
                    <TextInput
                        id="email"
                        type="date"
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
                        htmlFor="email"
                    >
                        Waktu
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
                        htmlFor="email"
                    >
                        Nomor Soal
                    </label>
                    <div className="flex items-center gap-4">
                        <button
                            className={`${number === 1 ? "text-gray-300" : ""}`}
                            type="button"
                            disabled={number === 1}
                            onClick={() => handleNumberChange(number - 1)}
                        >
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
                                    d="M15.75 19.5 8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                        <span className="font-semibold text-xl">{number}</span>
                        <button
                            type="button"
                            onClick={() => handleNumberChange(number + 1)}
                        >
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
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="email"
                    >
                        Pertanyaan
                    </label>
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
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="foto"
                    >
                        Gambar (Opsional)
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
                        Opsi A
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
                        htmlFor="email"
                    >
                        Opsi B
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
                        htmlFor="email"
                    >
                        Opsi C
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
                        htmlFor="email"
                    >
                        Opsi D
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
                        htmlFor="email"
                    >
                        Opsi E
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
                <div className="mb-12">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="email"
                    >
                        Jawaban Benar
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
                <div className="flex gap-5 justify-end">
                    <Link href={route("kuis-guru")}>
                        <SecondaryButton text="Tutup" />
                    </Link>
                    <Link href={route("kuis-guru")}>
                        <PrimaryButton text="Simpan" />
                    </Link>
                </div>
            </form>
        </MainLayout>
    );
}
