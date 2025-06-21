
type Props = {
    image: string
    alt: string
    heading: string
    description: string
}

function LimitationsContentBanner({ image, alt, heading, description }: Props) {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-[16px] shadow-[0_16px_56px_rgba(143,174,207,.25)]">
            <div className="flex items-center gap-4">
                <img className="object-contain" src={image} alt={alt} />
                <h3 className="font-semibold text-blue-900 text-[20px] leading-[150%] tracking-[-5%]">{heading}</h3>
            </div>

            <p className="text-grey-500 leading-[150%] ">
                {description}
            </p>
        </div>
    )
}

export default LimitationsContentBanner