export default function PrimaryButton(props) {
    return (
        <button
            className="rounded-[0.625rem] py-3 px-12 text-lg font-bold bg-primary text-white"
            type="submit"
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    );
}
