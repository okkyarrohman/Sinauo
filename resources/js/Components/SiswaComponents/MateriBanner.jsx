import { imageBuku } from "../../../assets";
import { url } from "../../../assets/url";

export default function MateriBanner(props) {
    return (
        <div className="w-full h-60 bg-primary rounded-[0.625rem] flex items-center px-10 overflow-hidden">
            <div className="w-fit">
                <h4 className="text-2xl font-medium text-white mb-4">
                    Belajar
                </h4>
                <h1 className="text-3xl font-bold text-white w-fit mb-2">
                    {props.judul}
                </h1>
                <p className="text-white w-4/5 line-clamp-3">
                    {props.deskripsi}
                </p>
            </div>
            <img className="h-60" src={imageBuku} alt="image banner" />
        </div>
    );
}
