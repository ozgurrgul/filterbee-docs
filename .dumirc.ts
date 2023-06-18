import { defineConfig } from 'dumi';
import fs from 'fs';

const LOGO =
  'https://raw.githubusercontent.com/ozgurrgul/filterbee/main/logo_transparent.png';

export default defineConfig({
  themeConfig: {
    name: 'filterbee',
    logo: LOGO,
    nav: [
      {
        link: 'install',
        title: 'Installation',
      },
      {
        link: 'components/filters-container',
        title: 'Components',
      },
      {
        link: 'https://github.com/ozgurrgul/filterbee',
        title: 'Github',
      },
    ],
  },
  styles: [fs.readFileSync('./node_modules/filterbee/dist/style.css', 'utf-8')],
  locales: [
    {
      id: 'en-US',
      name: 'English',
    },
  ],
  logo: LOGO,
  favicons: [LOGO],
});
