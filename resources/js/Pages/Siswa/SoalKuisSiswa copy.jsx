import BackButton from "@/Components/GeneralComponents/BackButton";
import SoalLayout from "@/Layouts/SoalLayout";
import { iconSubmitKuis, imageKonten1 } from "../../../assets";
import { useEffect, useState } from "react";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import Swal from "sweetalert2";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { url } from "../../../assets/url";

export default function SoalKuisSiswa() {
    const { kategori } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        hasil: "",
    });

    useEffect(() => {
        console.log(kategori);
        console.log(selectedOptions);
    }, []);

    const [currentSoal, setCurrentSoal] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [minutes, setMinutes] = useState(kategori[0].waktu);
    const [seconds, setSeconds] = useState(0);

    const handleNextClick = () => {
        setCurrentSoal(currentSoal + 1);
    };

    const handlePrevClick = () => {
        setCurrentSoal(currentSoal - 1);
    };

    const handleOptionChange = (event) => {
        const { name, value } = event.target;
        setSelectedOptions({
            ...selectedOptions,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // triggerAlert();
        console.log(route("store.kuis"));
    };

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
                console.log(result.message);
                // route("store.testingQuis");
                // router.visit("/kuis");
                console.log(selectedOptions);
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
                        {kategori[0].kuis}
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
            <form>
                {kategori.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-3xl w-full h-full p-6 shadow-custom"
                        >
                            <p
                                className={`text-xl font-semibold ${
                                    item.soal[currentSoal].gambar !== null
                                        ? "mb-2"
                                        : "mb-7"
                                }`}
                            >
                                Pertanyaan {currentSoal + 1}/
                                {item.soal.length}
                            </p>
                            {/* Foto Soal Start */}
                            {item.soal[currentSoal].gambar !== null && (
                                <img
                                    className="max-w-[50%] min-w-[20%] mb-7"
                                    src={`${url}kuis/gambar/${item.soal[currentSoal].gambar}`}
                                    alt="foto soal"
                                />
                            )}
                            {/* Foto Soal End */}
                            {/* Soal Start */}
                            <p className="text-lg mb-4">
                                {item.soal[currentSoal].soal}
                            </p>
                            {/* Soal End */}
                            {/* Jawaban Soal Start */}
                            <div className="flex flex-col gap-4 mb-12">
                                {item.soal[currentSoal].opsi.map(
                                    (opsiItem, opsiIndex) => (
                                        <label key={opsiIndex}>
                                            <input
                                                id={`option-${opsiItem.id}`}
                                                type="radio"
                                                // name={`soal[${item.soal[currentSoal].id}]`}
                                                name={item.soal[currentSoal].id}
                                                value={opsiItem.id}
                                                checked={
                                                    selectedOptions[
                                                        item.soal[currentSoal]
                                                            .id == opsiItem.id
                                                    ]
                                                }
                                                onChange={handleOptionChange}
                                            />
                                            <span className="pl-5">
                                                {opsiItem.opsi}
                                            </span>
                                        </label>
                                    )
                                )}
                            </div>
                            {/* Jawaban Soal End */}
                            <div className="flex justify-between">
                                {currentSoal === 0 ? null : (
                                    <SecondaryButton
                                        text="Kembali"
                                        onClick={handlePrevClick}
                                    />
                                )}
                                <div className="ml-auto">
                                    {currentSoal + 1 ===
                                    kategori[0].soal.length ? (
                                        <button
                                            className="rounded-[0.625rem] py-3 px-12 text-lg font-bold bg-primary text-white"
                                            type="submit"
                                            // onClick={handleSubmit}
                                        >
                                            Selesai
                                        </button>
                                    ) : (
                                        <PrimaryButton
                                            text="Berikutnya"
                                            onClick={handleNextClick}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </form>
        </SoalLayout>
    );
}
