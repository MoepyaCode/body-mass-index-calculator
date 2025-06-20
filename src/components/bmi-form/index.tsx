import { useState } from "react";
import ImperialInputs from "./imperial-inputs"
// import MetricInputs from "./metric-inputs" 
import OutputBMI from "./output"
import RadioButton from "./radio-button"
import MetricInputs from "./metric-inputs";

function BMIForm() {
  const [setting, setSetting] = useState<'metric' | 'imperial'>('metric');

  const handleFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.id;
    if (value === 'metric' || value === 'imperial') {
      setSetting(value);
    }
  }

  return (
    <div className="absolute max-w-[328px] bottom-[-60%] bg-white p-6 rounded-[24px] flex flex-col gap-[24px] w-full  mx-6 shadow-[16px_32px_56px_rgba(143,174,207,0.25)]">

      <form
        onChange={handleFormChange}
        className="flex flex-col gap-[24px]">
        {/* Form Heading */}
        <p className="text-[24px] font-semibold text-blue-900 tracking-[-5%] leading-[29px]">
          Enter your details below
        </p>

        {/* Radio Input Wrapper */}
        <div className="flex items-center justify-between">
          <RadioButton
            name="bmi-radio"
            id="metric"
            label="Metric"
            defaultChecked={true}
          />

          <RadioButton
            name="bmi-radio"
            id="imperial"
            label="Imperial"
          />
        </div>

        {/* Inputs based off of Radio Button Selected */}
        {setting === 'metric' ? (
          <MetricInputs />
        ) : (
          <ImperialInputs />
        )}
      </form>

      {/* Output BMI Result */}
      <OutputBMI
        result={undefined}
      />
    </div>
  )
}

export default BMIForm