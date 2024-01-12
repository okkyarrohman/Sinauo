import { Link } from "@inertiajs/react";

export default function CardSubmateri(props) {
    return (
        <div className="w-full rounded-[0.625rem] overflow-hidden shadow-custom flex items-center">
            <img
                className="h-36 w-32 object-cover"
                src={props.cover}
                alt="image submateri"
            />
            <div className="p-5 flex items-center gap-6 w-full">
                <div>
                    <h4 className="text-lg font-bold">{props.judul}</h4>
                    <p className="text-sm">{props.deskripsi}</p>
                </div>
                <div className="flex items-center gap-6 ml-auto w-fit">
                    <Link href={props.link}>
                        <button className="text-white font-bold py-2 px-5 bg-primary rounded-[0.625rem]">
                            Lihat
                        </button>
                    </Link>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                        >
                            <path
                                d="M6.04163 24.1667H22.9583V21.75H6.04163V24.1667ZM22.9583 10.875H18.125V3.625H10.875V10.875H6.04163L14.5 19.3333L22.9583 10.875Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
