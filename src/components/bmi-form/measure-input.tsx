
type Props = {
    setting: 'metric' | 'imperial'
    heading?: string
    name: string
    id: string
    measure: string
}

function MeasureInput({ setting, heading, name, id, measure }: Props) {
    return (
        <div className='flex flex-col gap-[6px]'>
            <h6
                className="text-grey-500 leading-[150%] text-[14px]"
            >{heading ?? <pre> </pre>}</h6>

            <label
                className={`relative ${setting === 'metric' ? 'w-full' : 'max-w-[132px]'} w-full px-6 border border-grey-500 h-[77px] rounded-[12px] flex items-center justify-between`}
                htmlFor={id}
            >
                <input
                    className={`${setting === 'metric' ? 'max-w-[calc(100%-24px*2)]' : 'max-w-[60%]'} border-none outline-none max-w-auto font-semibold text-blue-900 placeholder:text-grey-500 text-[24px] leading-[29px] tracking-[-5%]`}
                    type="number"
                    name={name}
                    id={id}
                    placeholder="0"
                />
                <span
                    className=" text-blue-500 text-[24px] leading-[29px] tracking-[-5%] font-semibold"
                >{measure}</span>
            </label>
        </div>
    )
}

export default MeasureInput