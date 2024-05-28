import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });

export const notionCart = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_CART_KEY
});

export default notion;
