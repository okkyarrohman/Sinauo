export default function SecondaryButton(props) {
    return (
        <button
            className="rounded-[0.625rem] py-3 px-12 text-lg font-bold border border-black"
            type="button"
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    );
}
