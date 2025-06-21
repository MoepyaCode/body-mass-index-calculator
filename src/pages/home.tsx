import { assets } from '@assets'
import { BMIForm, LimitationsContentBanner, Screen, Section, TipContentBanner } from '@components'

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
            <Section className='px-6 py-12 flex flex-col gap-[40px]'>
                <TipContentBanner
                    image={assets.iconEating}
                    heading='Healthy eating'
                    description='Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'
                />

                <TipContentBanner
                    image={assets.iconExercise}
                    heading='Regular exercise'
                    description='Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'
                />

                <TipContentBanner
                    image={assets.iconSleep}
                    heading='Adequate sleep'
                    description='Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.'
                />
            </Section>

            {/* Section 4 */}
            <Section className='px-6 flex flex-col gap-[56px]'>
                <div className='flex flex-col gap-8'>
                    <h2 className='font-semibold text-[32px] leading-[110%] tracking-[-5%]'>
                        Limitations of BMI
                    </h2>

                    <p className='text-grey-500 leading-[150%]'>
                        Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.
                    </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <LimitationsContentBanner
                        image={assets.iconGender}
                        alt='Icon Gender'
                        heading='Gender'
                        description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
                    />

                    <LimitationsContentBanner
                        image={assets.iconAge}
                        alt='Icon Age'
                        heading='Age'
                        description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
                    />

                    <LimitationsContentBanner
                        image={assets.iconMuscle}
                        alt='Icon Muscle'
                        heading='Muscle'
                        description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
                    />

                    <LimitationsContentBanner
                        image={assets.iconPregnancy}
                        alt='Icon Pregnancy'
                        heading='Pregnancy'
                        description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
                    />

                    <LimitationsContentBanner
                        image={assets.iconRace}
                        alt='Icon Race'
                        heading='Race'
                        description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
                    />
                </div>
            </Section>

        </Screen>
    )
}

export default Home