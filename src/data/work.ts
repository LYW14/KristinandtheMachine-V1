// Central data model for the Work page gallery.
//

export type WorkCategory = 'pieces' | 'larger-forms' | 'experiments' | 'process';

export interface WorkPiece {
  /** Stable id, also used for the lightbox URL fragment (#piece-mug-01). */
  id: string;
  category: WorkCategory;
  /** Required — every image needs real alt text, even placeholders. */
  alt: string;
  /** Optional by design: captions are intentionally hidden by default. */
  caption?: string;
  /** Path once real photography is dropped into /public/images/work/. */
  src: string;
  /** Roughly how tall the tile should read in the masonry grid. */
  aspect: 'square' | 'portrait' | 'wide';
}

export const categoryLabels: Record<WorkCategory, { label: string; description: string }> = {
  pieces: {
    label: 'pieces',
    description: 'Mugs, bowls, and pieces made to be used every day.',
  },
  'larger-forms': {
    label: 'Larger Forms',
    description: 'More substantial sculptural and vessel work.',
  },
  experiments: {
    label: 'Experiments',
    description: 'Unusual forms, glaze tests, and work still finding its shape.',
  },
  process: {
    label: 'Process',
    description: 'Throwing, trimming, and glazing — the studio in motion.',
  },
};

const placeholderAspects: WorkPiece['aspect'][] = ['square', 'portrait', 'wide'];

function buildPlaceholderSet(category: WorkCategory, count: number, nounHint: string): WorkPiece[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      id: `${category}-${String(n).padStart(2, '0')}`,
      category,
      alt: `Placeholder photo — ${nounHint} ${n}, to be replaced with final photography`,
      src: `/images/work/${category}-${String(n).padStart(2, '0')}.jpg`,
      aspect: placeholderAspects[i % placeholderAspects.length],
    };
  });
}

export const workPieces: WorkPiece[] = [
  ...buildPlaceholderSet('pieces', 8, 'functional ware piece'),
  ...buildPlaceholderSet('larger-forms', 4, 'larger form'),
  ...buildPlaceholderSet('experiments', 5, 'experimental piece'),
  ...buildPlaceholderSet('process', 4, 'process shot'),
];

export function piecesByCategory(category: WorkCategory): WorkPiece[] {
  return workPieces.filter((piece) => piece.category === category);
}
