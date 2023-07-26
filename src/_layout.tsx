import { SiteData } from './types';

const Layout = (props: SiteData) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        {props.metaProps &&
          Object.entries(props.metaProps).map(([key, value]) => {
            return <meta property={key} content={value} />;
          })}
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default Layout;
