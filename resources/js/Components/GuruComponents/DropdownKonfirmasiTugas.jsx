import { useState } from "react";

export default function DropdownKonfirmasiTugas(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleDropdownSelect = (value) => {
        props.onSelect(value);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div className="px-4 py-3 bg-white border border-[#BDBDBD] w-60 rounded">
                <button
                    className="flex items-center justify-between w-full"
                    type="button"
                    onClick={handleDropdown}
                >
                    <span>{props.selectedValue || "Konfirmasi Tugas"}</span>
                    <div>
                        {!isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                />
                            </svg>
                        )}
                    </div>
                </button>
            </div>
            {isOpen && (
                <div className="w-60 mt-2 rounded border border-[#BDBDBD] bg-white">
                    <button
                        id={props.id}
                        value="Terima"
                        type="button"
                        className="block w-full text-left px-4 py-3 border-b border-[#BDBDBD]"
                        onClick={() => handleDropdownSelect("Terima")}
                    >
                        Terima
                    </button>
                    <button
                        id={props.id}
                        value="Tolak"
                        type="button"
                        className="block w-full text-left px-4 py-3 border-b border-[#BDBDBD]"
                        onClick={() => handleDropdownSelect("Tolak")}
                    >
                        Tolak
                    </button>
                </div>
            )}
        </div>
    );
}
