import { NotionToMarkdown } from 'notion-to-md';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import notion from '@/app/_api/notion';

const n2m = new NotionToMarkdown({ notionClient: notion });

type PageParams = {
  slug: string;
};

export default async function ProductMarkdown({
  params
}: {
  params: PageParams;
}) {
  const mdblocks = await n2m.pageToMarkdown(params.slug);
  const mdString = n2m.toMarkdownString(mdblocks);

  const htmlString = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .processSync(mdString.parent)
    .toString();

  return (
    <div
      className='mt-[100px] '
      dangerouslySetInnerHTML={{ __html: htmlString }}
    ></div>
  );
}
