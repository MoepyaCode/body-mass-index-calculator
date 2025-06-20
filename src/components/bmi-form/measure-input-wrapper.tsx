import React from 'react'

type Props = {
    flex: 'flex-col' | 'flex-row'
    children: React.ReactNode
}

function MeasureInputWrapper({ children, flex }: Props) {
    return (
        <div className={`flex ${flex} gap-4 ${flex === 'flex-row' ? '' : ''}`}>
            {children}
        </div>
    )
}

export default MeasureInputWrapper