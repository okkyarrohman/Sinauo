import { Link } from "@inertiajs/react";
import FormatWaktu from "../../../assets/formatdate";

export default function InformasiBaru(props) {
    return (
        <div>
            <p className="text-lg font-medium mb-2">Informasi Baru</p>
            {/* Card */}
            {props.data.length === 0 && (
                <div className="flex items-center gap-6 py-4 px-4">
                    <div className="rounded-lg bg-[#F0F7FF] size-11 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="28"
                            viewBox="0 0 26 28"
                            fill="none"
                        >
                            <path
                                d="M11.9012 3.23303C11.5785 3.23303 11.2689 3.37641 11.0406 3.63163C10.8124 3.88685 10.6842 4.233 10.6842 4.59393C10.6842 4.95487 10.8124 5.30102 11.0406 5.55624C11.2689 5.81146 11.5785 5.95484 11.9012 5.95484H14.3354C14.6582 5.95484 14.9677 5.81146 15.196 5.55624C15.4242 5.30102 15.5524 4.95487 15.5524 4.59393C15.5524 4.233 15.4242 3.88685 15.196 3.63163C14.9677 3.37641 14.6582 3.23303 14.3354 3.23303H11.9012Z"
                                fill="#006CEC"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.81592 7.31574C5.81592 6.59387 6.07237 5.90157 6.52886 5.39113C6.98535 4.88069 7.60448 4.59393 8.25005 4.59393C8.25005 5.67673 8.63472 6.71519 9.31946 7.48084C10.0042 8.2465 10.9329 8.67664 11.9012 8.67664H14.3354C15.3037 8.67664 16.2324 8.2465 16.9172 7.48084C17.6019 6.71519 17.9866 5.67673 17.9866 4.59393C18.6321 4.59393 19.2513 4.88069 19.7077 5.39113C20.1642 5.90157 20.4207 6.59387 20.4207 7.31574V22.2857C20.4207 23.0075 20.1642 23.6998 19.7077 24.2103C19.2513 24.7207 18.6321 25.0075 17.9866 25.0075H8.25005C7.60448 25.0075 6.98535 24.7207 6.52886 24.2103C6.07237 23.6998 5.81592 23.0075 5.81592 22.2857V7.31574ZM9.46711 12.7593C9.14433 12.7593 8.83476 12.9027 8.60652 13.1579C8.37827 13.4132 8.25005 13.7593 8.25005 14.1202C8.25005 14.4812 8.37827 14.8273 8.60652 15.0826C8.83476 15.3378 9.14433 15.4811 9.46711 15.4811H9.47928C9.80207 15.4811 10.1116 15.3378 10.3399 15.0826C10.5681 14.8273 10.6963 14.4812 10.6963 14.1202C10.6963 13.7593 10.5681 13.4132 10.3399 13.1579C10.1116 12.9027 9.80207 12.7593 9.47928 12.7593H9.46711ZM13.1183 12.7593C12.7955 12.7593 12.486 12.9027 12.2577 13.1579C12.0295 13.4132 11.9012 13.7593 11.9012 14.1202C11.9012 14.4812 12.0295 14.8273 12.2577 15.0826C12.486 15.3378 12.7955 15.4811 13.1183 15.4811H16.7695C17.0923 15.4811 17.4018 15.3378 17.6301 15.0826C17.8583 14.8273 17.9866 14.4812 17.9866 14.1202C17.9866 13.7593 17.8583 13.4132 17.6301 13.1579C17.4018 12.9027 17.0923 12.7593 16.7695 12.7593H13.1183ZM9.46711 18.203C9.14433 18.203 8.83476 18.3463 8.60652 18.6016C8.37827 18.8568 8.25005 19.2029 8.25005 19.5639C8.25005 19.9248 8.37827 20.2709 8.60652 20.5262C8.83476 20.7814 9.14433 20.9248 9.46711 20.9248H9.47928C9.80207 20.9248 10.1116 20.7814 10.3399 20.5262C10.5681 20.2709 10.6963 19.9248 10.6963 19.5639C10.6963 19.2029 10.5681 18.8568 10.3399 18.6016C10.1116 18.3463 9.80207 18.203 9.47928 18.203H9.46711ZM13.1183 18.203C12.7955 18.203 12.486 18.3463 12.2577 18.6016C12.0295 18.8568 11.9012 19.2029 11.9012 19.5639C11.9012 19.9248 12.0295 20.2709 12.2577 20.5262C12.486 20.7814 12.7955 20.9248 13.1183 20.9248H16.7695C17.0923 20.9248 17.4018 20.7814 17.6301 20.5262C17.8583 20.2709 17.9866 19.9248 17.9866 19.5639C17.9866 19.2029 17.8583 18.8568 17.6301 18.6016C17.4018 18.3463 17.0923 18.203 16.7695 18.203H13.1183Z"
                                fill="#006CEC"
                            />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-semibold">Belum Ada Tugas</h4>
                    </div>
                </div>
            )}
            {props.data.map((item, index) => {
                return (
                    <Link
                        key={index}
                        className="border-t-2 flex items-center gap-6 py-4 px-4"
                        href={route("detail-tugas", item.id)}
                    >
                        <div className="rounded-lg bg-[#F0F7FF] size-11 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="28"
                                viewBox="0 0 26 28"
                                fill="none"
                            >
                                <path
                                    d="M11.9012 3.23303C11.5785 3.23303 11.2689 3.37641 11.0406 3.63163C10.8124 3.88685 10.6842 4.233 10.6842 4.59393C10.6842 4.95487 10.8124 5.30102 11.0406 5.55624C11.2689 5.81146 11.5785 5.95484 11.9012 5.95484H14.3354C14.6582 5.95484 14.9677 5.81146 15.196 5.55624C15.4242 5.30102 15.5524 4.95487 15.5524 4.59393C15.5524 4.233 15.4242 3.88685 15.196 3.63163C14.9677 3.37641 14.6582 3.23303 14.3354 3.23303H11.9012Z"
                                    fill="#006CEC"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.81592 7.31574C5.81592 6.59387 6.07237 5.90157 6.52886 5.39113C6.98535 4.88069 7.60448 4.59393 8.25005 4.59393C8.25005 5.67673 8.63472 6.71519 9.31946 7.48084C10.0042 8.2465 10.9329 8.67664 11.9012 8.67664H14.3354C15.3037 8.67664 16.2324 8.2465 16.9172 7.48084C17.6019 6.71519 17.9866 5.67673 17.9866 4.59393C18.6321 4.59393 19.2513 4.88069 19.7077 5.39113C20.1642 5.90157 20.4207 6.59387 20.4207 7.31574V22.2857C20.4207 23.0075 20.1642 23.6998 19.7077 24.2103C19.2513 24.7207 18.6321 25.0075 17.9866 25.0075H8.25005C7.60448 25.0075 6.98535 24.7207 6.52886 24.2103C6.07237 23.6998 5.81592 23.0075 5.81592 22.2857V7.31574ZM9.46711 12.7593C9.14433 12.7593 8.83476 12.9027 8.60652 13.1579C8.37827 13.4132 8.25005 13.7593 8.25005 14.1202C8.25005 14.4812 8.37827 14.8273 8.60652 15.0826C8.83476 15.3378 9.14433 15.4811 9.46711 15.4811H9.47928C9.80207 15.4811 10.1116 15.3378 10.3399 15.0826C10.5681 14.8273 10.6963 14.4812 10.6963 14.1202C10.6963 13.7593 10.5681 13.4132 10.3399 13.1579C10.1116 12.9027 9.80207 12.7593 9.47928 12.7593H9.46711ZM13.1183 12.7593C12.7955 12.7593 12.486 12.9027 12.2577 13.1579C12.0295 13.4132 11.9012 13.7593 11.9012 14.1202C11.9012 14.4812 12.0295 14.8273 12.2577 15.0826C12.486 15.3378 12.7955 15.4811 13.1183 15.4811H16.7695C17.0923 15.4811 17.4018 15.3378 17.6301 15.0826C17.8583 14.8273 17.9866 14.4812 17.9866 14.1202C17.9866 13.7593 17.8583 13.4132 17.6301 13.1579C17.4018 12.9027 17.0923 12.7593 16.7695 12.7593H13.1183ZM9.46711 18.203C9.14433 18.203 8.83476 18.3463 8.60652 18.6016C8.37827 18.8568 8.25005 19.2029 8.25005 19.5639C8.25005 19.9248 8.37827 20.2709 8.60652 20.5262C8.83476 20.7814 9.14433 20.9248 9.46711 20.9248H9.47928C9.80207 20.9248 10.1116 20.7814 10.3399 20.5262C10.5681 20.2709 10.6963 19.9248 10.6963 19.5639C10.6963 19.2029 10.5681 18.8568 10.3399 18.6016C10.1116 18.3463 9.80207 18.203 9.47928 18.203H9.46711ZM13.1183 18.203C12.7955 18.203 12.486 18.3463 12.2577 18.6016C12.0295 18.8568 11.9012 19.2029 11.9012 19.5639C11.9012 19.9248 12.0295 20.2709 12.2577 20.5262C12.486 20.7814 12.7955 20.9248 13.1183 20.9248H16.7695C17.0923 20.9248 17.4018 20.7814 17.6301 20.5262C17.8583 20.2709 17.9866 19.9248 17.9866 19.5639C17.9866 19.2029 17.8583 18.8568 17.6301 18.6016C17.4018 18.3463 17.0923 18.203 16.7695 18.203H13.1183Z"
                                    fill="#006CEC"
                                />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold">{item.nama}</h4>
                            <p className="text-[#9E9E9E] text-sm">
                                {FormatWaktu(item.tenggat)}
                            </p>
                        </div>
                        <div className="ml-auto">
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
                        </div>
                    </Link>
                );
            })}
            {/* Card */}
        </div>
    );
}
