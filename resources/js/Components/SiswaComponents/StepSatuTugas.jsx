import { useForm } from "@inertiajs/react";

export default function StepSatuTugas({ data, setData, deskripsi }) {
    // const teks = `Pada tugas proyek ini, siswa diminta untuk membentuk kelompok untuk membuat tampilan sebuah website Tampilan website ini akan berfungsi sebagai tampilan depan dari suatu situs yang telah disepakati bersama tim. Pada tahap ini siswa diminta untuk melaporkan nama kelompok dan judul website yang akan dirancang desainnya.

    // Contoh : (Bobi, Rudi, Nadia. Luluk )
    // (Web Vaporant)`;

    return (
        <div>
            <div class="whitespace-pre-line text-xl text-justify mb-7 leading-8">
                {deskripsi}
            </div>
            <form>
                <textarea
                    className="w-full rounded-lg border border-[#D1D1D1]"
                    placeholder="Masukkan Jawaban..."
                    name="jawaban"
                    id="jawaban"
                    rows="7"
                    value={data.jawaban}
                    onChange={(e) => setData("jawaban", e.target.value)}
                ></textarea>
            </form>
        </div>
    );
}
