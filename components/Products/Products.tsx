import { products } from "@/data/products.data";
import ProductComp from "./ProductComp";

const Products = () => {
  return (
    <section className="py-32 lg:py-64 lg:gap-48">
      {products.map((product, index) => (
        <ProductComp
          key={index}
          title={product.title}
          paragraph={product.paragraph}
          buttonTitle={product.buttonTitle}
          buttonRedirectTo={product.buttonRedirectTo}
          image={product.image}
          index={index}
          productsLength={products.length}
        />
      ))}
    </section>
  );
};
export default Products;
