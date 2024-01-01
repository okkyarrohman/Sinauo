export default function TableItem({ item, capitalize, wrap, className }) {
    return (
        <td
            className={
                `py-6 px-4 text-sm ${capitalize ? "capitalize " : " "} ${
                    wrap ? " " : "whitespace-nowrap "
                }` + className
            }
        >
            {item}
        </td>
    );
}
