
type Props = {
    result: string | undefined
}

function OutputBMI({ result }: Props) {
    const details = {
        heading: result ? `Your BMI is ${result}` : 'Welcome!',
        description: result ? '' : 'Enter your height and weight and you’ll see your BMI result here'
    }

    return (
        <div
            className='bg-blue-500 text-white p-8 rounded-[16px] flex flex-col gap-6'
        >
            <p
                className="font-semibold text-[24px] leading-[29px] tracking-[-5%]"
            >
                {details.heading}
            </p>

            <p
                className="text-[14px] leading-[150%]"
            >
                {details.description}
            </p>
        </div>
    )
}

export default OutputBMI