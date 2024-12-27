import Description from "./Description";
import ImageComp from "./ImageComp";
import HorizontalLine from "./HorizontalLine";
import { Product } from "@/interfaces/Product.interface";
import ProductsButtonComp from "./ProductsButtonComp";

interface Props extends Product {
  index: number;
  productsLength: number;
}

const ProductComp = ({
  title,
  paragraph,
  buttonTitle,
  buttonRedirectTo,
  image,
  index,
  productsLength,
}: Props) => {
  return (
    <>
      <div className="flex lg:hidden flex-col gap-10">
        <Description
          title={title}
          paragraph={paragraph}
          buttonTitle={buttonTitle}
          buttonRedirectTo={buttonRedirectTo}
        />
        <ImageComp title={title} image={image} index={index} />
        <ProductsButtonComp
          buttonRedirectTo={buttonRedirectTo}
          buttonTitle={buttonTitle}
        />
        {index !== productsLength - 1 && <HorizontalLine />}
      </div>
      <div className="hidden lg:grid grid-cols-2 pb-64 justify-center items-center">
        {(index + 1) % 2 === 0 ? (
          <>
            <ImageComp title={title} image={image} index={index} />
            <div>
              <Description
                title={title}
                paragraph={paragraph}
                buttonTitle={buttonTitle}
                buttonRedirectTo={buttonRedirectTo}
              />
              <ProductsButtonComp
                buttonRedirectTo={buttonRedirectTo}
                buttonTitle={buttonTitle}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <Description
                title={title}
                paragraph={paragraph}
                buttonTitle={buttonTitle}
                buttonRedirectTo={buttonRedirectTo}
              />
              <ProductsButtonComp
                buttonRedirectTo={buttonRedirectTo}
                buttonTitle={buttonTitle}
              />
            </div>
            <ImageComp title={title} image={image} index={index} />
          </>
        )}
        {index !== productsLength - 1 && <HorizontalLine />}
      </div>
    </>
  );
};
export default ProductComp;
