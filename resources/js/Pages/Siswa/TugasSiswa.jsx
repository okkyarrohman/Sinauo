import MainLayout from "@/Layouts/MainLayout";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import SearchBar from "@/Components/SiswaComponents/SearchBar";
import { Head, Link } from "@inertiajs/react";
import Swal from "sweetalert2";
import { iconFeedback, iconSubmitKuis } from "../../../assets";

export default function TugasSiswa({ auth }) {
    const data = [
        {
            no: "1",
            nama: "Proyek 1",
            tanggal: "27/11/2024",
            progres: "25",
            status: "Belum Diterima",
            feedback: "Kamu Hebat",
        },
        {
            no: "2",
            nama: "Proyek Akhir",
            tanggal: "01/01/2024",
            progres: "75",
            status: "Sudah Diterima",
            feedback:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi accusamus nam quaerat. Animi aliquam quia fuga aliquid. Doloremque id sapiente expedita reprehenderit saepe, atque ad sequi iure ipsam soluta ipsum minima distinctio accusantium alias vitae quo et earum error eaque voluptatum enim veritatis sit harum modi. Debitis, nulla itaque!",
        },
    ];

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

    return (
        <MainLayout>
            <Head title="Tugas" />
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={auth.user.name} />
            </div>
            <h1 className="font-semibold text-2xl mb-10">Tugas</h1>
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-2xl mb-4 flex items-center"
                    >
                        <p>{item.no}</p>
                        <div className="flex items-center justify-between w-[92%] ml-auto">
                            <div className="w-28 relative">
                                <p className="break-words text-ellipsis whitespace-nowrap overflow-hidden hover:text-wrap">
                                    {item.nama}
                                </p>
                            </div>
                            <p>{item.tanggal}</p>
                            <div className="relative w-[20%]">
                                <div className="bg-[#D9D9D9] w-full h-4 rounded-3xl"></div>
                                <div
                                    className={`bg-[#F9A825] h-4 rounded-3xl absolute top-0 text-xs font-semibold text-center`}
                                    style={{ width: `${item.progres}%` }}
                                >
                                    {item.progres}%
                                </div>
                            </div>
                            <p>{item.status}</p>
                            <Link href={route("detail-tugas")}>
                                <button className="font-bold py-2 px-5 bg-primary text-white rounded-[0.625rem]">
                                    Detail
                                </button>
                            </Link>
                            <button
                                className="font-bold py-2 px-5 bg-primary text-white rounded-[0.625rem]"
                                onClick={() => triggerAlert(item.feedback)}
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
