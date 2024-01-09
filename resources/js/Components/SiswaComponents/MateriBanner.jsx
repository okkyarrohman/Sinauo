import { imageBuku } from "../../../assets";
import { url } from "../../../assets/url";

export default function MateriBanner() {
    return (
        <div className="w-full h-60 bg-primary rounded-[0.625rem] flex items-center px-10 overflow-hidden">
            <div className="w-fit">
                <h4 className="text-2xl font-medium text-white mb-4">
                    Belajar
                </h4>
                <h1 className="text-3xl font-bold text-white w-fit mb-2">
                    Prinsip Dasar Desain dan Komunikasi
                </h1>
                <p className="text-white w-4/5 line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    adipisci nostrum reprehenderit dignissimos accusamus nam
                    voluptatibus debitis aliquid necessitatibus quis.
                </p>
            </div>
            <img className="h-60"
            src={imageBuku}
            alt="image banner" />
        </div>
    );
}
