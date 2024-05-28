'use server';

import { ProductItem } from '@/app/_type/ProductItem';

import notion from './notion';

const database_id = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!;
const cart_database_id = process.env.NEXT_PUBLIC_NOTION_CART_DATABASE_ID!;

export const getProductAPI = async () => {
  const response = await notion.databases.query({
    database_id: database_id
  });

  return response.results;
};

export const getProductPageAPI = async (id: string) => {
  const response = await notion.pages.retrieve({
    page_id: id
  });

  return response;
};

export const getProductSearchAPI = async (value: string) => {
  const response = await notion.search({
    query: value,
    filter: {
      value: 'page',
      property: 'object'
    }
  });
  return response.results;
};

export const getCartProductAPI = async () => {
  const response = await notion.databases.query({
    database_id: cart_database_id
  });

  return response.results;
};

export const addCartProductPageAPI = async (items: ProductItem) => {
  const response = await notion.pages.create({
    parent: {
      type: 'database_id',
      database_id: cart_database_id
    },
    properties: {
      name: {
        title: [
          {
            text: {
              content: items.name
            }
          }
        ]
      },
      price: { number: items.price },
      count: { number: items.count }
    }
  });
  return response;
};

export const updateCartProductPageAPI = async (id: string, count: number) => {
  const response = await notion.pages.update({
    page_id: id,
    properties: {
      count: {
        number: count
      }
    }
  });
  return response;
};

export const deleteCartProductPageAPI = async (id: string) => {
  const response = await notion.pages.update({
    page_id: id,
    in_trash: true
  });
  return response;
};
