import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function TambahTugasGuru() {
    return (
        <MainGuruLayout>
            <Head title="Tugas" />
            <h1 className="font-semibold text-2xl mb-10">Tambah Tugas</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="email"
                    >
                        Tugas
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
                        Tenggat Waktu
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
                        Step 1
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
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="email"
                    >
                        Step 2
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
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="email"
                    >
                        Step 3
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
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="email"
                    >
                        Step 4
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
                <div className="flex gap-5 justify-end">
                    <Link href={route("tugas-guru")}>
                        <SecondaryButton text="Tutup" />
                    </Link>
                    <Link href={route("tugas-guru")}>
                        <PrimaryButton text="Simpan" />
                    </Link>
                </div>
            </form>
        </MainGuruLayout>
    );
}
