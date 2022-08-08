import Container from '../Container'

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Container className="h-screen">
      <div className="grid place-items-center h-full">
        <div className="lg:grid lg:gap-8">
          <div className="text-left lg:w-[64rem] md:max-w-5xl md:mx-auto">
            <h1>
              <span className="block text-lg font-semibold tracking-wide text-pizazz-500 sm:text-base lg:text-lg xl:text-lg mb-2">
                Hi, my name is
              </span>
              <span className="mt-1 block text-4xl font-extrabold font-sans sm:text-5xl xl:text-6xl leading-[3.5rem]">
                <span className="block text-gray-200">Eric Ahmann.</span>
                <span className="block text-gray-400 pt-2">
                  I am a software developer.
                </span>
              </span>
            </h1>
            <p className="mt-3 font-sans text-base text-gray-400 sm:mt-5 sm:text-sm lg:text-sm xl:text-md max-w-md">
              I&apos;m currently working on personal projects to push my skills
              to the next level. Check out my portfolio below to see what
              I&apos;m working on.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero
