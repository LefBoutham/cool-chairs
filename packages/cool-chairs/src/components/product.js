import React from "react";
import { connect, styled } from "frontity";
import FeaturedMedia from "./featuredmedia";

const Product = ({ state }) => {
  const data = state.source.get(state.router.link);
  const product = state.source[data.type][data.id];

  return (
    <>
      <ProductStyle>
        <FeaturedMedia id={product.acf.product_logo} />
        <ProductInfo>
          <h1>{product.acf.name}</h1>
          <Price>{product.acf.price} €</Price>
          <div dangerouslySetInnerHTML={{ __html: product.acf.description }} />
        </ProductInfo>
      </ProductStyle>
    </>
  );
};

export default connect(Product);

const ProductStyle = styled.div`
  display: flex;

  img {
    max-width: 400px;
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;

    img {
      width: 100%;
    }
  }
`;

const ProductInfo = styled.div`
  padding: 0em 1em;
`;

const Price = styled.p`
  font-size: 1.5em;
  font-weight: 600;
`;
