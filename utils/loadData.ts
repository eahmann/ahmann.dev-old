import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

function getContent(folder: string, filename: string, fields: string[] = []) {
  const fullPath = join(folder, filename)
  const fileContents = readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach(field => {
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

function getAbout() {
  const jobsDirectory = join(process.cwd(), 'content/about')
  const filename = readdirSync(jobsDirectory)

  const about = getContent(jobsDirectory, filename[0], ['content'])

  return about
}

function getAllJobs() {
  const jobsDirectory = join(process.cwd(), 'content/jobs')
  const filenames = readdirSync(jobsDirectory)

  const jobs = filenames
    .map(filename =>
      getContent(jobsDirectory, filename, [
        'date',
        'title',
        'company',
        'location',
        'range',
        'url',
        'content'
      ])
    )
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))
  return jobs
}

function getFeaturedProjects() {
  const jobsDirectory = join(process.cwd(), 'content/projects')
  const filenames = readdirSync(jobsDirectory)

  const jobs = filenames
    .map(filename =>
      getContent(jobsDirectory, filename, [
        'date',
        'title',
        'company',
        'location',
        'range',
        'url',
        'content'
      ])
    )
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))
  return jobs
}

export function getIndexData() {
  const about = getAbout()
  const jobs = getAllJobs()
  const projects = getFeaturedProjects()
  return { about, jobs, projects }
}
