// Central list of experiments. Add a new object here to show it on the
// experiments index and home page. `slug` must match the filename under
// src/pages/experiments/<slug>.astro (or a subpath). `tone` picks the card
// glow color from global.css (.is-pink, .is-orange, .is-yellow, .is-lime,
// .is-sky, .is-violet).

export const experiments = [
  {
    slug: 'economic-globe',
    title: 'Economic News Globe',
    description:
      'Rotatable 3D Earth with glowing hotspots on 22 major economies. Click one to load that country\u2019s latest business headlines.',
    tags: ['three.js', 'data viz', 'news api'],
    date: '2026-04',
    tone: 'sky',
  },
  {
    slug: 'color-field',
    title: 'Color Field',
    description:
      'Drag your cursor across a generative gradient. An experiment in hue, saturation, and perceptual motion.',
    tags: ['design', 'canvas', 'color'],
    date: '2026-04',
    tone: 'pink',
  },
  {
    slug: 'canvas-bloom',
    title: 'Canvas Bloom',
    description:
      'A tiny particle toy that blooms from wherever you click. Built with vanilla canvas and additive blending.',
    tags: ['canvas', 'interaction', 'toy'],
    date: '2026-04',
    tone: 'lime',
  },
{
  slug: "color-mixer",
  title: "Color Mixer (RGBWAUV)",
  description: "Seven-channel LED blend — drag red, green, blue, white, amber, lime, and UV until you land on a color you like. Hex, RGB, and DMX values update live.",
  tags: ["color", "lighting", "sliders", "interactive"],
  date: "2026-04",
  tone: "sky",
},
];
