import { remark } from 'remark'
import html from 'remark-html'
import { unified } from 'unified'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'

export default async function markdownToHtml(markdown: string) {
  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown)

  return html.toString()
}
