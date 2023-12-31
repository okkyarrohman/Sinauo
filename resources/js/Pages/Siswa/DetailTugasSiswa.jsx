import BackButton from "@/Components/GeneralComponents/BackButton";
import PrimaryButton from "@/Components/GeneralComponents/PrimaryButton";
import SecondaryButton from "@/Components/GeneralComponents/SecondaryButton";
import StepTugas from "@/Components/SiswaComponents/StepTugas";
import MainLayout from "@/Layouts/MainLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { iconSubmitKuis } from "../../../assets";
import Swal from "sweetalert2";
import StepSatuTugas from "@/Components/SiswaComponents/StepSatuTugas";
import StepDuaTugas from "@/Components/SiswaComponents/StepDuaTugas";
import StepTigaTugas from "@/Components/SiswaComponents/StepTigaTugas";
import StepEmpatTugas from "@/Components/SiswaComponents/StepEmpatTugas";

export default function DetailTugasSiswa() {
    const [step, setStep] = useState(1);
    const { data, setData, post, processing, errors, reset } = useForm({
        jawaban: "",
    });

    const handleStepChange = (newStep) => {
        setStep(newStep);
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

    const handleInputChange = (name, value) => {
        setData((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const deskripsi = [
        `Pada tugas proyek ini, siswa diminta untuk membentuk kelompok untuk membuat tampilan sebuah website Tampilan website ini akan berfungsi sebagai tampilan depan dari suatu situs yang telah disepakati bersama tim. Pada tahap ini siswa diminta untuk melaporkan nama kelompok dan judul website yang akan dirancang desainnya. 

        Contoh : (Bobi, Rudi, Nadia. Luluk ) 
        (Web Vaporant)`,
        `Pada tahap ini siswa akan melakukan perencanaan website yang terdiri dari :
        1. Tema dan judul/nama website
        2. Logo
        3. Deskripsi website
        4. Fitur
        5. Isi konten 
        Kerjakan sesuai template tabel yang telah disediakan di referensi. Setelah selesai melakukan perencaan upload dengan format file pdf.`,
        `Pada tahap ini siswa akan melakukan perancangan website yaitu dengan membuat wireframe/storyboard yaitu rancangan sementara sebelum desain website dikembangkannya website sesungguhnya. Setelah selesai melakukan perancangan wireframe/storyboard upload hasil tersebut dengan format file pdf.`,
        `Pada tahap ini siswa akan melakukan pengembangan antarmuka desain website sesuai dengan tahap perencanaan dan perancangan yang telah disusun. Setelah selesai melakukan pengembangan proyek desain web susun serapi mungkin dan jangan lupa untuk diberikan keterangan nama kelompok lalu upload hasil tersebut dengan format file pdf.`,
    ];

    return (
        <MainLayout>
            <Head title="Tugas" />
            <div className="flex items-start mb-[3.5rem]">
                <BackButton />
                <div className="text-center mx-auto">
                    <h1 className="font-bold text-[2rem]">Step {step}</h1>
                    <h1 className="font-bold text-[2rem]">
                        {step === 1 && "Deskripsi Proyek"}
                        {step === 2 && "Perencanaan Proyek"}
                        {step === 3 && "Perancangan Proyek"}
                        {step === 4 && "Pengembangan Proyek"}
                    </h1>
                </div>
            </div>
            <div className="w-4/5 mx-auto">
                <StepTugas step={step} />
                <div className="mt-12 mb-8">
                    {step === 1 && (
                        <StepSatuTugas
                            data={data}
                            setData={handleInputChange}
                            deskripsi={deskripsi[0]}
                        />
                    )}
                    {step === 2 && <StepDuaTugas deskripsi={deskripsi[1]} />}
                    {step === 3 && <StepTigaTugas deskripsi={deskripsi[2]} />}
                    {step === 4 && <StepEmpatTugas deskripsi={deskripsi[3]} />}
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
                                    ? () => triggerAlert()
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
