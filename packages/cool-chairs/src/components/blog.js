import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import dayjs from "dayjs";

const Blog = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Items>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id];
          const formattedDate = dayjs(post.date).format("DD.MM.YYYY");

          return (
            <Single key={item.id}>
              <h2>
                <Link link={post.link}>
                  {post.title.rendered}
                  <br />
                </Link>
              </h2>
              <p>{formattedDate}</p>
              <Link link={post.link}>Read the full post</Link>
            </Single>
          );
        })}
      </Items>
    </>
  );
};

export default connect(Blog);

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const Single = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  a {
    display: block;
    margin: 6px 0;
    color: #242424;
    font-weight: 500;
    text-decoration: none;
  }
`;

const Excerpt = styled.div`
  display: block;
  margin: 6px 0;
  text-decoration: none;
`;
