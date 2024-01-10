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

    useEffect(() => {
        console.log(tugas);
        console.log(auth);
    }, []);

    const [step, setStep] = useState(1);
    const { data, setData, post, processing, errors, reset } = useForm({
        id: tugas.id,
        user_id: auth.user.id,
        tugas_id: tugas.id,
        answer1: tugas.answer1,
        answer2: null,
        answer3: null,
        answer4: null,
    });

    const handleStepChange = (newStep) => {
        setStep(newStep);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("update-tugas"));
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

    // const handleInputChange = (name, value) => {
    //     setData((prevInput) => ({
    //         ...prevInput,
    //         [name]: value,
    //     }));
    // };

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
                </div>
            </div>
        </MainLayout>
    );
}
