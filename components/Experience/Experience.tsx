import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Container from '../shared/Container'
import SectionWrapper from '../shared/SectionWrapper/SectionWrapper'

interface ExperienceProps {
  jobs: Array<{
    date: string
    title: string
    company: string
    location: string
    range: string
    content: string
  }>
}

const Experience: React.FC<ExperienceProps> = ({ jobs }) => {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: any) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      ariaLabel=""
      className="lg:min-h-[500px]"
    >
      <Tab.Group
        as="div"
        className="mt-6 grid grid-cols-1 gap-y-2 pt-10 sm:gap-y-6 lg:grid-cols-12 lg:pt-0 "
        vertical={tabOrientation === 'vertical'}
      >
        {({ selectedIndex }) => (
          <>
            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 md:overflow-visible sm:pb-0 lg:col-span-4 snap-x snap-mandatory scroll-mx-[50%] md:snap-none">
              <Tab.List className="relative z-10 flex grow gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                {jobs.map((job, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={clsx(
                      'group relative hover:bg-white/10 lg:hover:bg-white/5 scroll-ml-7 snap-start snap-always last:mr-[80vw] md:last:mr-0 md:scroll-ml-0 md:snap-none'
                    )}
                  >
                    <h3>
                      <Tab
                        className={clsx(
                          'font-display text-sm text-left h-full w-full  py-1 px-4 lg:p-5 [&:not(:focus-visible)]:focus:outline-none',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-gray-200'
                        )}
                      >
                        {selectedIndex === featureIndex ? (
                          <motion.span
                            className="absolute inset-0 bg-white/10 border-l-4 border-brand  [&:not(:focus-visible)]:focus:outline-none"
                            layoutId="underline"
                          />
                        ) : null}
                        {job.company}
                      </Tab>
                    </h3>
                  </div>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels className="lg:col-span-8">
              {jobs.map((job, index) => (
                <Tab.Panel key={index} unmount={false}>
                  <div className="relative sm:px-6">
                    <div className="absolute  bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                    <p className="relative mx-auto max-w-2xl text-base text-white text-left font-sans">
                      <span className="text-xl underline decoration-brand ">
                        {job.title}
                      </span>
                      <span className="block font-roboto text-md">
                        {job.location}
                      </span>
                      <span className="block font-roboto text-md mb-2">
                        {job.range}
                      </span>
                      <div
                        className={
                          'prose text-gray-300 prose-strong:text-gray-100'
                        }
                        dangerouslySetInnerHTML={{
                          __html: job.content
                        }}
                      />
                    </p>
                  </div>
                  <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"></div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </>
        )}
      </Tab.Group>
    </SectionWrapper>
  )
}

export default Experience
