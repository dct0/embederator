# Embederator

A Cloudflare worker that embeds Discord videos that are larger than 50mb. Demo at [embederator.gummi.workers.dev](https://embederator.gummi.workers.dev/). Deploy your own at [workers.dev](https://workers.cloudflare.com/).

## Usage

The relevant route is `/embed`. It takes two query parameters:

- `v`: The direct URL of the video to embed.
- `t`: The "thumbnail" of the video (any image).

```example
https://embederator.gummi.workers.dev/embed?v=https://cdn.discordapp.com/attachments/123/456.mp4&t=https://cdn.discordapp.com/attachments/123/456.jpg
```

## Development

```sh
npm install
npm run dev
```

```sh
npm run deploy
```

## How it works

It simply sets the the following HTML metadata. The width and height don't matter, it just needs a value.

```js
{
  'og:image': thumbnail,
  'og:type': 'video.other',
  'og:video:url': video,
  'og:video:width': '1280',
  'og:video:height': '720',
}
```
