export const siteMetadata = {
  title: "Gatsby TypeScript Starter",
  description: "Kick off your next, great Gatsby project with this TypeScript starter. This TypeScript starter ships with the main Gatsby configuration files you might need.",
  author: "Kurt Tomlinson",
};

export const plugins = [
  "gatsby-plugin-typescript",
  "gatsby-plugin-typescript-checker",
  {
    resolve: "gatsby-plugin-graphql-codegen",
    options: {
      documentPaths: [
        "./src/**/*.{ts,tsx}",
        "./node_modules/gatsby-*/**/*.js",
        "./gatsby-node.ts",
      ],
    },
  },
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`,
    },
  },
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "gatsby-starter-default",
      short_name: "starter",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "src/images/gatsby-icon.png",
    },
  },
];
