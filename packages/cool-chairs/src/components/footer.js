import React from "react";
import { connect, styled } from "frontity";

const Footer = ({ state }) => {
  return (
    <FooterMain>
      <FooterInner>
        <ul>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Shipping</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </FooterInner>
    </FooterMain>
  );
};

export default connect(Footer);

const FooterMain = styled.footer`
  display: block;
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #fff;
`;

const FooterInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2em 1em;

  ul {
    list-style: none;
    margin: 10px;
  }

  li {
    display: inline-block;
    margin-right: 15px;
  }

  li > a {
    text-decoration: none;
    color: #242424;
  }
`;
