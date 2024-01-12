import { placeholderQR } from "../../../assets";

export default function QRAbsensi(props) {
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <p className="text-xl font-bold">Absensi</p>
                <p className="text-[#8A8A8A] font-bold">{props.tanggal}</p>
            </div>
            <div>
                <img
                    className="size-60 mx-auto"
                    src={props.qr}
                    alt="QR Absensi"
                />
                <p className="text-sm text-center mt-4">bit.ly/absensi</p>
            </div>
        </>
    );
}
