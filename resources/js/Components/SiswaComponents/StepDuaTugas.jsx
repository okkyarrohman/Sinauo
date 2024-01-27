export default function StepDuaTugas({
    deskripsi,
    namaFile,
    namaFileUpdate,
    children,
}) {
    return (
        <div>
            <div className="whitespace-pre-line text-xl text-justify mb-7 leading-8">
                {deskripsi}
            </div>
            <>
                <div className="flex items-center justify-center gap-2 mb-3">
                    <label
                        className="block text-sm font-semibold text-center"
                        htmlFor="foto"
                    >
                        {namaFile}
                        {namaFileUpdate}
                    </label>
                    {/* <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>
                    </button> */}
                </div>
                <div className="mx-auto w-fit mb-7">
                    {children}
                    {/* <label
                        className="block w-fit py-3 px-5 rounded-[0.625rem] bg-primary cursor-pointer"
                        htmlFor="foto"
                    >
                        <span className="text-white flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                            Unggah File
                        </span>
                        <input
                            id="foto"
                            type="file"
                            name="foto"
                            className="hidden"
                        />
                    </label> */}
                </div>
            </>
        </div>
    );
}
