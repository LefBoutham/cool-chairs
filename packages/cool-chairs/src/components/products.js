import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import FeaturedMedia from "./featuredmedia";

const Products = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Heading>Our chairs</Heading>
      <Items>
        {data.items.map((item) => {
          const product = state.source[item.type][item.id];
          const fmedia = product.featured_media;
          return (
            <Single key={item.id}>
              <Link link={product.link}>
                <FeaturedMedia id={fmedia} />
                {product.title.rendered}
                <Price>{product.acf.price} €</Price>
                <div
                  dangerouslySetInnerHTML={{ __html: product.acf.description }}
                />
              </Link>
            </Single>
          );
        })}
      </Items>
    </>
  );
};

export default connect(Products);

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

const Single = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    color: #242424;
    font-weight: 500;
    text-decoration: none;
  }
`;

const Heading = styled.div`
  margin: 0;
  font-size: 2em;
  font-weight: 600;
`;

const Price = styled.p`
  font-size: 1.5em;
  font-weight: 600;
`;
