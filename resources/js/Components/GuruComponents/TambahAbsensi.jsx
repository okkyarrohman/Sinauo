import { useForm } from "@inertiajs/react";
import PrimaryButton from "../GeneralComponents/PrimaryButton";
import TextInput from "../TextInput";
import { useState } from "react";

export default function TambahAbsensi() {
    const { data, setData, post, processing, errors } = useForm({
        barcode: null,
    });

    const [edit, setEdit] = useState(false);

    const handleEditClick = () => {
        setEdit(!edit);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("store.absensi"));
    };

    return (
        <div className="p-7 bg-white rounded-[0.625rem] w-96">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between mb-6">
                    <h1 className="text-xl font-bold">Absensi</h1>
                    <p className="text-[#8A8A8A] font-bold">07 Juli 2024</p>
                </div>
                <div className="flex mb-6 items-center gap-4">
                    <label
                        className="block w-fit py-3 px-5 rounded-[0.625rem] bg-primary cursor-pointer"
                        htmlFor="barcode"
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
                            id="barcode"
                            type="file"
                            name="barcode"
                            className="hidden"
                            onChange={(e) =>
                                setData("barcode", e.target.files[0])
                            }
                        />
                    </label>
                    <p className="font-light text-sm line-clamp-1 w-44">
                        {data.barcode ? data.barcode.name : "Nama File"}
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    {edit ? (
                        <TextInput
                            id="link"
                            type="text"
                            name="link"
                            placeholder="Masukkan Link Absensi..."
                            className="w-full border-[#353535] text-sm font-semibold"
                            value={data.link}
                            onChange={(e) => setData("link", e.target.value)}
                        />
                    ) : (
                        <p className="text-sm font-semibold">
                            Belum Ada Link Absensi
                        </p>
                    )}
                    <button onClick={handleEditClick} type="button">
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
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>
                    </button>
                </div>
                <button
                    className="block mt-8 ml-auto w-fit py-2 px-4 rounded-[0.625rem] bg-primary text-white"
                    type="sumbit"
                >
                    Simpan
                </button>
            </form>
        </div>
    );
}
