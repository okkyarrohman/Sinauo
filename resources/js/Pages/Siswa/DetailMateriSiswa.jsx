import BackButton from "@/Components/GeneralComponents/BackButton";
import ProfileInfo from "@/Components/SiswaComponents/ProfileInfo";
import MainLayout from "@/Layouts/MainLayout";
import { imageBuku, placeholderMateri } from "../../../assets";
import MateriBanner from "@/Components/SiswaComponents/MateriBanner";
import { Head, Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import CardSubmateri from "@/Components/SiswaComponents/CardSubmateri";
import ProgressBar from "@/Components/GeneralComponents/ProgressBar";
import { url } from "../../../assets/url";

export default function DetailMateriSiswa({ auth }) {
    const { materi } = usePage().props;
    useEffect(() => {
        console.log(materi);
    }, []);


    const data = [
        {
            judul: "Statefull or Stateless",
            deskripsi:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit necessitatibus volupta consequatur deleniti tempora esse explicabo quisquam omnis ullam id.",
        },
        {
            judul: "Flutter is Sucks",
            deskripsi:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit necessitatibus volupta consequatur deleniti tempora esse explicabo quisquam omnis ullam id.",
        },
    ];

    return (
        <MainLayout>
            <Head title="Materi" />
            <div className="flex justify-between items-center mb-10">
                <BackButton />
                <ProfileInfo name={auth.user.name} />
            </div>
            <div className="mb-8">
                <MateriBanner />
            </div>
            <div className="w-1/3 flex items-center justify-between mb-9">
                <div className="size-10 bg-primary rounded-[0.625rem]"></div>
                <div className="w-[85%]">
                    <ProgressBar progres="50" />
                    <p>2/4 Materi</p>
                </div>
            </div>
            <div className="w-4/5">
                {materi.map((item, index) => {
                    return (
                        <div key={index} className="mb-6">
                            <CardSubmateri
                                judul={item.nama}
                                deskripsi={item.deskripsi}
                            />
                        </div>
                    );
                })}
            </div>
        </MainLayout>
    );
}
