import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import TextInput from "@/Components/TextInput";
import MainGuruLayout from "@/Layouts/MainGuruLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function TambahSiswaGuru() {
    const { siswa } = usePage().props;

    const { data, setData, post, processing, success } = useForm({
        id: siswa.id,
        name: siswa.name,
        email: siswa.email,
        password: siswa.password,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        triggerAlert();
        post(route("update.siswa"));
    };

    const [passVisible, setPassVisible] = useState(false);

    const handlePassVisible = () => {
        setPassVisible(!passVisible);
    };

    const triggerAlert = () => {
        Swal.fire({
            icon: "success",
            title: "Data Siswa Berhasil Diedit",
            showConfirmButton: false,
            customClass: {
                title: "block text-lg w-3/4 text-center mx-auto",
            },
            timer: 1000,
        });
    };

    return (
        <MainGuruLayout>
            <Head title="Data Siswa" />
            <h1 className="font-semibold text-2xl mb-10">Tambah Siswa</h1>
            <form className="w-4/5">
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
                        placeholder="Masukkan Nama Siswa..."
                        className="w-full border-[#353535]"
                        isFocused={true}
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
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
                        placeholder="Masukkan Email Siswa..."
                        className="w-full border-[#353535]"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                </div>
                <div className="mb-12">
                    <label
                        className="block text-lg font-semibold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <TextInput
                            id="password"
                            type={passVisible ? "text" : "password"}
                            name="password"
                            placeholder="Masukkan Password Siswa..."
                            className="w-full border-[#353535]"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <button
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            type="button"
                            onClick={handlePassVisible}
                        >
                            {passVisible ? (
                                <svg
                                    className="w-5 h-5 fill-current text-neutral-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path d="M4.4955 7.44088C3.54724 8.11787 2.77843 8.84176 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C13.2958 19 14.4799 18.8108 15.5523 18.4977L13.8895 16.8349C13.2936 16.9409 12.6638 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366C4.23754 10.2097 4.99526 9.50784 5.93214 8.87753L4.4955 7.44088Z"></path>{" "}
                                        <path d="M8.53299 11.4784C8.50756 11.6486 8.49439 11.8227 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5C12.1716 15.5 12.3458 15.4868 12.516 15.4614L8.53299 11.4784Z"></path>{" "}
                                        <path d="M15.4661 12.4471L11.5473 8.52829C11.6937 8.50962 11.8429 8.5 11.9944 8.5C13.9274 8.5 15.4944 10.067 15.4944 12C15.4944 12.1515 15.4848 12.3007 15.4661 12.4471Z"></path>{" "}
                                        <path d="M18.1118 15.0928C19.0284 14.4702 19.7715 13.7805 20.3413 13.1634C20.9657 12.4872 20.9657 11.5128 20.3413 10.8366C18.8117 9.18002 16.0331 7 12 7C11.3594 7 10.7505 7.05499 10.1732 7.15415L8.50483 5.48582C9.5621 5.1826 10.7272 5 12 5C16.8112 5 20.0833 7.60905 21.8107 9.47978C23.1426 10.9222 23.1426 13.0778 21.8107 14.5202C21.2305 15.1486 20.476 15.8603 19.5474 16.5284L18.1118 15.0928Z"></path>{" "}
                                        <path d="M2.00789 3.42207C1.61736 3.03155 1.61736 2.39838 2.00789 2.00786C2.39841 1.61733 3.03158 1.61733 3.4221 2.00786L22.0004 20.5862C22.391 20.9767 22.391 21.6099 22.0004 22.0004C21.6099 22.3909 20.9767 22.3909 20.5862 22.0004L2.00789 3.42207Z"></path>{" "}
                                    </g>
                                </svg>
                            ) : (
                                <svg
                                    className="w-5 h-5 fill-current text-neutral-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11.9944 15.5C13.9274 15.5 15.4944 13.933 15.4944 12C15.4944 10.067 13.9274 8.5 11.9944 8.5C10.0614 8.5 8.49439 10.067 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5ZM11.9944 13.4944C11.1691 13.4944 10.5 12.8253 10.5 12C10.5 11.1747 11.1691 10.5056 11.9944 10.5056C12.8197 10.5056 13.4888 11.1747 13.4888 12C13.4888 12.8253 12.8197 13.4944 11.9944 13.4944Z"
                                        ></path>{" "}
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 5C7.18879 5 3.9167 7.60905 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C16.8112 19 20.0833 16.391 21.8107 14.5202C23.1426 13.0778 23.1426 10.9222 21.8107 9.47978C20.0833 7.60905 16.8112 5 12 5ZM3.65868 10.8366C5.18832 9.18002 7.9669 7 12 7C16.0331 7 18.8117 9.18002 20.3413 10.8366C20.9657 11.5128 20.9657 12.4872 20.3413 13.1634C18.8117 14.82 16.0331 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366Z"
                                        ></path>{" "}
                                    </g>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex gap-5 justify-end">
                    <Link href={route("data-siswa")}>
                        <SecondaryButton text="Tutup" />
                    </Link>
                    {/* <Link href={route("data-siswa")}> */}
                    <PrimaryButton text="Simpan" onClick={handleSubmit} />
                    {/* </Link> */}
                </div>
            </form>
        </MainGuruLayout>
    );
}
