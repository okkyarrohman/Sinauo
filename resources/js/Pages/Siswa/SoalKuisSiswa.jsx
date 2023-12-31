import BackButton from "@/Components/GeneralComponents/BackButton";
import SoalLayout from "@/Layouts/SoalLayout";
import { iconSubmitKuis, imageKonten1 } from "../../../assets";
import { useEffect, useState } from "react";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import Swal from "sweetalert2";
import { Head, router } from "@inertiajs/react";

export default function SoalKuisSiswa() {
    const [selectedOption, setSelectedOption] = useState("");
    const [minutes, setMinutes] = useState("25");
    const [seconds, setSeconds] = useState(0);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const data = {
        soal: "Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, as part of a protest against a bus company that refused to employ black and Asian drivers in which UK city?",
        foto_soal: imageKonten1,
        opsi_a: "A. Jakarta",
        opsi_b: "B. Bandung",
        opsi_c: "C. Sidoarjo",
        opsi_d: "D. Malang",
        opsi_e: "E. Krian",
    };

    const opsiList = Object.keys(data)
        .filter((key) => key.startsWith("opsi_"))
        .map((key) => data[key]);

    useEffect(() => {
        let interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [minutes, seconds]);

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
                router.visit("/kuis");
            }
        });
    };

    return (
        <SoalLayout>
            <Head title="Kuis" />
            <div className="mb-6">
                <BackButton />
            </div>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="font-semibold text-[2rem] mb-2">
                        Nama Kuis
                    </h1>
                    <p className="text-lg">
                        Jawab Kuis ini dengan Benar dan Teliti
                    </p>
                </div>
                <p className="font-semibold text-2xl">
                    Timer:{" "}
                    {`${minutes.toString().padStart(2, "0")}:${seconds
                        .toString()
                        .padStart(2, "0")}`}{" "}
                    Menit
                </p>
            </div>
            <div className="bg-white rounded-3xl w-full h-full p-6 shadow-custom">
                <p
                    className={`text-xl font-semibold ${
                        data.foto_soal !== null ? "mb-2" : "mb-7"
                    }`}
                >
                    Pertanyaan 1/25
                </p>
                {/* Foto Soal Start */}
                {data.foto_soal !== null && (
                    <img
                        className="max-w-[50%] min-w-[20%] mb-7"
                        src={data.foto_soal}
                        alt="foto soal"
                    />
                )}
                {/* Foto Soal End */}
                {/* Soal Start */}
                <p className="text-lg mb-4">{data.soal}</p>
                {/* Soal End */}
                {/* Jawaban Soal Start */}
                <div className="flex flex-col gap-4 mb-12">
                    {opsiList.map((option, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                            />
                            <span className="pl-5">{option}</span>
                        </label>
                    ))}
                </div>
                {/* Jawaban Soal End */}
                <div className="flex justify-between">
                    <SecondaryButton text="Kembali" />
                    <PrimaryButton text="Berikutnya" onClick={triggerAlert} />
                </div>
            </div>
        </SoalLayout>
    );
}
