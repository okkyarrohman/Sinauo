import MainLayout from "@/Layouts/MainLayout";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import { Head, Link, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import { iconFeedback, iconSubmitKuis } from "../../../assets";
import ProgressBar from "@/Components/GeneralComponents/ProgressBar";
import { useEffect } from "react";

export default function TugasSiswa({ auth }) {
    const { tugas, tugasResult } = usePage().props;

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

    const isTenggatPassed = (deadline) => {
        const currentDateTime = new Date();
        const tenggatDateTime = new Date(deadline);

        return currentDateTime.getTime() >= tenggatDateTime.getTime();
    };

    useEffect(() => {
        console.log("Tugas", tugas);
        console.log("Tugas Result", tugasResult);
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
                const userTugasResult = item.tugas_result.filter(
                    (resultItem) => resultItem.user_id == auth.user.id
                );

                let percentage = 0;
                if (userTugasResult.length > 0) {
                    userTugasResult.map((resultItem) => {
                        const totalAnswers = [
                            "answer1",
                            "answer2",
                            "answer3",
                            "answer4",
                        ];
                        const filledAnswers = totalAnswers.filter(
                            (answer) => resultItem[answer]
                        );

                        percentage =
                            (filledAnswers.length / totalAnswers.length) * 100;
                    });
                }

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
                            <p>{item.tenggat}</p>
                            <div className="w-[20%]">
                                <ProgressBar progres={percentage} />
                            </div>
                            <p>
                                {userTugasResult.length != 0
                                    ? userTugasResult[0].konfirmasi
                                    : "Belum Diterima"}
                            </p>
                            <Link
                                href={route("detail-tugas", item.id)}
                                className={`font-bold py-2 px-5 text-white rounded-[0.625rem] ${
                                    (userTugasResult.length != 0 &&
                                        userTugasResult[0].konfirmasi !=
                                            "Belum Diterima") ||
                                    isTenggatPassed(item.tenggat)
                                        ? "bg-primary-light"
                                        : "bg-primary"
                                }`}
                                as="button"
                                disabled={
                                    (userTugasResult.length != 0 &&
                                        userTugasResult[0].konfirmasi !=
                                            "Belum Diterima") ||
                                    isTenggatPassed(item.tenggat)
                                }
                            >
                                Detail
                            </Link>
                            <button
                                className={`font-bold py-2 px-5 text-white rounded-[0.625rem] ${
                                    userTugasResult.length != 0
                                        ? "bg-primary"
                                        : "bg-primary-light"
                                }`}
                                onClick={() =>
                                    triggerAlert(
                                        userTugasResult[0].feedback != null
                                            ? userTugasResult[0].feedback
                                            : "Belum Ada Feedback"
                                    )
                                }
                                disabled={userTugasResult.length == 0}
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
