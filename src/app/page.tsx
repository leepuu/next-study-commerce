import { getProductAPI } from '@/app/_api/product';
import ProductItem from '@/app/_components/ProductItem';

export default async function Index() {
  const products = await getProductAPI();

  return (
    <>
      <div className='grid grid-cols-[repeat(4,_minmax(250px,_1fr))] gap-3'>
        {products.map((item: any) => {
          const detail = item.properties;
          return (
            <ProductItem
              key={item.id}
              image={item.cover.file.url}
              name={detail.name.title[0].plain_text}
              size={detail.size.number}
              brand={detail.brand.select.name}
              category={detail.category.select.name}
              price={detail.price.number}
              id={item.id}
            />
          );
        })}
      </div>
    </>
  );
}
