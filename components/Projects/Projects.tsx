import ButtonLink from '../shared/ButtonLink'
import SectionWrapper from '../shared/SectionWrapper/SectionWrapper'

interface ProjectsProps {
  projects: any
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <SectionWrapper id="projects" title="Featured Projects" ariaLabel="">
      {projects.map((project: any, index: any) => (
        <div key={index} className="w-full my-4 text-gray-300">
          {project.title}
          <div
            className={'prose text-gray-300 prose-strong:text-gray-100'}
            dangerouslySetInnerHTML={{
              __html: project.content
            }}
          />
        </div>
      ))}
      <div className="my-12">
        <ButtonLink link={{ href: '/#projects' }} className="">
          <span>View project archive</span>
        </ButtonLink>
      </div>
    </SectionWrapper>
  )
}

export default Projects
