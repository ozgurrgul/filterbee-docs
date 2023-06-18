import { defineConfig } from 'dumi';
import fs from 'fs';

export default defineConfig({
  themeConfig: {
    name: 'filterbeeee',
  },
  styles: [fs.readFileSync('./node_modules/filterbee/dist/style.css', 'utf-8')],
  locales: [
    {
      id: 'en-US',
      name: 'English',
    },
  ],
});
