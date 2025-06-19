import type React from "react"

type Props = {
    className?: string
    children?: React.ReactNode
}

function Screen(props: Props) {
    const { className, children } = props
    return (
        <main className={`min-w-screen min-h-screen ${className}`}>
            {children}
        </main>
    )
}

export default Screen