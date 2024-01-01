export default function TambahAbsensi() {
    return (
        <div className="p-7 bg-white rounded-[0.625rem] w-96">
            <div className="flex justify-between mb-6">
                <h1 className="text-xl font-bold">Absensi</h1>
                <p className="text-[#8A8A8A] font-bold">07 Juli 2024</p>
            </div>
            <label
                className="block w-fit py-3 px-5 rounded-[0.625rem] bg-primary cursor-pointer mb-6"
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
                    Pilih File
                </span>
                <input id="foto" type="file" name="foto" className="hidden" />
            </label>
            <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">bit.ly/absensi</p>
                <button>
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
                </button>
            </div>
        </div>
    );
}
