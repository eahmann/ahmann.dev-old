import Container from '../shared/Container'
import SectionWrapper from '../shared/SectionWrapper/SectionWrapper'

interface AboutProps {
  content: string
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <SectionWrapper id="about" title="About" ariaLabel="">
      <div className="w-full my-4">
        <div
          className={
            'prose text-gray-300 font-sans max-w-none prose-strong:text-gray-100'
          }
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </div>
    </SectionWrapper>
  )
}

export default About
