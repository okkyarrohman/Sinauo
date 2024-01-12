import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { placeholderReferensi, placeholderTutorial } from "../../../assets";
import { useEffect } from "react";
import { url } from "../../../assets/url";

export default function ReferensiSiswa({ auth }) {
    const { referensi } = usePage().props;

    useEffect(() => {
        console.log(referensi);
    }, []);

    return (
        <MainLayout>
            <Head title="Referensi" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">Referensi Proyek</h1>
            <div className="grid grid-cols-3 justify-items-center gap-y-10">
                {referensi.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="w-[19rem] h-full shadow-custom rounded-[1.25rem]"
                        >
                            <div className="h-full flex flex-col justify-between">
                                <Link
                                    className="mb-2"
                                    href={route("lihat-referensi", item.id)}
                                >
                                    <img
                                        className="h-36 w-full object-cover object-center rounded-t-[1.25rem]"
                                        src={`${url}referensi/cover/${item.cover}`}
                                        alt="image materi"
                                    />

                                    <div className="px-5 pt-5 pb-3">
                                        <h4 className="text-lg font-semibold line-clamp-2">
                                            {item.judul}
                                        </h4>
                                    </div>
                                    <div className="px-5">
                                        <p className="text-sm line-clamp-2">
                                            {item.sumber}
                                        </p>
                                    </div>
                                </Link>
                                <div className="px-5 pb-5 flex justify-end">
                                    <button className="w-fit">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="29"
                                            height="29"
                                            viewBox="0 0 29 29"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.04163 24.1667H22.9583V21.75H6.04163V24.1667ZM22.9583 10.875H18.125V3.625H10.875V10.875H6.04163L14.5 19.3333L22.9583 10.875Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </MainLayout>
    );
}
