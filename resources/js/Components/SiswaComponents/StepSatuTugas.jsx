import { useForm } from "@inertiajs/react";

export default function StepSatuTugas({ deskripsi, children }) {
    return (
        <div>
            <div className="whitespace-pre-line text-xl text-justify mb-7 leading-8">
                {deskripsi}
            </div>
            {/* <form> */}
            {children}
            {/* <textarea
                    className="w-full rounded-lg border border-[#D1D1D1]"
                    placeholder="Masukkan Jawaban..."
                    name="jawaban"
                    id="jawaban"
                    rows="7"
                    value={data.jawaban}
                    onChange={(e) => setData("jawaban", e.target.value)}
                ></textarea> */}
            {/* </form> */}
        </div>
    );
}
