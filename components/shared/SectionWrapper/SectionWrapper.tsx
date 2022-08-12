import Container from '../Container'

interface SectionWrapperProps {
  id: string
  title: string
  ariaLabel?: string
  className?: string
  children: React.ReactNode
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  ariaLabel,
  className,
  children
}) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className="relative overflow-hidden min-h-[450px] mb-20 pt-16"
    >
      <Container className="relative">
        <div className="max-w-2xl xl:max-w-none">
          <h2 className="font-display text-xl tracking-tight text-brand">
            {title}
          </h2>
        </div>
        {children}
      </Container>
    </section>
  )
}

export default SectionWrapper
