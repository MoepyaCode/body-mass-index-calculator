import { assets } from '@assets'
import { Screen, Section } from '@components'

function Home() {
    return (
        <Screen>

            {/* Section 1 */}
            <Section
                className='bg-gradient-to-r from-[#D6FCFE] to-[#D6E6FE] min-h-[640px] rounded-b-[35px] flex justify-center items-start gap-8'
            >
                <img src={assets.logo} alt="Logo" />

                <h1>
                    Body Mass Index Calculator
                </h1>
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