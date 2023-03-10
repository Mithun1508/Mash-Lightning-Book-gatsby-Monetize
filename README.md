# Mash Lightning Book 

<img src="https://uploads-ssl.webflow.com/6113f4faacfcdff6db1e95f4/611405d78ad06bf392d31e13_MASH-Logo%2BMASH-noborder-right-black-black.png" height="100px" width="auto" />

Kick off your project with this Book starter powered by Mash to allow you to easily monetize any book on the web.

## Quick start


## Configuration

### Mash Configuration

  The mash config can be found in `gatsby-config.ts` under `mash` key. All settings can be changed there and it will be reflected across the app. In order to have Mash working correctly you will require a earner account. This can be created in the [Earner Dashboard](https://wallet.getmash.com/earn). The SDK value should not change.

### Gatsby Config

  The `gatsby-config.ts` file contains some top level metadata. Populate the data in `siteMetadata` and it will be automatically loaded in the site. 

  The **chapters** key is important for loading the table of contents. Configure your chapters + titles here. This is used to properly configure the table of contents and the order of the book. Omiting this will cause problems and the book won't load properly.

### Book Content

  The book content is found in `content/book`

  The book is setup using Markdown. The top of each markdown file there should be a section which identifies metadata the components will use to pre-populate chapter and section data automatically.

  ```
  ---
  chapter: 0
  section: 0
  free: true
  title: Dedication
  slug: dedication
  ---
  ```

  `slug`: The URL that will be shown in the browser

  `free`: Boolean flag that will let the Paywall component know if this content should be automatically shown

  Chapter and section are used for ordering the book content correctly.

  **Chapter 0** is used as frontmatter for the book. It is helpful to use this chapter number to add pages such as Legal, Dedications. 

### Styling

The book uses TailwindCSS for general styles. TailwindCSS is configured using `tailwind.config.js` and `src/styles/global.css`

To change the styling of the book simplify modify `src/styles/style.css`. This contains the general style for the markdown text when it is rendered in react. 


## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

![Screenshot 2023-02-21 074020](https://user-images.githubusercontent.com/93249038/220232327-25143e19-76a4-4b24-8f6a-14eb42406b45.png)
