import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

import { ImageQuery } from "../../graphql-types";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
`;

const Image = () => {
  const data = useStaticQuery(imageQuery) as ImageQuery;

  if (data.placeholderImage?.childImageSharp?.fluid == null) {
    throw Error(
      `data.placeholderImage.childImageSharp.fluid must not be null: ${JSON.stringify(
        data,
        null,
        2
      )}`
    );
  }

  return (
    <Img fluid={data.placeholderImage.childImageSharp.fluid as FluidObject} />
  );
};

export default Image;
