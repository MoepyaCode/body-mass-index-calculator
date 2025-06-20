import MeasureInput from './measure-input'
import MeasureInputWrapper from './measure-input-wrapper'

function ImperialInputs() {
    return (
        <MeasureInputWrapper
            flex='flex-col'
        >
            {/* Height */}
            <MeasureInputWrapper flex='flex-row'>
                <MeasureInput
                    heading='Height'
                    name="feet"
                    id="feet"
                    measure="ft"
                />
                <MeasureInput
                    name="inches"
                    id="inches"
                    measure="in"
                />
            </MeasureInputWrapper>

            {/* Weight */}
            <MeasureInputWrapper flex='flex-row'>
                <MeasureInput
                    heading='Weight'
                    name="stone"
                    id="stone"
                    measure="st"
                />
                <MeasureInput
                    name="pounds"
                    id="pounds"
                    measure="lbs"
                />
            </MeasureInputWrapper>
        </MeasureInputWrapper>
    )
}

export default ImperialInputs