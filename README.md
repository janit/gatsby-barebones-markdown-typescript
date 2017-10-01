# Gatbsy.js barebones Markdown + TypeScript example

Gatsby.js is a static site generator that uses React as a templating / view engine and GraphQL as a data layer for doing queries to content repositories (local or remote).

This is very simple example of using <a href="https://www.gatsbyjs.org">Gatsby.js</a> and it's <a href="http://graphql.org">GraphQL</a> data layer to fetch and render local <a href="https://daringfireball.net/projects/markdown/syntax">Markdown</a> files. In addition the <a href="http://typescriptlang.org">TypeScript</a> support is enabled.

This project is based on <a href="https://www.gatsbyjs.org/tutorial/">the official tutorial</a> and is mostly just a simple boilerplate if I choose to use this somewhere, some day.

## Installation

Install yarn and the Gatsby client as global. Then install packages and run develop

```
$ yarn
$ gatsby develop
```

The site will be available at http://localhost:8000 and the GraphQL explorer at http://localhost:8000/___graphql

## Queries

As said, Gatsby uses GraphQL internally as an API, in this case there's two queries. The first one is to get all the Markdown files on `src/pages/index.tsx`:

```graphql
query IndexQuery {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
```

to display individual posts, the template `src/templates/post.tsx` uses the following query:

```graphql
query BlogPostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      date
    }
  }
}
```

Note that both of these are easy to construct and develop using the included GraphiQL shell running locally at: http://localhost:8000/___graphql

## File structure

Here is a brief overview of the file structure:

- gatsby-config.js (main config)
- gatsby-node.js (custom functionality for loading MD files dynamically )
- src
  - pages
    - index.tsx (root page with listing)
    - about.tsx (simple satic page)
  - posts
    - *.md (blog post content in Markdown)
  - templates
    - post.tsx (template for blog posts)
