import { Link } from "@inertiajs/react";
import { imageKonten1 } from "../../../assets";

export default function ProfileInfo({ name }) {
    return (
        <Link
            className="flex items-center gap-3 w-60"
            href={route("edit-profil.edit")}
        >
            <img
                className="size-12 rounded-full"
                src={imageKonten1}
                alt="foto profil"
            />
            <p className="font-semibold break-words text-ellipsis whitespace-nowrap overflow-hidden">
                Hi, {name}
            </p>
        </Link>
    );
}
