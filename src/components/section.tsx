import React from 'react'

type Props = {
    className?: string
    children?: React.ReactNode
}

function Section({ className, children }: Props) {
    return (
        <section className={`${className}`}>
            {children}
        </section>
    )
}

export default Section