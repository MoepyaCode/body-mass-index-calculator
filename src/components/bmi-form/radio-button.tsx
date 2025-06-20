
type Props = {
    name: string
    id: string
    label: string
    defaultChecked?: boolean
}

function RadioButton({ name, id, label, defaultChecked }: Props) {
    return (
        <label
            htmlFor={id}
            className="flex-1 flex items-center gap-4"
        >
            <input
                type="radio"
                name={name}
                id={id}
                defaultChecked={defaultChecked}
                className="relative flex justify-center items-center appearance-none w-[31px] aspect-square border border-grey-500 rounded-full before:w-[15px] before:rounded-full checked:bg-blue-100 checked:border-blue-100  checked:before:aspect-square checked:before:bg-blue-500  before:transition-colors before:duration-300 before:ease-in"
            />
            <span
                className=""
            >
                {label}
            </span>
        </label>
    )
}

export default RadioButton