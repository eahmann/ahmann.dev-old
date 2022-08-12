import Container from '../shared/Container'
import SectionWrapper from '../shared/SectionWrapper/SectionWrapper'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <SectionWrapper id="about" title="About" ariaLabel="">
      {' '}
      <div className="h-96 w-full border-2 my-4">
        <span>Some about me details go here</span>
      </div>
    </SectionWrapper>
  )
}

export default About
