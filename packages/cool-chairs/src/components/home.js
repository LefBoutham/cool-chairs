import React from "react";
import { connect, styled } from "frontity";

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <div>
      <h2>{page.title.rendered}</h2>
      <Content dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
};

export default connect(Home);

const Content = styled.div`
  margin-top: 10px;
`;
