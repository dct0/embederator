import { HtmlEscapedString } from 'hono/utils/html';

export type Meta = Record<string, string>;

export interface SiteData {
  title: string;
  metaProps?: Meta;
  children?: HtmlEscapedString[];
}
