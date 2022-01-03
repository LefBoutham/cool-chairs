import React from "react";
import { connect, styled } from "frontity";
import dayjs from "dayjs";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const formattedDate = dayjs(post.date).format("DD.MM.YYYY");

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <PostInfo>
        <p>
          <strong>Posted: </strong>
          {formattedDate}
          <br />
          <strong>Author: </strong>
          {author.name}
        </p>
      </PostInfo>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default connect(Post);

const PostInfo = styled.div``;
