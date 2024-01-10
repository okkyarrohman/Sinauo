import BackButton from "@/Components/GeneralComponents/BackButton";
import SoalLayout from "@/Layouts/SoalLayout";
import { iconSubmitKuis, imageKonten1 } from "../../../assets";
import { useEffect, useState } from "react";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import Swal from "sweetalert2";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { url } from "../../../assets/url";

export default function SoalKuisSiswaAll() {
    const { kategori } = usePage().props;

    const [currentSoal, setCurrentSoal] = useState(0);
    // const [selectedOptions, setSelectedOptions] = useState({});
    const [jawaban, setJawaban] = useState([]);
    const [soal, setSoal] = useState({});
    const [minutes, setMinutes] = useState(kategori[0].waktu);
    const [seconds, setSeconds] = useState(0);

    // let soal_data = [{ soal }];

    useEffect(() => {
        console.log(kategori);
        // console.log(selectedOptions);
        console.log(kategori[0].soal[0].id);
        console.log(jawaban);
    }, [jawaban]);

    const handleNextClick = () => {
        setCurrentSoal(currentSoal + 1);
    };

    const handlePrevClick = () => {
        setCurrentSoal(currentSoal - 1);
    };

    // const handleOptionChange = (event) => {
    //     const { name, value } = event.target;
    //     setSoal({
    //         ...soal,
    //         [name]: value,
    //     });
    // };

    const handleOptionChange = (event) => {
        const { name, value } = event.target;
        const updatedJawaban = { ...jawaban };
        updatedJawaban.soal = {
            ...updatedJawaban.soal,
            [name]: value,
        };
        setJawaban(updatedJawaban);
        // setSoal({
        //     ...soal,
        //     [name]: value,
        // });
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // triggerAlert();
        router.post("/kuis/store", jawaban);
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
                console.log(soal);
                // route("store.kuis");
                // router.visit("/kuis");
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
            <form onSubmit={handleSubmit}>
                {kategori.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-3xl w-full h-full p-6 shadow-custom"
                        >
                            {item.soal.map((soalItem, soalIndex) => {
                                return (
                                    <>
                                        <p
                                            className={`text-xl font-semibold ${
                                                soalItem.gambar !== null
                                                    ? "mb-2"
                                                    : "mb-7"
                                            }`}
                                        >
                                            Pertanyaan {soalIndex + 1}/
                                            {item.soal.length}
                                        </p>

                                        {/* Foto Soal Start */}
                                        {soalItem.gambar !== null && (
                                            <img
                                                className="max-w-[50%] min-w-[20%] mb-7"
                                                src={`${url}kuis/gambar/${soalItem.gambar}`}
                                                alt="foto soal"
                                            />
                                        )}
                                        {/* Foto Soal End */}

                                        {/* Soal Start */}
                                        <p className="text-lg mb-4">
                                            {soalItem.soal}
                                        </p>
                                        {/* Soal End */}
                                        {/* Jawaban Soal Start */}
                                        <div className="flex flex-col gap-4 mb-12">
                                            {soalItem.opsi.map(
                                                (opsiItem, opsiIndex) => (
                                                    <label key={opsiIndex}>
                                                        <input
                                                            id={`option-${opsiItem.id}`}
                                                            type="radio"
                                                            name={soalItem.id}
                                                            value={opsiItem.id}
                                                            checked={
                                                                soal[
                                                                    soalItem.id ===
                                                                        opsiItem.id
                                                                ]
                                                            }
                                                            onChange={
                                                                handleOptionChange
                                                            }
                                                        />
                                                        <span className="pl-5">
                                                            {opsiItem.opsi}
                                                        </span>
                                                    </label>
                                                )
                                            )}
                                        </div>
                                        {/* Jawaban Soal End */}
                                    </>
                                );
                            })}
                            <div className="flex justify-between">
                                <div className="ml-auto">
                                    <button
                                        className="rounded-[0.625rem] py-3 px-12 text-lg font-bold bg-primary text-white"
                                        type="submit"
                                        // onClick={() =>
                                        //     route("store.kuis", jawaban)
                                        // }
                                    >
                                        Selesai
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </form>
        </SoalLayout>
    );
}
