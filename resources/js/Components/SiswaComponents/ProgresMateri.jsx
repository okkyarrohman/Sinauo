import { Link } from "@inertiajs/react";
import ProgressBar from "../GeneralComponents/ProgressBar";

export default function ProgresMateri(props) {
    let materi = [];
    let submateriSeens = [];
    materi = props.data.filter((item) => item.submateri.length > 0);
    submateriSeens = props.isSeen;

    return (
        <div className="p-4 rounded-md h-96 w-full bg-white shadow-custom">
            <h4 className="text-lg font-medium mb-2">Progres Materi</h4>
            {materi.map((item, index) => {
                const submateriIsSeen = submateriSeens.filter(
                    (seen) =>
                        seen.submateri.materi.id == item.id &&
                        seen.user_id == props.userId
                );

                return (
                    <Link
                        key={index}
                        className="p-3 bg-[#F0F7FF] rounded-[0.625rem] flex items-center justify-between mt-3"
                        href={route("detail-materi", item.id)}
                    >
                        <div className="w-4/5">
                            <p className="text-sm font-semibold mb-2">
                                {item.nama}
                            </p>
                            <ProgressBar
                                progres={
                                    //     item.submateri.filter(
                                    //     (subItem) =>
                                    //         subItem.status === "Selesai"
                                    // )
                                    (submateriIsSeen.length /
                                        item.submateri.length) *
                                    100
                                }
                            />
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.09283 11.5928L3.03217 10.5321L7.37684 6.18744L3.03217 1.84277L4.09283 0.782113L9.49816 6.18744L4.09283 11.5928Z"
                                fill="#333333"
                            />
                        </svg>
                    </Link>
                );
            })}
            {/* {data.map((item, index) => {
                return (
                    <Link
                        key={index}
                        className="p-3 bg-[#F0F7FF] rounded-[0.625rem] flex items-center justify-between mt-3"
                        href=""
                    >
                        <div className="w-4/5">
                            <p className="text-sm font-semibold mb-2">
                                {item.materi}
                            </p>
                            <ProgressBar progres={item.presentase} />
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.09283 11.5928L3.03217 10.5321L7.37684 6.18744L3.03217 1.84277L4.09283 0.782113L9.49816 6.18744L4.09283 11.5928Z"
                                fill="#333333"
                            />
                        </svg>
                    </Link>
                );
            })} */}
        </div>
    );
}
