import Layout from '../_layout';

export const HomePage = () => {
  return (
    <Layout title="Embederator">
      <h1>Embederator</h1>
      <p>
        A Cloudflare worker that embeds Discord videos that are larger than 50mb. Demo at{' '}
        <a href="https://embederator.gummi.workers.dev/">embederator.gummi.workers.dev</a>. Deploy your own at{' '}
        <a href="https://workers.cloudflare.com/">workers.dev</a>.
      </p>
      <h2 id="usage">Usage</h2>
      <p>
        The relevant route is <code>/embed</code>. It takes two query parameters:
      </p>
      <ul>
        <li>
          <code>v</code>: The direct URL of the video to embed.
        </li>
        <li>
          <code>t</code>: The thumbnail of the video.
        </li>
      </ul>
      <pre>
        <a href="https://embederator.gummi.workers.dev/embed?v=https://cdn.discordapp.com/attachments/123/456.mp4&amp;t=https://cdn.discordapp.com/attachments/123/456.jpg">
          https://embederator.gummi.workers.dev/embed?v=https://cdn.discordapp.com/attachments/123/456.mp4&amp;t=https://cdn.discordapp.com/attachments/123/456.jpg
        </a>
      </pre>
    </Layout>
  );
};
