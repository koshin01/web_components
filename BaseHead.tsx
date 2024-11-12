import type { FC } from "react";

interface Props {
  title: string;
  description: string;
  faviconImage: string;
  ogImage: string;
  canonicalURL: string;
  generatorName: string;
}

const BaseHead: FC<Props> = (props) => {
  return (
    <>
      {/* Global Metadata */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" href={props.faviconImage} />
      <link rel="apple-touch-icon" href={props.faviconImage} />
      <meta name="generator" content={props.generatorName} />

      {/* Canonical URL */}
      <link rel="canonical" href={props.canonicalURL} />

      {/* Primary Meta Tags */}
      <title>{props.title}</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.canonicalURL} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={new URL(props.ogImage, props.canonicalURL).toString()} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={props.canonicalURL} />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:image" content={new URL(props.ogImage, props.canonicalURL).toString()} />
    </>
  );
};

export default BaseHead;