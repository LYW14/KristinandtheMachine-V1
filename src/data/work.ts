// Central data model for the Work page gallery.
//
// One flat list, deliberately no category grouping — the gallery reads as
// a single continuous, fluid grid rather than sectioned-off categories.

export interface WorkPiece {
  /** Stable id, also used for the lightbox's data-alt/data-src wiring. */
  id: string;
  /** Required — every image needs real alt text. */
  alt: string;
  /** Optional by design: captions are intentionally hidden by default. */
  caption?: string;
  /** Path to the image in /public/images/work/. */
  src: string;
  /** Roughly how tall the tile should read in the masonry grid. */
  aspect: 'square' | 'portrait' | 'wide';
  /** True once real photography exists at `src`; false renders a placeholder tile. */
  ready: boolean;
}

export const workPieces: WorkPiece[] = [
  {
    id: 'piece-01',
    alt: 'Hand-painted mug styled after a canned San Marzano tomatoes label, with fresh tomatoes and vine set inside',
    src: '/images/work/functional-01-tomato-mug.jpg',
    aspect: 'portrait',
    ready: true,
  },
  {
    id: 'piece-02',
    alt: 'Mug with a hand-painted school of blue mackerel and a deep red rim',
    src: '/images/work/functional-02-fish-mug.jpg',
    aspect: 'portrait',
    ready: true,
  },
  {
    id: 'piece-03',
    alt: 'Chartreuse yellow mug with a carved waffle-grid texture',
    src: '/images/work/functional-03-yellow-textured-mug.jpg',
    aspect: 'portrait',
    ready: true,
  },
  {
    id: 'piece-04',
    alt: "Two cups together: a blue and white striped cup reading 'East Coast' and a cup with a hand-painted seashell pattern",
    src: '/images/work/functional-04-east-coast-and-shell-cups.jpg',
    aspect: 'portrait',
    ready: true,
  },
  {
    id: 'piece-05',
    alt: 'Cup with a blue drip glaze over white stoneware, photographed in afternoon light',
    src: '/images/work/functional-05-blue-drip-cup.jpg',
    aspect: 'portrait',
    ready: true,
  },
  {
    id: 'piece-06',
    alt: "Blue and white striped cup reading 'East Coast' in red script, photographed in dramatic afternoon light",
    src: '/images/work/functional-06-east-coast-cup.jpg',
    aspect: 'portrait',
    ready: true,
  },
  {
    id: 'piece-07',
    alt: 'Checkerboard-patterned planter in blue, orange, and green, holding a snake plant',
    src: '/images/work/larger-forms-01-checkered-planter-snake-plant.jpg',
    aspect: 'portrait',
    ready: true,
  },
  {
    id: 'piece-08',
    alt: 'Checkerboard-patterned planter holding a calathea plant, on a sunlit windowsill',
    src: '/images/work/larger-forms-02-checkered-planter-calathea.jpg',
    aspect: 'portrait',
    ready: true,
  },
  {
    id: 'piece-09',
    alt: 'Heavily textured cup with a bronze and blue glaze pooling over carved facets',
    src: '/images/work/experiments-01-textured-blue-bronze-cup.jpg',
    aspect: 'portrait',
    ready: true,
  },
];