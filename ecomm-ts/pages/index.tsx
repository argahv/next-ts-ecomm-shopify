import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Grid>
        {products?.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline='Cupcake ipsum dolor sit'
        description='Marzipan I love ice cream lemon drops sesame snaps powder ice cream icing sesame snaps. Jelly-o gummi bears pudding bear claw muffin sesame snaps halvah. I love oat cake biscuit I love cupcake tootsie roll cupcake. Carrot cake donut cake lollipop candy dragée I love.

Gummi bears apple pie toffee gummi bears wafer. Oat cake icing gummi bears donut toffee candy canes I love toffee. Pudding biscuit toffee gummies cotton candy ice cream apple pie lollipop. I love cotton candy carrot cake cake wafer gummies bonbon muffin.'
      />
      <Marquee>
        {products?.slice(0, 3).map((product) => (
          <ProductCard variant='slim' key={product.id} product={product} />
        ))}
      </Marquee>
      <Grid layout='B'>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant='secondary'>
        {products?.slice(0, 3).map((product) => (
          <ProductCard variant='slim' key={product.id} product={product} />
        ))}
      </Marquee>
    </>
  );
};

Home.Layout = Layout;

export const getStaticProps = async () => {
  const config = getConfig();
  const products = await getAllProducts(config);
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
};

export default Home;
