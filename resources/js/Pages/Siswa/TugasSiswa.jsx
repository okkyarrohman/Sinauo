import MainLayout from "@/Layouts/MainLayout";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import { Head, Link, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import { iconFeedback, iconSubmitKuis } from "../../../assets";
import ProgressBar from "@/Components/GeneralComponents/ProgressBar";
import { useEffect } from "react";

export default function TugasSiswa({ auth }) {
    const { tugas } = usePage().props;

    const triggerAlert = (feedback) => {
        Swal.fire({
            imageUrl: iconFeedback,
            imageWidth: 125,
            imageHeight: 125,
            title: "Feedback",
            html: `<p class="text-base">${feedback}</p>`,
            confirmButtonText: "Oke",
            customClass: {
                title: "block text-lg w-3/4 text-center mx-auto",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                close;
            }
        });
    };

    useEffect(() => {
        console.log(tugas);
    }, []);

    return (
        <MainLayout>
            <Head title="Tugas" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">Tugas</h1>
            {tugas.map((item, index) => {
                const totalAnswers = [
                    "answer1",
                    "answer2",
                    "answer3",
                    "answer4",
                ];
                const filledAnswers = totalAnswers.filter(
                    (answer) => item[answer]
                );

                const percentage =
                    (filledAnswers.length / totalAnswers.length) * 100;

                return (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-2xl mb-4 flex items-center"
                    >
                        <p>{index + 1}</p>
                        <div className="flex items-center justify-between w-[92%] ml-auto">
                            <div className="w-28 relative">
                                <p className="break-words text-ellipsis whitespace-nowrap overflow-hidden hover:text-wrap">
                                    {item.nama}
                                </p>
                            </div>
                            {/* <p>{item.tugas.tenggat}</p> */}
                            <div className="w-[20%]">
                                <ProgressBar progres={percentage} />
                            </div>
                            <p>
                                {item.konfirmasi === null
                                    ? "Belum Dikonfirmasi"
                                    : item.konfirmasi}
                            </p>
                            <Link href={route("detail-tugas", item.id)}>
                                <button className="font-bold py-2 px-5 bg-primary text-white rounded-[0.625rem]">
                                    Detail
                                </button>
                            </Link>
                            <button
                                className={`font-bold py-2 px-5 text-white rounded-[0.625rem] ${
                                    item.feedback === null
                                        ? "bg-primary-light"
                                        : "bg-primary"
                                }`}
                                onClick={() => triggerAlert(item.feedback)}
                                disabled={item.feedback === null}
                            >
                                Feedback
                            </button>
                        </div>
                    </div>
                );
            })}
        </MainLayout>
    );
}
