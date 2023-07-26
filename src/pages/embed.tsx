import Layout from '../_layout';
import { SiteData } from '../types';

export const EmbedPage = (props: SiteData) => {
  const video = props.metaProps?.['og:video:url'];

  return (
    <Layout title="Video" metaProps={{ ...props.metaProps }}>
      <h1>Embed this nerd</h1>
      <p>{video}</p>
    </Layout>
  );
};
