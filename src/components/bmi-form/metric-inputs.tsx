import MeasureInput from './measure-input'
import MeasureInputWrapper from './measure-input-wrapper'

function MetricInputs() {
    return (
        <MeasureInputWrapper flex='flex-col'>
            <MeasureInput
                setting='metric'
                heading='Height'
                name="height"
                id="height"
                measure="cm"
            />

            <MeasureInput
                setting='metric'
                heading='Weight'
                name="weight"
                id="weight"
                measure="kg"
            />
        </MeasureInputWrapper>
    )
}

export default MetricInputs