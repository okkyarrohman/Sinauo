import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function EditReferensiGuru() {
    const { referensis } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        id: referensis.id,
        judul: referensis.judul,
        sumber: referensis.sumber,
        cover: referensis.cover,
        file: referensis.file,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("update.referensi"));
    };

    return (
        <MainGuruLayout>
            <Head title="Referensi" />
            <h1 className="font-semibold text-2xl mb-10">Edit Referensi</h1>
            <form className="w-4/5">
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="judul"
                    >
                        Judul Referensi
                    </label>
                    <TextInput
                        id="judul"
                        type="text"
                        name="judul"
                        placeholder="Masukkan Judul Referensi..."
                        className="w-full border-[#353535]"
                        isFocused={true}
                        value={data.judul}
                        onChange={(e) => setData("judul", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="sumber"
                    >
                        Sumber
                    </label>
                    <TextInput
                        id="sumber"
                        type="text"
                        name="sumber"
                        placeholder="Masukkan Sumber..."
                        className="w-full border-[#353535]"
                        value={data.sumber}
                        onChange={(e) => setData("sumber", e.target.value)}
                    />
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
                        File Referensi
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
