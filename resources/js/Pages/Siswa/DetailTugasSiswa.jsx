import BackButton from "@/Components/GeneralComponents/BackButton";
import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import StepTugas from "@/Components/SiswaComponents/StepTugas";
import MainLayout from "@/Layouts/MainLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { iconSubmitKuis } from "../../../assets";
import Swal from "sweetalert2";
import StepSatuTugas from "@/Components/SiswaComponents/StepSatuTugas";
import StepDuaTugas from "@/Components/SiswaComponents/StepDuaTugas";
import StepTigaTugas from "@/Components/SiswaComponents/StepTigaTugas";
import StepEmpatTugas from "@/Components/SiswaComponents/StepEmpatTugas";

export default function DetailTugasSiswa({ auth }) {
    const { tugas, tugasResult } = usePage().props;

    const isTenggatPassed = (deadline) => {
        const currentDateTime = new Date();
        const tenggatDateTime = new Date(deadline);

        return currentDateTime.getTime() >= tenggatDateTime.getTime();
    };

    const [step, setStep] = useState(1);
    const { data, setData, post, processing, errors, reset } = useForm({
        // id: tugasResult ? tugasResult.id : "",
        user_id: auth.user.id,
        tugas_id: tugas.id,
        answer1: tugasResult ? tugasResult.answer1 : null,
        answer2: tugasResult ? tugasResult.answer2 : null,
        answer3: tugasResult ? tugasResult.answer3 : null,
        answer4: tugasResult ? tugasResult.answer4 : null,
    });

    const handleStepChange = (newStep) => {
        setStep(newStep);
    };

    const handleSubmitStore = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("store-tugas"));
    };

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("update-tugas", tugasResult.id));
    };

    const triggerAlert = () => {
        Swal.fire({
            imageUrl: iconSubmitKuis,
            imageWidth: 125,
            imageHeight: 125,
            title: "Apakah kamu yakin menyelesaikan seluruhnya?",
            html: '<p class="text-base">Jika tidak periksa kembali jawabanmu</p>',
            showCancelButton: true,
            confirmButtonText: "Submit",
            customClass: {
                title: "block text-lg w-3/4 text-center mx-auto",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                router.visit("/tugas");
            }
        });
    };

    const getTextColor = (step) => {
        const konfirmasiValue = getKonfirmasiValue(step);

        // Add your logic to determine the text color based on the konfirmasi value
        switch (konfirmasiValue) {
            case "Terima":
                return "text-green-500";
            case "Tolak":
                return "text-red-500";
            default:
                return "text-black";
        }
    };

    const getKonfirmasiValue = (step) => {
        switch (step) {
            case 1:
                return tugasResult.konfirmasi1;
            case 2:
                return tugasResult.konfirmasi2;
            case 3:
                return tugasResult.konfirmasi3;
            case 4:
                return tugasResult.konfirmasi4;
            default:
                return "";
        }
    };

    return (
        <MainLayout>
            <Head title="Tugas" />
            <div className="flex items-start mb-[3.5rem]">
                <BackButton />
                <div className="text-center mx-auto">
                    <h1 className="font-bold text-[2rem]">Step {step}</h1>
                    <h1 className="font-bold text-[2rem]">
                        {step === 1 && `${tugas.step1}`}
                        {step === 2 && `${tugas.step2}`}
                        {step === 3 && `${tugas.step3}`}
                        {step === 4 && `${tugas.step4}`}
                    </h1>
                    {tugasResult && (
                        <h1
                            className={`font-bold text-base mt-4 italic ${getTextColor(
                                step
                            )}`}
                        >
                            {step === 1 && `${tugasResult.konfirmasi1}`}
                            {step === 2 && `${tugasResult.konfirmasi2}`}
                            {step === 3 && `${tugasResult.konfirmasi3}`}
                            {step === 4 && `${tugasResult.konfirmasi4}`}
                        </h1>
                    )}
                </div>
            </div>
            <div className="w-4/5 mx-auto">
                <StepTugas step={step} />
                <div className="mt-12 mb-8">
                    <form>
                        {step === 1 && (
                            <StepSatuTugas deskripsi={tugas.deskripsi1}>
                                <textarea
                                    className="w-full rounded-lg border border-[#D1D1D1]"
                                    placeholder="Masukkan Jawaban..."
                                    name="answer1"
                                    id="answer1"
                                    rows="7"
                                    value={data.answer1}
                                    onChange={(e) =>
                                        setData("answer1", e.target.value)
                                    }
                                ></textarea>
                            </StepSatuTugas>
                        )}
                        {step === 2 && (
                            <StepDuaTugas
                                deskripsi={tugas.deskripsi2}
                                namaFile={data.answer2 ? data.answer2.name : ""}
                                namaFileUpdate={
                                    tugasResult ? tugasResult.answer2 : ""
                                }
                            >
                                <label
                                    className="block w-fit py-3 px-5 rounded-[0.625rem] bg-primary cursor-pointer"
                                    htmlFor="answer2"
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
                                        Unggah File
                                    </span>
                                    <input
                                        id="answer2"
                                        type="file"
                                        name="answer2"
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "answer2",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                </label>
                            </StepDuaTugas>
                        )}
                        {step === 3 && (
                            <StepTigaTugas
                                deskripsi={tugas.deskripsi3}
                                namaFile={data.answer3 ? data.answer3.name : ""}
                                namaFileUpdate={
                                    tugasResult ? tugasResult.answer3 : ""
                                }
                            >
                                <label
                                    className="block w-fit py-3 px-5 rounded-[0.625rem] bg-primary cursor-pointer"
                                    htmlFor="answer3"
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
                                        Unggah File
                                    </span>
                                    <input
                                        id="answer3"
                                        type="file"
                                        name="answer3"
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "answer3",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                </label>
                            </StepTigaTugas>
                        )}
                        {step === 4 && (
                            <StepEmpatTugas
                                deskripsi={tugas.deskripsi4}
                                namaFile={data.answer4 ? data.answer4.name : ""}
                                namaFileUpdate={
                                    tugasResult ? tugasResult.answer4 : ""
                                }
                            >
                                <label
                                    className="block w-fit py-3 px-5 rounded-[0.625rem] bg-primary cursor-pointer"
                                    htmlFor="answer4"
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
                                        Unggah File
                                    </span>
                                    <input
                                        id="answer4"
                                        type="file"
                                        name="answer4"
                                        className="hidden"
                                        onChange={(e) =>
                                            setData(
                                                "answer4",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                </label>
                            </StepEmpatTugas>
                        )}
                    </form>
                </div>
                <div className="flex">
                    <div className="flex gap-8">
                        <button
                            className={`p-3 text-white rounded-full ${
                                step == 1 ? "bg-gray-500" : "bg-primary"
                            }`}
                            disabled={step == 1}
                            onClick={() => handleStepChange(step - 1)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="3"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                />
                            </svg>
                        </button>
                        <button
                            className={`p-3 text-white rounded-full ${
                                step == 4 ? "bg-gray-500" : "bg-primary"
                            }`}
                            disabled={step == 4}
                            onClick={() => handleStepChange(step + 1)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="3"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </button>
                    </div>
                    {step === 1 && (
                        <div className="ml-auto">
                            {(tugasResult &&
                                tugasResult.konfirmasi1 == "Terima") ||
                            isTenggatPassed(tugas.tenggat) ? null : (
                                <PrimaryButton
                                    text="Submit"
                                    onClick={
                                        tugasResult
                                            ? handleSubmitUpdate
                                            : handleSubmitStore
                                    }
                                />
                            )}
                        </div>
                    )}
                    {step === 2 && (
                        <div className="ml-auto">
                            {(tugasResult &&
                                tugasResult.konfirmasi2 == "Terima") ||
                            isTenggatPassed(tugas.tenggat) ? null : (
                                <PrimaryButton
                                    text="Submit"
                                    onClick={
                                        tugasResult
                                            ? handleSubmitUpdate
                                            : handleSubmitStore
                                    }
                                />
                            )}
                        </div>
                    )}
                    {step === 3 && (
                        <div className="ml-auto">
                            {(tugasResult &&
                                tugasResult.konfirmasi3 == "Terima") ||
                            isTenggatPassed(tugas.tenggat) ? null : (
                                <PrimaryButton
                                    text="Submit"
                                    onClick={
                                        tugasResult
                                            ? handleSubmitUpdate
                                            : handleSubmitStore
                                    }
                                />
                            )}
                        </div>
                    )}
                    {step === 4 && (
                        <div className="ml-auto">
                            {(tugasResult &&
                                tugasResult.konfirmasi4 == "Terima") ||
                            isTenggatPassed(tugas.tenggat) ? null : (
                                <PrimaryButton
                                    text="Submit"
                                    onClick={
                                        tugasResult
                                            ? handleSubmitUpdate
                                            : handleSubmitStore
                                    }
                                />
                            )}
                        </div>
                    )}
                </div>
                {/* <div className="flex">
                    {step !== 1 && (
                        <SecondaryButton
                            text="Back"
                            onClick={() => handleStepChange(step - 1)}
                        />
                    )}
                    <div className="ml-auto">
                        <PrimaryButton
                            text={step === 4 ? "Submit" : "Next"}
                            onClick={
                                step === 4
                                    ? handleSubmit
                                    : () =>
                                          handleStepChange(
                                              step === 4 ? step + 0 : step + 1
                                          )
                            }
                        />
                    </div>
                </div> */}
            </div>
        </MainLayout>
    );
}
