import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function TambahTugasGuru() {
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        tenggat: "",
        step1: "",
        deskripsi1: "",
        step2: "",
        deskripsi3: "",
        step3: "",
        deskripsi3: "",
        step4: "",
        deskripsi4: "",
    });

    const handleSubmit = () => {
        post(route("store.tugas"));
    };

    return (
        <MainGuruLayout>
            <Head title="Tugas" />
            <h1 className="font-semibold text-2xl mb-10">Tambah Tugas</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="nama"
                    >
                        Tugas
                    </label>
                    <TextInput
                        id="nama"
                        type="text"
                        name="nama"
                        placeholder="Masukkan Nama Tugas..."
                        className="w-full border-[#353535]"
                        isFocused={true}
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="tenggat"
                    >
                        Tenggat Waktu
                    </label>
                    <TextInput
                        id="tenggat"
                        type="date"
                        name="tenggat"
                        placeholder="Masukkan Nama Materi..."
                        className="w-full border-[#353535]"
                        value={data.tenggat}
                        onChange={(e) => setData("tenggat", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="step1"
                    >
                        Step 1
                    </label>
                    <TextInput
                        id="step1"
                        type="text"
                        name="step1"
                        placeholder="Masukkan Step Pertama..."
                        className="w-full border-[#353535]"
                        value={data.step1}
                        onChange={(e) => setData("step1", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="deskripsi1"
                    >
                        Deskripsi
                    </label>
                    <textarea
                        className="w-full rounded-lg border border-[#D1D1D1]"
                        placeholder="Masukkan Deskripsi..."
                        name="deskripsi1"
                        id="deskripsi1"
                        rows="7"
                        value={data.deskripsi1}
                        onChange={(e) => setData("deskripsi1", e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="step2"
                    >
                        Step 2
                    </label>
                    <TextInput
                        id="step2"
                        type="text"
                        name="step2"
                        placeholder="Masukkan Step Kedua..."
                        className="w-full border-[#353535]"
                        value={data.step2}
                        onChange={(e) => setData("step2", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="deskripsi2"
                    >
                        Deskripsi
                    </label>
                    <textarea
                        className="w-full rounded-lg border border-[#D1D1D1]"
                        placeholder="Masukkan Deskripsi..."
                        name="deskripsi2"
                        id="deskripsi2"
                        rows="7"
                        value={data.deskripsi2}
                        onChange={(e) => setData("deskripsi2", e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="step3"
                    >
                        Step 3
                    </label>
                    <TextInput
                        id="step3"
                        type="text"
                        name="step3"
                        placeholder="Masukkan Step Ketiga..."
                        className="w-full border-[#353535]"
                        value={data.step3}
                        onChange={(e) => setData("step3", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="deskripsi3"
                    >
                        Deskripsi
                    </label>
                    <textarea
                        className="w-full rounded-lg border border-[#D1D1D1]"
                        placeholder="Masukkan Deskripsi..."
                        name="deskripsi3"
                        id="deskripsi3"
                        rows="7"
                        value={data.deskripsi3}
                        onChange={(e) => setData("deskripsi3", e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="step4"
                    >
                        Step 4
                    </label>
                    <TextInput
                        id="step4"
                        type="text"
                        name="step4"
                        placeholder="Masukkan Step Keempat..."
                        className="w-full border-[#353535]"
                        value={data.step4}
                        onChange={(e) => setData("step4", e.target.value)}
                    />
                </div>
                <div className="mb-12">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="deskripsi4"
                    >
                        Deskripsi
                    </label>
                    <textarea
                        className="w-full rounded-lg border border-[#D1D1D1]"
                        placeholder="Masukkan Jawaban..."
                        name="deskripsi4"
                        id="deskripsi4"
                        rows="7"
                        value={data.deskripsi4}
                        onChange={(e) => setData("deskripsi4", e.target.value)}
                    ></textarea>
                </div>
                <div className="flex gap-5 justify-end">
                    <Link href={route("tugas-guru")}>
                        <SecondaryButton text="Tutup" />
                    </Link>
                    {/* <Link href={route("tugas-guru")}> */}
                    <PrimaryButton text="Simpan" onClick={handleSubmit} />
                    {/* </Link> */}
                </div>
            </form>
        </MainGuruLayout>
    );
}
