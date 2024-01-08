import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function EditKategoriKuis() {
    const { kategori } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        id: kategori.id,
        kuis: kategori.kuis,
        tenggat: kategori.tenggat,
        waktu: kategori.waktu,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        triggerAlert();
        post(route("update.kategori"));
    };

    const triggerAlert = () => {
        Swal.fire({
            icon: "success",
            title: "Kategori Berhasil Diedit",
            showConfirmButton: false,
            customClass: {
                title: "block text-lg w-3/4 text-center mx-auto",
            },
            timer: 1000,
        });
    };

    return (
        <MainGuruLayout>
            <Head title="Kategori Kuis" />
            <h1 className="font-semibold text-2xl mb-10">Edit Kategori Kuis</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="kuis"
                    >
                        Nama Kuis
                    </label>
                    <TextInput
                        id="kuis"
                        type="text"
                        name="kuis"
                        placeholder="Masukkan Nama Kuis..."
                        className="w-full border-[#353535]"
                        isFocused={true}
                        value={data.kuis}
                        onChange={(e) => setData("kuis", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="tenggat"
                    >
                        Tenggat
                    </label>
                    <TextInput
                        id="tenggat"
                        type="date"
                        name="tenggat"
                        placeholder="Masukkan Tenggat..."
                        className="w-full border-[#353535]"
                        value={data.tenggat}
                        onChange={(e) => setData("tenggat", e.target.value)}
                    />
                </div>
                <div className="mb-12">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="waktu"
                    >
                        Waktu
                    </label>
                    <TextInput
                        id="waktu"
                        type="number"
                        name="waktu"
                        placeholder="Masukkan Waktu..."
                        className="w-full border-[#353535]"
                        value={data.waktu}
                        onChange={(e) => setData("waktu", e.target.value)}
                    />
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
