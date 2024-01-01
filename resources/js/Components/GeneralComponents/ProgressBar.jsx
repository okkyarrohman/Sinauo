export default function ProgressBar({ progres }) {
    return (
        <div className="relative">
            <div className="bg-[#D9D9D9] w-full h-4 rounded-3xl"></div>
            <div
                className={`bg-[#F9A825] h-4 rounded-3xl absolute top-0 text-xs font-semibold text-center`}
                style={{ width: `${progres}%` }}
            >
                {progres}%
            </div>
        </div>
    );
}
