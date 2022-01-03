import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import Post from "./post";
import Page from "./page";
import Product from "./product";
import Home from "./home";
import Blog from "./blog";
import Products from "./products";
import Footer from "./footer";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;700;800&display=swap");

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            font-family: Poppins, Helvetica, sans-serif;
            background-color: #fff9ad;
            padding-bottom: 52px;
          }
        `}
      />
      <Header>
        <HeaderContent>
          <h1>Cool Chairs</h1>
          <Menu>
            <Link link="/">Homepage</Link>
            <Link link="/products">Products</Link>
            <Link link="/blog">Blog</Link>
          </Menu>
        </HeaderContent>
      </Header>
      <Main>
        <Switch>
          <Home when={data.isHome} />
          <Products when={data.isProductsArchive} />
          <Blog when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Product when={data.isProducts} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default connect(Root);

// File: /packages/my-first-theme/src/components/index.js

// ...
const Header = styled.header`
  h1 {
    color: #4a4a4a;
  }
`;
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`;
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: #7d98a1;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }
`;
