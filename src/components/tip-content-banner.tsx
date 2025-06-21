type Props = {
    image: string
    heading: string
    description: string
}

function TipContentBanner({ image, heading, description }: Props) {
    return (
        <div className="flex flex-col gap-8">
            <img className="Object-contain w-[64px] aspect-square rounded-full" src={image} alt="" />

            <div className="flex flex-col gap-6">
                <h3 className="text-blue-900 font-semibold text-[24px] leading-[29px]">{heading}</h3>
                <p className="text-grey-500 leading-[150%]">{description}</p>
            </div>
        </div>
    )
}

export default TipContentBanner