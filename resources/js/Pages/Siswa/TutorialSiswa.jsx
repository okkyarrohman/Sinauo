import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { placeholderTutorial } from "../../../assets";
// import Cover1 from "../../../../storage/app/public/tutorial/cover/";
import { useEffect } from "react";
import { url } from "../../../assets/url";

export default function TutorialSiswa({ auth }) {
    const { tutorial } = usePage().props;

    useEffect(() => {
        console.log(tutorial);
    }, []);

    return (
        <MainLayout>
            <Head title="Tutorial" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">Tutorial Praktik</h1>
            <div className="grid grid-cols-3 justify-items-center gap-y-10">
                {tutorial.map((item, index) => {
                    return (
                        <a
                            href={item.sumber}
                            target="_blank"
                            key={index}
                            className="w-[19rem] h-full shadow-custom rounded-[1.25rem]"
                        >
                            <div className="h-full flex flex-col justify-between">
                                <div className="relative w-full h-36 overflow-hidden">
                                    <div className="absolute w-full h-full flex items-center justify-center  transition-transform duration-300 ease-in-out transform scale-100 hover:scale-125">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-16 h-16"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                                            />
                                        </svg>
                                    </div>
                                    <img
                                        className="h-36 w-full object-cover object-center rounded-t-[1.25rem]"
                                        src={`${url}tutorial/cover/${item.cover}`}
                                        alt="image materi"
                                    />
                                </div>
                                <div className="p-5">
                                    <h4 className="text-lg font-semibold line-clamp-2">
                                        {item.judul}
                                    </h4>
                                </div>
                                <div className="px-5 pb-5">
                                    <p className="text-sm">{item.sumber}</p>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </MainLayout>
    );
}
