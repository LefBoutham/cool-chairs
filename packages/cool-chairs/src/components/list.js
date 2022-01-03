import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import FeaturedMedia from "./featuredmedia";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Items>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id];
          const fmedia = post.featured_media;
          return (
            <Single key={item.id}>
              <Link link={post.link}>
                <FeaturedMedia id={fmedia} />
                {post.title.rendered}
                <br />
              </Link>
            </Single>
          );
        })}
      </Items>
    </>
  );
};

export default connect(List);

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

const Single = styled.div`
  & > a {
    display: block;
    text-align: center;
    margin: 6px 0;
    color: #242424;
    font-weight: 500;
    text-decoration: none;
  }
`;
