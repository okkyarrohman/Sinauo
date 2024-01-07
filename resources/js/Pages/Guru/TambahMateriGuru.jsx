import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function TambahMateriGuru() {
    return (
        <MainGuruLayout>
            <Head title="Materi" />
            <h1 className="font-semibold text-2xl mb-10">Tambah Materi</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="email"
                    >
                        Nama Materi
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
                        Jumlah Konten
                    </label>
                    <TextInput
                        id="email"
                        type="number"
                        name="email"
                        placeholder="Masukkan Jumlah Konten..."
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
                        Deskripsi
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
                <div className="mb-12">
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
                <div className="flex gap-5 justify-end">
                    <Link href={route("materi-guru")}>
                        <SecondaryButton text="Tutup" />
                    </Link>
                    <Link href={route("create.submateri")}>
                        <PrimaryButton text="Next" />
                    </Link>
                </div>
            </form>
        </MainGuruLayout>
    );
}
