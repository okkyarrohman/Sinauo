export default function TableHead({ head }) {
    return (
        <thead className="font-medium border-b-2 border-[#EAECF0] text-left bg-[#F9FAFB]">
            <tr>
                {head.map((item, index) => (
                    <th
                        key={index}
                        scope="col"
                        className="py-4 px-4 whitespace-nowrap"
                    >
                        {item}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
