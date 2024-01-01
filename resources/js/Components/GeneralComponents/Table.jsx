export default function Table({ children }) {
    return (
        <div className="overflow-x-auto shadow-custom">
            <table className="w-full text-sm border-1 border-[#EAECF0] bg-white">
                {children}
            </table>
        </div>
    );
}
