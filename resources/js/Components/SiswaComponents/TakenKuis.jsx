import ProfileInfo from "./ProfileInfo";
import SearchBar from "./SearchBar";

export default function TakenKuis({ user }) {
    return (
        <div className="">
            <div className="mb-10 flex justify-between gap-16">
                <SearchBar />
                <ProfileInfo name={user.name} />
            </div>
        </div>
    );
}
