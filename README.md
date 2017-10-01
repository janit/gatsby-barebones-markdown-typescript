# Gatbsy.js barebones Markdown + TypeScript example

A very simple example of using Gatsby.js and it's GraphQL data layer to fetch and render Markdown. In addition the TypeScript support is enabled.

This project is based on <a href="https://www.gatsbyjs.org/tutorial/">the official tutorial</a> and is mostly just a simple boilerplate if I choose to use this somewhere, some day.

## Installation

Install yarn and the Gatsby client as global. Then install packages and run develop

```
$ yarn
$ gatsby develop
```

The site will be available at http://localhost:8000 and the GraphQL explorer at http://localhost:8000/___graphql

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
