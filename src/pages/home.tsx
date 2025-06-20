import { assets } from '@assets'
import { BMIForm, Screen, Section } from '@components'

function Home() {
    return (
        <Screen className='flex flex-col gap-[64px]'>

            {/* Section 1 */}
            <Section className='relative flex flex-col items-center mb-[25rem]'>
                <div
                    className='pt-8 px-6 relative min-h-[640px] bg-gradient-to-r from-[rgb(214,252,254, .0)] to-[#D6E6FE] rounded-b-[35px] flex flex-col justify-start items-center gap-8'
                >
                    <img className='object-contain w-[40px] aspect-square' src={assets.logo} alt="Logo" />

                    <div className='flex flex-col gap-[24px]'>
                        <h1 className='font-semibold text-[#253347] text-[48px] tracking-[-5%] leading-[110%] text-center'>
                            Body Mass Index Calculator
                        </h1>

                        <p
                            className='text-[#5E6E85] leading-[150%] text-center'
                        >
                            Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                        </p>
                    </div>
                </div>

                <BMIForm />
            </Section>

            {/* Section 2 */}
            <Section className='flex flex-col gap-[48px]'>
                <img className='object-contain w-full' src={assets.imageManEating} alt="Man Eating Image" />

                <div className='flex flex-col gap-8 px-6'>
                    <h2
                        className='text-blue-900 font-semibold text-[32px] leading-[110%] tracking-[-5%] '
                    >What your BMI result means</h2>

                    <p className='text-grey-500 leading-[150%]'>
                        A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
                    </p>
                </div>
            </Section>

            {/* Section 3 */}
            <Section className='px-6 py-12 '>
                {/* this is the third section */}
            </Section>

            {/* Section 4 */}
            <Section>
                {/* this is the fourth section */}
            </Section>

        </Screen>
    )
}

export default Home