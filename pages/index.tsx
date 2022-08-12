// import Experience from '@/components/Experience/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { getIndexData } from '@/utils/loadData'
import markdownToHtml from '@/utils/markdownToHtml'
import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
const Experience = dynamic(() => import('@/components/Experience/Experience'), {
  ssr: false
})

type Props = {
  jobs: any
  about: any
  projects: any
}

const Home: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>Eric Ahmann - Software Developer</title>
        <meta
          name="description"
          content="I'm currently working on personal projects to push my skills to the next level. Check out my portfolio to see what I'm working on."
        />
      </Head>
      <main>
        <Hero />
        <About content={props.about.content} />
        <Experience jobs={props.jobs} />
        <Projects projects={props.projects} />
      </main>
    </>
  )
}

export async function getStaticProps(context: any) {
  let data = getIndexData()

  let array: any[] = []
  async function allNodes(
    obj: {
      [x: string]: any
      about?: { [key: string]: string }
      jobs?: { [key: string]: string }[]
      projects?: { [key: string]: string }[]
    },
    key: string,
    array: any[]
  ) {
    if ('object' === typeof obj) {
      for (let k in obj) {
        if (k === key) {
          array.push(obj[k])
          obj[k] = await markdownToHtml(obj[k] || '')
        } else {
          allNodes(obj[k], key, array)
        }
      }
    }
    return array
  }

  let results = allNodes(data, 'content', array)
  console.log(results)

  const test = await markdownToHtml(data.jobs[0].content || '')
  console.log(test)
  data.jobs[0].content = test
  console.log(data)

  return { props: data }
}

export default Home
