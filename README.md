# gatsby-starter-typescript

This starter is based on gatsby-starter-default. Typescript support has been added for Pages, Components, and gatsby-\* files (gatsby-browser.ts, gatsby-config.ts, gatsby-node.ts, and gatsby-ssr.ts). Automatic type generation for GraphQL queries in Pages, Components, and the gatsby-node.ts file has also been added.

## Quick start

1.  **Create a site using this starter.**

    Create a new site with the Gatsby CLI using this starter.

    ```shell
    gatsby new my-typescript-starter https://github.com/kurttomlinson/gatsby-starter-typescript
    ```

1.  **Get to work.**

    Move into your site's directory and start up the development server to see your changes live.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Marvel at your creation!**

    You can see your site at `http://localhost:8000`. You also have access to a tool that helps you understand your GraphQL schema and the data you have loaded into it at `http://localhost:8000/___graphql`.

## Modified commands

A few commands in `scripts` in package.json have been updated to make them more TypeScript-aware:

- `build`: This command will run all type checks before building the project. If the type checks fail, then a build will not be produced.
- `develop`: This command works the same way as it does in a standard Gatsby app, but it has been updated to print out TypeScript errors on every save. This gives live feedback as you work.
- `format`: This command runs prettier on all the same files it used to plus `ts` and `tsx` files.
- `test`: This command runs a type check before telling you that tests still need to be set up for this starter project. (The goal of this starter project is to add TypeScript to the default starter project as simply as possible. Adding tests is outside the scope of this project.)

## Added commands

Several new commands have been added to `scripts` in package.json to make writing TypeScript easier. You typically won't need to run these commands as type checking has been build into the standard gatsby development flow with the modifications made to the scripts above.

- `type-check`: Run the TypeScript compiler and print out all errors.
- `type-check:watch`: Run the TypeScript compiler in watch mode and print out all errors.

## GraphQL type generation

Types are automatically generated for GraphQL queries in Pages, Components, and `gatsby-node.ts` If you don't have any queries in your `gatsby-node.ts` file, then you may want to remove `./gatsby-node.ts` from `plugins.gatsby-plugin-graphql-codegen.options.documentPaths` to get rid of the warning about `gatsby-plugin-graphql-codegen` being `unable to find any GraphQL type definitions for the following pointers: ...gatsby-node.ts`.

### Examples

See `src/components/image.tsx` (or the excerpt below) for an example of how to type a GraphQL query in a component. Note: queries must be named in order to type them because the code generator creates the type based on the name of the query.

```tsx
// src/components/image.tsx

import { ImageQuery } from "../../graphql-types"

export const imageQuery = graphql`
  query Image {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Image = () => {
  const data = useStaticQuery(imageQuery) as ImageQuery

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
```

GraphQL queries in `gatsby-node.ts` are also supported. After writing your query, you may need to restart your gatsby development server before you can import the automatically generated type. You must name any queries in `gatsby-node.ts` for them to be picked up by the code generator.

```ts
// gatsby-node.ts

import { ArticleQuery } from "./graphql-types"

const { data: articleData }: { data?: ArticleQuery } = await graphql(`
  query Article {
    allArticlesJson {
      nodes {
        title
        date
        body
      }
    }
  }
`)
```
