import { getProductSearchAPI } from '@/app/_api/product';
import EmptySearch from '@/app/_components/Empty/EmptySearch';
import ProductItem from '@/app/_components/ProductItem';

export default async function Search({
  searchParams
}: {
  searchParams: { [key: string]: string };
}) {
  const products = await getProductSearchAPI(searchParams.query);

  return (
    <div>
      {products.length > 0 ? (
        <>
          <h1 className='pb-10 pt-5 text-center text-3xl'>
            &quot;
            <em className='font-bold not-italic'>{searchParams.query}</em>
            &quot; 검색 결과 페이지
          </h1>
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
      ) : (
        <EmptySearch value={searchParams.query} />
      )}
    </div>
  );
}
