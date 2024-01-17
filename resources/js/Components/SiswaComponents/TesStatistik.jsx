import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function TesStatistik(props) {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
        maintainAspectRatio: false,
    };

    // const labels = ["Pre-Test", "Post-Test", "Test 1", "Test 2", "Test 3"];
    const labels = props.data.map((item) => item.kategori);

    useEffect(() => {
        console.log(
            "Ini Di Komponen Kategori",
            props.data.map((item) => item.kategori)
        );
        console.log(
            "Ini Di Komponen Y",
            props.data.map((item) => item.y)
        );
    });

    const data = {
        labels,
        datasets: [
            {
                label: "Hasil",
                data: props.data.map((item) => item.y),
                backgroundColor: "rgba(0, 108, 236, 1)",
            },
        ],
    };

    return (
        <div className="p-4 rounded-md h-96 w-full bg-white shadow-custom">
            <h4 className="text-lg font-medium mb-2">Statistik Tes Siswa</h4>
            <Bar className="pb-10" options={options} data={data} />
        </div>
    );
}
