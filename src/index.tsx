import { Hono } from 'hono';
import { HomePage } from './pages';
import { EmbedPage } from './pages/embed';

const app = new Hono();

app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night'];
  return c.html(<HomePage messages={messages} />);
});

app.get('/embed', (c) => {
  const video = c.req.query('v');
  const thumbnail = c.req.query('t');

  if (!video || !thumbnail) {
    return c.redirect('/');
  }

  const metaProps = {
    'og:image': thumbnail,
    'og:type': 'video.other',
    'og:video:url': video,
    'og:video:width': '1280',
    'og:video:height': '720',
  };

  return c.html(<EmbedPage title="Embed" metaProps={metaProps} />);
});

export default app;
