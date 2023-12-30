import { placeholderQR } from "../../../assets";

export default function QRAbsensi() {
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <p className="text-xl font-bold">Absensi</p>
                <p className="text-[#8A8A8A] font-bold">02 Juli 2024</p>
            </div>
            <div className="size-60 mx-auto">
                <img src={placeholderQR} alt="" />
                <p className="text-sm text-center">bit.ly/absensi</p>
            </div>
        </>
    );
}
