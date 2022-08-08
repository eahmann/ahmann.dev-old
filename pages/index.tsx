import Header from '@/components/Header'
import Hero from '@/components/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eric Ahmann - Software Developer</title>
        <meta
          name="description"
          content="I'm currently working on personal projects to push my skills to the next level. Check out my portfolio to see what I'm working on."
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home
