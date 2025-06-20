import { assets } from '@assets'
import { BMIForm, Screen, Section } from '@components'

function Home() {
    return (
        <Screen>

            {/* Section 1 */}
            <Section
                className='relative bg-gradient-to-r from-[#D6FCFE] to-[#D6E6FE] min-h-[640px] rounded-b-[35px] flex flex-col justify-start items-center gap-8'
            >
                <img className='object-contain w-[40px] aspect-square' src={assets.logo} alt="Logo" />

                <h1 className='font-semibold text-[#253347] text-[48px] tracking-[-5%] leading-[110%] text-center'>
                    Body Mass Index Calculator
                </h1>

                <p
                    className='text-[#5E6E85] leading-[150%] text-center'
                >
                    Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                </p>

                <BMIForm />
            </Section>

            {/* Section 2 */}
            <Section>

            </Section>

            {/* Section 3 */}
            <Section>

            </Section>

            {/* Section 4 */}
            <Section>

            </Section>

        </Screen>
    )
}

export default Home