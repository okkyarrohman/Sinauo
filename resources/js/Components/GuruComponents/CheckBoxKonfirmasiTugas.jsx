export default function CheckBoxKonfirmasiTugas(props) {
    return (
        <div className="flex gap-4 font-medium">
            <label className="flex gap-1 items-center">
                <input
                    type="checkbox"
                    id={props.id}
                    value="Terima"
                    checked={props.selectedValue == "Terima"}
                    onChange={props.onChange}
                    className="rounded-full"
                />
                Terima
            </label>
            <label className="flex gap-1 items-center">
                <input
                    type="checkbox"
                    id={props.id}
                    value="Tolak"
                    checked={props.selectedValue == "Tolak"}
                    onChange={props.onChange}
                    className="rounded-full"
                />
                Tolak
            </label>
        </div>
    );
}
