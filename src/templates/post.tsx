import * as React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Link to="/">homepage</Link>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <i>{post.frontmatter.date}</i>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
