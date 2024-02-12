export default function StepTigaTugas({
    deskripsi,
    namaFile,
    namaFileUpdate,
    children,
}) {
    return (
        <div>
            <div class="whitespace-pre-line text-xl text-justify mb-7 leading-8">
                {deskripsi}
            </div>
            <div className="flex items-center justify-center gap-2 mb-3">
                <label
                    className="block text-sm font-semibold text-center"
                    htmlFor="foto"
                >
                    {namaFile}
                </label>
            </div>
            <div className="mx-auto w-fit mb-3">{children}</div>
            <div className="flex items-center justify-center gap-2 mb-7">
                <label
                    className="block text-sm font-semibold text-center"
                    htmlFor="foto"
                >
                    File Saat Ini : {namaFileUpdate}
                </label>
            </div>
        </div>
    );
}
