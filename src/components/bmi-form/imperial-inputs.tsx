import MeasureInput from './measure-input'
import MeasureInputWrapper from './measure-input-wrapper'

function ImperialInputs() {
    const setting = 'imperial'
    return (
        <MeasureInputWrapper
            flex='flex-col'
        >
            {/* Height */}
            <MeasureInputWrapper flex='flex-row'>
                <MeasureInput
                    setting={setting}
                    heading='Height'
                    name="feet"
                    id="feet"
                    measure="ft"
                />
                <MeasureInput
                    setting={setting}
                    name="inches"
                    id="inches"
                    measure="in"
                />
            </MeasureInputWrapper>

            {/* Weight */}
            <MeasureInputWrapper flex='flex-row'>
                <MeasureInput
                    setting={setting}
                    heading='Weight'
                    name="stone"
                    id="stone"
                    measure="st"
                />
                <MeasureInput
                    setting={setting}
                    name="pounds"
                    id="pounds"
                    measure="lbs"
                />
            </MeasureInputWrapper>
        </MeasureInputWrapper>
    )
}

export default ImperialInputs