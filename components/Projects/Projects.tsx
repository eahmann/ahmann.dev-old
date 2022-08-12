import ButtonLink from '../shared/ButtonLink'
import SectionWrapper from '../shared/SectionWrapper/SectionWrapper'

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects" ariaLabel="">
      <div className="h-96 w-full border-2 my-4">
        <span>Some project details go here</span>
      </div>{' '}
      <div className="h-96 w-full border-2 my-4">
        <span>Some project details go here</span>
      </div>{' '}
      <div className="h-96 w-full border-2 my-4">
        <span>Some project details go here</span>
      </div>{' '}
      <div className="h-96 w-full border-2 my-4">
        <span>Some project details go here</span>
      </div>
      <div className="my-12">
        <ButtonLink link={{ href: '/#projects' }} className="">
          <span>View project archive</span>
        </ButtonLink>
      </div>
    </SectionWrapper>
  )
}

export default Projects
