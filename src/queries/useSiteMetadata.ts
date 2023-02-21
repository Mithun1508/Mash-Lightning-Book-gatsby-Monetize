import { WalletPosition } from "@getmash/client-sdk/dist/settings";
import { graphql, useStaticQuery } from "gatsby";

type MashConfig = {
  sdk: string;
  earnerID: string;
  resourceID: string;
  handle: string;
};

type Chapter = {
  number: number;
  title: string;
};

type SiteMetadata = {
  author: string;
  description: string;
  title: string;
  shortTitle: string;
  book: {
    amazon?: string;
    chapters: Chapter[];
  };
  siteUrl: string;
  social: { twitter: string; email: string };
  mash: MashConfig;
};

type Site = { site: { siteMetadata: SiteMetadata } };

const QUERY = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        author
        description
        siteUrl
        shortTitle
        title

        social {
          twitter
        }

        book {
          amazon
          chapters {
            number
            title
          }
        }

        mash {
          earnerID
          resourceID
        }
      }
    }
  }
`;

export default function useSiteMetdata() {
  const site = useStaticQuery<Site>(QUERY);
  return site.site.siteMetadata;
}
