import { getProductPageAPI } from '@/app/_api/product';
import ProductInfo from '@/app/_components/ProductInfo';
import ProductMarkdown from '@/app/_components/ProductMarkdown';

type PageParams = {
  slug: string;
};

async function getProjects({ slug }: { slug: string }): Promise<any> {
  const product = await getProductPageAPI(slug);
  return product;
}

export default async function Product({ params }: { params: PageParams }) {
  const { cover, properties, id } = await getProjects(params);
  const { name, brand, price, size } = properties;
  return (
    <div className='m-auto w-full max-w-[1000px]'>
      <ProductInfo
        id={id}
        thumbSrc={cover.file.url}
        thumbAlt={name.title[0].plain_text}
        brand={brand.select.name}
        name={name.title[0].plain_text}
        price={price.number}
        size={size.number}
      />
      <ProductMarkdown params={params} />
    </div>
  );
}
