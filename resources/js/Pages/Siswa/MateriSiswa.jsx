import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { imageKonten1, imageKonten2, imageKonten3 } from "../../../assets";

export default function MateriSiswa({ auth }) {
    const data = [
        {
            image: imageKonten1,
            judul: "Pemrograman React",
            total_materi: 16,
            presentase: 100,
        },
        {
            image: imageKonten1,
            judul: "Deep AI Learning To Improve Mobility of Web3 Website With Keras and TensorFlow",
            total_materi: 16,
            presentase: 40,
        },
        {
            image: imageKonten2,
            judul: "Pemrograman JavaScript ES6",
            total_materi: 6,
            presentase: 10,
        },
        {
            image: imageKonten3,
            judul: "Object Oriented Programming in PHP",
            total_materi: 25,
            presentase: 90,
        },
        {
            image: imageKonten3,
            judul: "Object Oriented Programming in PHP",
            total_materi: 25,
            presentase: 40,
        },
    ];

    return (
        <MainLayout>
            <Head title="Materi" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">
                Materi Pembelajaran
            </h1>
            <div className="grid grid-cols-3 justify-items-center gap-y-10">
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="w-[19rem] h-full shadow-custom rounded-[1.25rem]"
                        >
                            <div className="h-full flex flex-col justify-between">
                                <img
                                    className="h-36 w-full object-cover object-center rounded-t-[1.25rem]"
                                    src={item.image}
                                    alt="image materi"
                                />
                                <div className="p-5">
                                    <div className="flex gap-1 items-center mb-4">
                                        <div className="bg-green-500 size-5 rounded-full"></div>
                                        <p className="font-medium">
                                            {item.total_materi}x Materi
                                        </p>
                                    </div>
                                    <h4 className="text-lg font-semibold line-clamp-2">
                                        {item.judul}
                                    </h4>
                                </div>
                                <div className="px-5 pb-5">
                                    <div className="relative mb-7">
                                        <div className="bg-[#D9D9D9] w-full h-4 rounded-3xl"></div>
                                        <div
                                            className={`bg-[#F9A825] h-4 rounded-3xl absolute top-0 text-xs font-semibold text-center`}
                                            style={{
                                                width: `${item.presentase}%`,
                                            }}
                                        >
                                            {item.presentase}%
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Link href={route("detail-materi")}>
                                            <button className="py-1 px-5 rounded-full bg-primary hover:bg-primary-dark text-sm text-white font-medium">
                                                Detail
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </MainLayout>
    );
}
