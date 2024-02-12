import TextInput from "../TextInput";

export default function SearchBar({ value, onChange }) {
    return (
        <form className="w-full relative">
            <div className="absolute top-2 left-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.4847 0C19.2729 0 24.7945 5.17315 24.7945 11.533C24.7945 12.639 24.6275 13.7092 24.3159 14.7225C23.4424 17.5629 23.341 20.9947 25.5117 23.0242C25.8821 23.3712 25.8833 23.9326 25.513 24.2796C25.3284 24.4548 25.0844 24.5413 24.8417 24.5413C24.6003 24.5413 24.3576 24.4548 24.1718 24.2819C21.8546 22.1171 18.3132 22.1223 15.2116 22.782C14.3342 22.9686 13.4215 23.0672 12.4847 23.0672C5.69644 23.0672 0.173584 17.8928 0.173584 11.533C0.173584 5.17315 5.69644 0 12.4847 0ZM12.4847 1.77649C6.74185 1.77649 2.06973 6.15259 2.06973 11.533C2.06973 16.9134 6.74185 21.2907 12.4847 21.2907C18.2262 21.2907 22.8983 16.9134 22.8983 11.533C22.8983 6.15259 18.2262 1.77649 12.4847 1.77649Z"
                        fill="#8A8A8A"
                    />
                </svg>
            </div>
            <TextInput
                className="w-full px-20 shadow-custom"
                placeholder="Search Courses, Documents, Activities... "
                value={value}
                onChange={onChange}
            />
        </form>
    );
}
