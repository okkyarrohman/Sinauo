export default function StepTugas({ step }) {
    return (
        <div className="flex justify-between items-center">
            <div
                className={`p-1 rounded-full ${
                    step >= 1
                        ? "border-2 border-primary"
                        : "border-2 border-transparent"
                }`}
            >
                <div
                    className={`size-12 flex items-center justify-center rounded-full text-center ${
                        step >= 1
                            ? "bg-primary text-white"
                            : "bg-gray-300 text-gray-500"
                    }`}
                >
                    1
                </div>
            </div>
            <div
                className={`w-[25%] h-1 ${
                    step >= 2 ? "bg-primary" : "bg-gray-300"
                }`}
            />
            <div
                className={`p-1 rounded-full ${
                    step >= 2
                        ? "border-2 border-primary"
                        : "border-2 border-transparent"
                }`}
            >
                <div
                    className={`size-12 flex items-center justify-center rounded-full text-center ${
                        step >= 2
                            ? "bg-primary text-white"
                            : "bg-gray-300 text-gray-500"
                    }`}
                >
                    2
                </div>
            </div>
            <div
                className={`w-[25%] h-1 ${
                    step >= 3 ? "bg-primary" : "bg-gray-300"
                }`}
            />
            <div
                className={`p-1 rounded-full ${
                    step >= 3
                        ? "border-2 border-primary"
                        : "border-2 border-transparent"
                }`}
            >
                <div
                    className={`size-12 flex items-center justify-center rounded-full text-center ${
                        step >= 3
                            ? "bg-primary text-white"
                            : "bg-gray-300 text-gray-500"
                    }`}
                >
                    3
                </div>
            </div>
            <div
                className={`w-[25%] h-1 ${
                    step >= 4 ? "bg-primary" : "bg-gray-300"
                }`}
            />
            <div
                className={`p-1 rounded-full ${
                    step >= 4
                        ? "border-2 border-primary"
                        : "border-2 border-transparent"
                }`}
            >
                <div
                    className={`size-12 flex items-center justify-center rounded-full text-center ${
                        step === 4
                            ? "bg-primary text-white"
                            : "bg-gray-300 text-gray-500"
                    }`}
                >
                    4
                </div>
            </div>
        </div>
    );
}
