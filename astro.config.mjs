import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Astro ships zero client-side JS by default, which matters here: this is a
// photography-and-prose site, not an app, so the fewer bytes we ship the
// better it serves the "quiet, intentional" brief. The one interactive piece
// (the gallery lightbox) is a small vanilla <script>, not a hydrated
// framework island, so it stays lightweight without pulling in React.
export default defineConfig({
  integrations: [
    tailwind({
      // We hand-write global.css and import it ourselves, so we don't need
      // Tailwind's auto-injected base stylesheet fighting with our tokens.
      applyBaseStyles: false,
    }),
  ],
});
